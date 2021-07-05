import React, { useState } from 'react';
import MaterialTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from './Checkbox';

const Table = ({
  data, order, orderBy, numSelected, rowCount,
}) => {
  const [selectedIds] = useState(data.reduce((acc, row) => {
    acc[row.id] = false;
    return acc;
  }, {}));
  if (!data.length) return null;

  const headCells = Object.keys(data[0]);

  const handleRowSelect = () => {
    // TODO
  };
  const handleAllSelect = () => {
    // TODO
  };

  return (
    <MaterialTable>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={() => handleAllSelect()}
            />
          </TableCell>
          {headCells.map((headCell) => (
            headCell != 'id' && <TableCell
              key={headCell}
              align="left"
              padding="default"
              sortDirection={orderBy === headCell ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell}
                // onClick={() => console.log('make api call for sorting by', headCell)}
              >
                {headCell}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data
          .map((row) => (
            <TableRow
              hover
              onClick={() => handleRowSelect(row)}
              key={row.id}
              selected={selectedIds[row.id]}
            >
              <TableCell padding="checkbox">
                <Checkbox checked={row.isSelected} />
              </TableCell>
              {headCells.map((headCell) => headCell != 'id' && <TableCell padding="default" align="left">{row[headCell]}</TableCell>)}
            </TableRow>
          ))}
      </TableBody>
    </MaterialTable>
  );
};

export default Table;
