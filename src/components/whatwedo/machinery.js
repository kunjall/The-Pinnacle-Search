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
    fontSize: 14, // Font size for table head
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14, // Font size for table body
    textAlign: 'center', // Center align table cell content
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

function createData(Item, QTY) {
  return { Item, QTY };
}

const rows = [
  createData('HDD', 20),
  createData('OTDR', 5),
  createData('Splicing Machines', 12),
  createData('Power Meter', 6),
  createData('VFL', 12),
  createData('Rodometer', 5),
  createData('JCB', 1),
  createData('Jack Hammer', 2),
  createData('Cable Fault Locator', 1),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} sx={{ width: '80%', margin: 'auto' }}> {/* Adjust width and margin */}
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Item</StyledTableCell>
            <StyledTableCell align="center">QTY(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Item}>
              <StyledTableCell component="th" scope="row">
                {row.Item}
              </StyledTableCell>
              <StyledTableCell align="center">{row.QTY}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}