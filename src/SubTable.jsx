import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import DetailsTable from './DetailsTable';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Activity 1', 567.80, '29,86,792'),
  createData('Activity 2', 567.80, '29,86,792'),
  createData('Activity 3', 567.80, '29,86,792'),
  createData('Activity 4', 567.80, '29,86,792'),
];

export default function BasicTable() {


  const [er1,setEr1] = React.useState(false)
  const [er2,setEr2] = React.useState(false)
  const [er3,setEr3] = React.useState(false)
  const [er4,setEr4] = React.useState(false)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800, minHeight: 300 }} aria-label="simple table">
        <TableBody sx={{ display: 'flex', flexDirection: 'column', width:'100%' }}>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell><SubdirectoryArrowRightIcon/></TableCell>
              <TableCell align="right"><Checkbox color='primary'/></TableCell>
              <TableCell component="th" scope="row">Activity 1</TableCell>
              <TableCell align="right">567.80</TableCell>
              <TableCell align="right">29,86,792</TableCell>
              <TableCell align="right">{er1? <KeyboardArrowUpIcon onClick={()=>{setEr1(!er1)}} /> :<KeyboardArrowDownIcon onClick={()=>{setEr1(!er1)}} />}</TableCell>
              {er1 ? <DetailsTable/> : <div></div>}
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell><SubdirectoryArrowRightIcon/></TableCell>
              <TableCell align="right"><Checkbox color='primary'/></TableCell>
              <TableCell component="th" scope="row">Activity 2</TableCell>
              <TableCell align="right">567.80</TableCell>
              <TableCell align="right">29,86,792</TableCell>
              <TableCell align="right">{er2? <KeyboardArrowUpIcon onClick={()=>{setEr2(!er2)}} /> :<KeyboardArrowDownIcon onClick={()=>{setEr2(!er2)}} />}</TableCell>
              {er2 ? <DetailsTable/> : <div></div>}
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell><SubdirectoryArrowRightIcon/></TableCell>
              <TableCell align="right"><Checkbox color='primary'/></TableCell>
              <TableCell component="th" scope="row">Activity 3</TableCell>
              <TableCell align="right">567.80</TableCell>
              <TableCell align="right">29,86,792</TableCell>
              <TableCell align="right">{er3? <KeyboardArrowUpIcon onClick={()=>{setEr3(!er3)}} /> :<KeyboardArrowDownIcon onClick={()=>{setEr3(!er3)}} />}</TableCell>
              {er3 ? <DetailsTable/> : <div></div>}
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell><SubdirectoryArrowRightIcon/></TableCell>
              <TableCell align="right"><Checkbox color='primary'/></TableCell>
              <TableCell component="th" scope="row">Activity 4</TableCell>
              <TableCell align="right">567.80</TableCell>
              <TableCell align="right">29,86,792</TableCell>
              <TableCell align="right">{er4? <KeyboardArrowUpIcon onClick={()=>{setEr4(!er4)}} /> :<KeyboardArrowDownIcon onClick={()=>{setEr4(!er4)}} />}</TableCell>
              {er4 ? <DetailsTable/> : <div></div>}
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}