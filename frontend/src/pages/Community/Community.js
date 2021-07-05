import React, { useEffect, useState } from 'react';
import Table from '../../components/Table/Table';
import './Community.css';
import api from '../../utils/Api';

const Community = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    api.get('api/main/', { table: 'Համայնք' }, ({ records }) => {
      const population = records.reduce((acc, { id, fields }) => {
        acc.push({
          id,
          Անվանում: fields['Անվանում'] || '',
          Շրջան: fields['Շրջան'] || '',
          Ղեկավար: fields['Ղեկավար'] || '',
          Հեռախոս: fields['Հեռախոս'] || '',
          Բնակչություն: fields['Բնակչություն'] || '',
          Տարածք: fields['Տարածք'] || '',
          Բնակավայրեր: fields['Բնակավայրեր'] || ''
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
