import React, { useState, useEffect } from 'react';
import {
  Avatar, makeStyles, Typography, CircularProgress,
} from '@material-ui/core';
import recicleBin from '../../assets/vectors/rescicleBin.svg';
import Button from '../../components/BlueButton/BlueButton';
import PersonMainInfo from '../../components/PersonMainInfo/PersonMainInfo';
import api from '../../utils/Api';
import './CommunityDetails.css';
import Table from '../../components/Table/Table';

const TABLE_COLUMNS = ['Անվանում', 'Կարգավիճակ', 'Շրջան', 'Տեսակը']

const filterFields = (record, filterList) => {
    const filtered = {};
    filterList.forEach(key => {
        filtered[key] = record[key]
    });
    return [filtered]
}

const filterArray = (list, filter) => {
    return list.map( record => filterFields(record, filter))
}

const CommunityDetails = ({ communityName = 'Զուար', match: { url } }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [, communityId] = url.split('/community/');
  const [details, setDetails] = useState({
    մակերես: '230',
    'բնակիչների քանակ': '23u4',
    շրջան: 'Շահումյան',
  });

  useEffect(() => {
    setIsLoading(true);
    api.get('api/main/', {
      table: `Համայնք/${communityId}`,
      agregations: [
        {
          field: 'Բնակավայրեր', table: 'Բնակավայր',
        },
        //   {
        //     field: 'Ղեկավար', table: 'Բնակիչ',
        //   }
      ],
    }, (records) => {
      setIsLoading(false);
      setData({
        settlements: filterArray(records.fields['Բնակավայրեր'], ['Անվանում', 'Շրջան', 'Տեսակ', 'Կարգավիճակ']),
      });
      console(data, '===data');
      const population = records.reduce((acc, { id, fields }) => {
        acc.push({
          id,
          Անվանում: fields['Անվանում'] || '',
          Շրջան: fields['Շրջան'] || '',
          Ղեկավար: fields['Ղեկավար'] || '',
          Հեռախոս: fields['Հեռախոս'] || '',
          Բնակչություն: fields['Բնակչություն'] || '',
          Տարածք: fields['Տարածք'] || '',
          Բնակավայրեր: fields['Բնակավայրեր'] || '',
        });
        return acc;
      }, []);
      setData(population);
    }, () => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <CircularProgress
        style={{ display: 'block', margin: '0 auto', marginTop: 100 }}
      />
    );
  }
  console.log(data);

  return (
    <div className="container">
      <div className="header">
        <Typography variant="h5">{communityName}</Typography>
        <div className="images">
          <img src={recicleBin} alt="recicleBin" onClick={() => console.log('-Ջնջել-')} />
          <Button text="Խմբագրել" onClick={() => console.log('-Խմբագրել-')} />
        </div>
      </div>
      <div className="details withMargin">
        <div className="list">
          <Typography variant="b" component="h3">Մակերես։&nbsp;</Typography>
          <Typography component="h3">{details['մակերես']}</Typography>
        </div>
        <div className="list">
          <Typography variant="b" component="h3">Բնակիչների քանակը։&nbsp;</Typography>
          <Typography component="h3">{details['բնակիչների քանակ']}</Typography>
        </div>
        <div className="list">
          <Typography variant="b" component="h3">Շրջան:&nbsp;</Typography>
          <Typography component="h3">{details['շրջան']}</Typography>
        </div>
      </div>
      <div className="withMargin">
        <Typography variant="b" component="h3">Ընդրկված բնակավայրեր</Typography>
        <Table
          data={data.settlements || []}
          loading={isLoading}
        />
      </div>
      <div className="withMargin">
        <Typography variant="b" component="h3">Համայնքապետ</Typography>
        <PersonMainInfo />
      </div>
      <div className="withMargin">
        <Typography variant="b" component="h3">Ադմինիստրացիա</Typography>
        <Table
          data={[{
            Անուն: 'Անուն', Ազգանուն: 'Ազգանուն', Հեռախոսահամար: 'Հեռախոսահամար', 'Էլ․ հասցե': 'հասցե',
          }]}
          loading={isLoading}
        />
      </div>
      <div className="withMargin">
        <Typography variant="b" component="h3">Ավագանու անդամներ</Typography>
        <Table
          data={[{
            Անուն: 'Անուն', Ազգանուն: 'Ազգանուն', Հեռախոսահամար: 'Հեռախոսահամար', 'Էլ․ հասցե': 'հասցե',
          }]}
          loading={isLoading}
        />
      </div>
    </div>
  );
};

export default CommunityDetails;
