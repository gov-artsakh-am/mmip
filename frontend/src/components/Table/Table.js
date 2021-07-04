import React, { useState } from 'react';
import MaterialTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Chip from '@material-ui/core/Chip';
import Checkbox from './Checkbox';
import LogoWithText from './LogoWithText';

const headCells = [
  {
    id: 'id', label: 'ID',
  },
  {
    id: 'family', label: 'Ընտանիք',
  },
  {
    id: 'members', label: 'Անդամներ',
  },
  {
    id: 'hamaynq', label: 'Համայնք',
  },
  {
    id: 'bnakavayr', label: 'Բնակավայր',
  },
  {
    id: 'address', label: 'Հասցե',
  },
];

const Table = ({
  data, order, orderBy, numSelected, rowCount,
}) => {
  const [selectedIds, setSelectedIds] = useState(data.reduce((acc, row) => {
    acc[row.id] = false;
    return acc;
  }, {}));

  const renderTableCell = (row) => {
    if (Array.isArray(row)) {
      return row.map((label) => <Chip label={label} />);
    }
    if (row.logo) {
      return <LogoWithText logo={row.logo} label={row.label} />;
    }
    return row;
  };

  const handleRowSelect = (row) => {
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
            <TableCell
              key={headCell.id}
              align="left"
              padding="default"
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                onClick={() => console.log('make api call for sorting by', headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data
          .map((row, index) => {
            const labelId = `enhanced-table-checkbox-${index}`;

            return (
              <TableRow
                hover
                onClick={() => handleRowSelect(row)}
                key={row.name}
                selected={selectedIds[row.id]}
              >
                <TableCell padding="checkbox">
                  <Checkbox checked={row.isSelected} />
                </TableCell>
                <TableCell component="th" id={labelId} scope="row" padding="default">
                  {row.id}
                </TableCell>
                <TableCell padding="default" align="left">{renderTableCell(row.family)}</TableCell>
                <TableCell padding="default" align="left">{renderTableCell(row.members)}</TableCell>
                <TableCell padding="default" align="left">{renderTableCell(row.hamaynq)}</TableCell>
                <TableCell padding="default" align="left">{renderTableCell(row.bnakavayr)}</TableCell>
                <TableCell padding="default" align="left">{renderTableCell(row.address)}</TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </MaterialTable>
  );
};

export default Table;
