import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Work Item 1', 567.80, '29,86,792',4,5),
  createData('Work Item 2', 567.80, '29,86,792',4,5),
  createData('Work Item 3', 567.80, '29,86,792',4,5),
];

export default function DetailsTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800, minHeight: 300 }} aria-label="simple table">
        <TableBody sx={{ display: 'flex', flexDirection: 'column', width:'100%' }}>
        {rows.map((row)=>(
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell><SubdirectoryArrowRightIcon/></TableCell>
                <TableCell align="right"><Checkbox color="primary"/></TableCell>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                </TableRow>
        ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}