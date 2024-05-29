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

function createData(Item) {
  return { Item};
}

const rows = [
  createData('HDD'),
  createData('OTDR'),
  createData('Splicing Machines'),
  createData('Power Meter'),
  createData('VFL'),
  createData('Rodometer'),
  createData('JCB'),
  createData('Jack Hammer'),
  createData('Cable Fault Locator'),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} sx={{ width: '80%', margin: 'auto' }}> {/* Adjust width and margin */}
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Item</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Item}>
              <StyledTableCell component="th" scope="row">
                {row.Item}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}