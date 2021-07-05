import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Table from '../../components/Table/Table';
import './Community.css';
import api from '../../utils/Api';

const Community = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    api.get('api/main/', {
      table: 'Համայնք',
      agregations: [
        {
          field: 'Բնակավայրեր', table: 'Բնակավայր'
        },
      ],
    }, ({ records }) => {
      console.log(records);
      const population = records.reduce((acc, { id, fields }) => {
        acc.push({
          id,
          Անվանում: fields['Անվանում'] || '',
          Շրջան: fields['Շրջան'] || '',
          Ղեկավար: fields['Ղեկավար'] || "",
          Հեռախոս: fields['Հեռախոս'] || '',
          Բնակչություն: fields['Բնակչություն'] || '',
          Տարածք: fields['Տարածք'] || '',
          Բնակավայրեր: (fields['Բնակավայրեր'] || []).map((data) => data['Անվանում']).join(', ')
        });
        console.log(acc, 'acc');
        return acc;
      }, []);
      console.log(population, 'population');
      setIsLoading(false);
      setData(population);
    }, (e) => {
      console.log(e, 'aceec');
      setIsLoading(false);
    });
  }, []);
  console.log(data, 'iii');

  return (
    <div className="populationContainer">
      <Table
        data={data}
        onRowDoubleClick={(id) => history.push(`community/${id}`)}
        loading={isLoading}
      />
    </div>
  );
};

export default Community;
