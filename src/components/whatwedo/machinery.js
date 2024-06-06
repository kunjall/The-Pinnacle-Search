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
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '10px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: 'center',
    padding: '10px',
    color: '#555',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:hover': {
    backgroundColor: theme.palette.action.selected,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const TableWrapper = styled(TableContainer)(({ theme }) => ({
  width: '80%',
  margin: '20px auto',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  overflow: 'hidden',
}));

function createData(Item) {
  return { Item };
}

const rows = [
  createData('Horizontal Directional Drilling'),
  createData('optical time-domain reflectometer'),
  createData('Splicing Machines'),
  createData('Power Meter'),
  createData('Visual Fault Locator'),
  createData('Rodometer'),
  createData('JCB'),
  createData('Jack Hammer'),
  createData('Cable Fault Locator'),
];

export default function CustomizedTables() {
  return (
    <TableWrapper component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">List of Machinery</StyledTableCell>
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
    </TableWrapper>
  );
}
