import React, { useEffect, useState } from 'react';
import FamilyTable from '../../components/FamilyTable/FamilyTable';
import api from '../../utils/Api';

const Family = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    api.get('api/main', { table: 'Ընտանիք' }, ({ records }) => {
      const families = records.reduce((acc, { fields, id }) => {
        acc.push({
          id,
          Անդամներ: fields['*Անդամներ'] || '',
          Բնակարան: fields['Բնակարան'] || '',
          Համայնք: fields['*Համայնք'] || '',
        });

        return acc;
      }, []);

      setData(families);
      setLoading(false);

      console.log('I got this families: ', families);
    });
  }, []);

  return (
    <div className="familyContainer">
      <FamilyTable data={data} loading={loading} />
    </div>
  );
};

export default Family;
