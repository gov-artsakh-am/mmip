import React, { useEffect, useState } from 'react';
import MaterialTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { Avatar, CircularProgress } from '@material-ui/core';
import Checkbox from '../Table/Checkbox';

import api from '../../utils/Api';

// const data = [
//   {
//     ID: 1223313,
//     Ընտանիք: "Այվազյաններ",
//     Անդամներ: ["testId1", "testId2"],
//     Համայնք: "Ստեփանակերտ",
//     Բնակավայր: "Ստեփանակերտ",
//     Հասցե: "Թումանյան 4/12",
//   },
//   {
//     ID: 445564,
//     Ընտանիք: "Պետրոսյաններ",
//     Անդամներ: ["testId3", "testId4"],
//     Համայնք: "Զուար",
//     Բնակավայր: "Ապահեն",
//     Հասցե: "Տուն 12",
//   },
// ];

const FamilyTable = ({
  numSelected,
  rowCount,
  orderBy,
  data,
  loading = false,
}) => {
  const [selectedIds] = useState(
    data.reduce((acc, row) => {
      acc[row.id] = false;
      return acc;
    }, {}),
  );

  console.log('Family table got this data throw props: ', data);

  if (loading) {
    return (
      <CircularProgress
        style={{ margin: '0 auto', display: 'block', marginTop: 100 }}
      />
    );
  }

  if (data.length === 0) {
    return <div />;
  }

  const headCells = Object.keys(data[0]);

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
          {headCells.map(
            (headCell) => headCell != 'id' && (
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
            ),
          )}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow
            hover
            onClick={() => handleRowSelect(row)}
            key={row.id}
            selected={selectedIds[row.id]}
          >
            <TableCell padding="checkbox">
              <Checkbox checked={row.isSelected} />
            </TableCell>
            {headCells.map((headCell) => {
              if (headCell === 'Անդամներ') {
                return (
                  <TableCell padding="default" align="center">
                    <Avatar style={{ backgroundColor: '#5B84D3' }}>
                      {row[headCell].length}
                    </Avatar>
                  </TableCell>
                );
              }
              return (
                headCell != 'id' && (
                  <TableCell padding="default" align="left">
                    {row[headCell]}
                  </TableCell>
                )
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </MaterialTable>
  );
};

export default FamilyTable;
