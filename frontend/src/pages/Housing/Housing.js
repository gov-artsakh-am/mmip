import React, { useState, useEffect } from 'react';
import Table from '../../components/Table/Table';
import api from '../../utils/Api';

const Housing = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    api.get('api/main/', { table: 'Բնակավայր' }, ({ records }) => {
      const housing = records.reduce((acc, { fields, id }) => {
        // acc.push({
        //   id,
        //   Կոորդինատներ: fields['ՀԾՀ'] || '',
        //   "Գույքի տեսակ": fields['Անուն'] || '',
        //   "Կառույցի տեսակ": fields['Ազգանուն'] || '',
        //   "Ընդհանուր մակերես": fields['Հայրանուն'] || '',
        //   'Բնակելի մակերես': fields['Ծննդյան օր'] || '',
        //   "Կառույցի վիճակը": fields['Ընտանիք'] || '', // missing
        //   'Կառուցման ամսաթիվ': fields['Գրանցման հասցե'] || '', // missing
        // });
        acc.push({
          id,
          Անվանում: fields['Անվանում'] || '',
          Շրջան: fields['Շրջան'] || '',
          Կարգավիճակ: fields['Կարգավիճակ'] || '',
          Տեսակը: fields['Տեսակը'] || '',
        });
        return acc;
      }, []);
      setData(housing);
    });
  }, []);

  return <Table data={data} />;
};

export default Housing;
