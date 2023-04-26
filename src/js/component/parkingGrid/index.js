import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ParkingGrid(props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='customized table'>
        <TableHead>
          <TableRow>
            {props?.columns?.map((column) => (
              <StyledTableCell key={column}>{column}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props?.rows?.map((row) => (
            <StyledTableRow key={row?.entity}>
              <StyledTableCell component='th' scope='row'>
                {row?.entity}
              </StyledTableCell>
              {row?.allocated && (
                <StyledTableCell>{row?.allocated}</StyledTableCell>
              )}
              {row?.entered && (
                <StyledTableCell>{row?.entered}</StyledTableCell>
              )}
              {row?.exited && <StyledTableCell>{row?.exited}</StyledTableCell>}
              {row?.inside && <StyledTableCell>{row?.inside}</StyledTableCell>}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
