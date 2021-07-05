import React, { useEffect, useState } from 'react';
import Table from '../../components/Table/Table';
import './Community.css';
import api from '../../utils/Api';

const Community = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    api.get('api/main/', {
      table: 'Համայնք', agregations: [{
        field: 'Բնակավայրեր', table: 'Բնակավայր'
      }, {
        field: 'Ղեկավար', table: 'Բնակիչ'
      }]
    }, ({ records }) => {
      const population = records.reduce((acc, { id, fields }) => {
        acc.push({
          id,
          Անվանում: fields['Անվանում'] || '',
          Շրջան: fields['Շրջան'] || '',
          Ղեկավար: (fields['Ղեկավար'] || []).map((data) => `${data['Անուն']} ${data['Ազգանուն']}`).join(', '),
          Հեռախոս: fields['Հեռախոս'] || '',
          Բնակչություն: fields['Բնակչություն'] || '',
          Տարածք: fields['Տարածք'] || '',
          Բնակավայրեր: (fields['Բնակավայրեր'] || []).map((data) => data['Անվանում']).join(', ')
        });
        return acc;
      }, []);
      setData(population);
    });
  }, []);

  return (
    <div className="populationContainer">
      <Table data={data} />
    </div>
  );
};

export default Community;
