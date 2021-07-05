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
  const [selectedIds, setSelectedIds] = useState({});
  const [isSelectAll, setIsSelectAll] = useState(false);
  if (!data.length) return null;

  const headCells = Object.keys(data[0]);

  const handleRowSelect = (row) => {
    if (isSelectAll) {
      setIsSelectAll(false);
    } else if (Object.values(selectedIds).filter(Boolean).length === data.length - 1) {
      setIsSelectAll(true);
    }
    setSelectedIds({ ...selectedIds, [row.id]: !selectedIds[row.id] });
    return true;
  };

  const handleAllSelect = () => {
    if (!isSelectAll) setSelectedIds(data.reduce((acc, { id }) => ({ ...acc, [id]: true }), {}));
    else setSelectedIds({});
    setIsSelectAll(!isSelectAll);
  };

  return (
    <MaterialTable>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={isSelectAll}
              // value={isSelectAll}
              onChange={() => handleAllSelect()}
            />
          </TableCell>
          {headCells.map((headCell) => (
            headCell !== 'id' && (
            <TableCell
              key={headCell}
              align="left"
              padding="default"
              sortDirection={orderBy === headCell ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell}
              >
                {headCell}
              </TableSortLabel>
            </TableCell>
            )
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data
          .map((row) => (
            <TableRow
              hover
              // onClick={() => handleRowSelect(row)}
              key={row.id}
              // selected={isSelectAll || selectedIds[row.id]}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  checked={isSelectAll || !!selectedIds[row.id]}
                  // value={isSelectAll || selectedIds[row.id]}
                  onChange={() => handleRowSelect(row)}
                />
              </TableCell>
              {headCells.map((headCell) => headCell !== 'id' && <TableCell padding="default" align="left">{row[headCell]}</TableCell>)}
            </TableRow>
          ))}
      </TableBody>
    </MaterialTable>
  );
};

export default Table;
