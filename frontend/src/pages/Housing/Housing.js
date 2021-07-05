import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router";

import Table from '../../components/Table/Table';
import api from '../../utils/Api';

const Housing = () => {
  const [data, setData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    api.get('api/main/', { table: 'Բնակարան' }, ({ records }) => {
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
      console.log(housing);
    });
  }, []);

  const onRowDoubleClick = (id) => {
    history.push("/housing/" + id);
  };

  return <Table data={data} onRowDoubleClick={onRowDoubleClick}/>;
};

export default Housing;
