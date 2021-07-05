import React, { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import "./Population.css";
import api from "../../utils/Api";
import { useHistory } from "react-router";

const Population = () => {
  const [data, setData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    api.get("api/main/", { table: "Բնակիչ" }, ({ records }) => {
      const population = records.reduce((acc, { fields, id }) => {
        acc.push({
          id,
          ՀԾՀ: fields["ՀԾՀ"] || "",
          Անուն: fields["Անուն"] || "",
          Ազգանուն: fields["Ազգանուն"] || "",
          Հայրանուն: fields["Հայրանուն"] || "",
          "Ծննդյան տարեթիվ": fields["Ծննդյան օր"] || "",
          Ընտանիք: fields["Ընտանիք"] || "", // missing
          "Գրանցման հասցե": fields["Գրանցման հասցե"] || "", // missing
        });
        return acc;
      }, []);
      setData(population);
    });
  }, []);

  const onRowDoubleClick = (id) => {
    history.push("/population/" + id);
  };

  return (
    <div className="populationContainer">
      <Table data={data} onRowDoubleClick={onRowDoubleClick} />
    </div>
  );
};

export default Population;
