import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import SubTable from './SubTable'
import Sidebar from './Sidebar'



export default function BasicTable() {
  
  const [er1,setEr1] = React.useState(false)
  const [er2,setEr2] = React.useState(false)
  const [er3,setEr3] = React.useState(false)
  const [er4,setEr4] = React.useState(false)
  const [er5,setEr5] = React.useState(false)
  const [sidebar,setSidebar] = React.useState(false)

  return (
    <>
      <div style={{color:'black' ,background: 'white', display: 'flex'}}>
        <div style={{display:'flex'}}>
          <div style={{padding: 8,margin:8, fontSize:20}} >Overview</div>
          <div style={{padding: 8,margin:8, fontSize:20, color: 'grey'}} >Other</div>
        </div>
        <div style={{background: 'wheat', height:40,marginTop:10,marginLeft:120}}><Sidebar/></div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400, minHeight: 150 }} aria-label="simple table">
          <TableHead sx={{ display: 'flex', flexDirection: 'column'}}>
            <TableRow style={{color: 'blue'}}>
              <TableCell align="right"><Checkbox color="primary"/></TableCell>
              <TableCell>Packages</TableCell>
              <TableCell align="right">Rate&nbsp;(in sqft)</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ display: 'flex', flexDirection: 'column', width:'100%' }}>
              <TableRow
                key='Civil1'
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="right"><Checkbox color="primary"/></TableCell>
                <TableCell component="th" scope="row">Civil 1</TableCell>
                <TableCell align="right">567.80</TableCell>
                <TableCell align="right">29,86,792</TableCell>
                <TableCell align="right">{er1? <RemoveIcon onClick={()=>{setEr1(!er1)}} /> :<AddIcon onClick={()=>{setEr1(!er1)}} />}</TableCell>
                {er1 ? <SubTable/> : <div></div>}
              </TableRow>
              <TableRow
                key='Civil2'
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="right"><Checkbox color="primary"/></TableCell>
                <TableCell component="th" scope="row">Civil 2</TableCell>
                <TableCell align="right">567.80</TableCell>
                <TableCell align="right">29,86,792</TableCell>
                <TableCell align="right">{er2? <RemoveIcon onClick={()=>{setEr2(!er2)}} /> :<AddIcon onClick={()=>{setEr2(!er2)}} />}</TableCell>
                {er2 ? <SubTable/> : <div></div>}
              </TableRow>
              <TableRow
                key='Civil3'
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="right"><Checkbox color="primary"/></TableCell>
                <TableCell component="th" scope="row">Civil 3</TableCell>
                <TableCell align="right">567.80</TableCell>
                <TableCell align="right">29,86,792</TableCell>
                <TableCell align="right">{er3? <RemoveIcon onClick={()=>{setEr3(!er3)}} /> :<AddIcon onClick={()=>{setEr3(!er3)}} />}</TableCell>
                {er3 ? <SubTable/> : <div></div>}
              </TableRow>
              <TableRow
                key='Civil4'
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="right"><Checkbox color="primary"/></TableCell>
                <TableCell component="th" scope="row">Civil 4</TableCell>
                <TableCell align="right">567.80</TableCell>
                <TableCell align="right">29,86,792</TableCell>
                <TableCell align="right">{er4? <RemoveIcon onClick={()=>{setEr4(!er4)}} /> :<AddIcon onClick={()=>{setEr4(!er4)}} />}</TableCell>
                {er4 ? <SubTable/> : <div></div>}
              </TableRow>
              <TableRow
                key='Civil5'
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="right"><Checkbox color="primary"/></TableCell>
                <TableCell component="th" scope="row">Civil 5</TableCell>
                <TableCell align="right">567.80</TableCell>
                <TableCell align="right">29,86,792</TableCell>
                <TableCell align="right">{er5? <RemoveIcon onClick={()=>{setEr5(!er5)}} /> :<AddIcon onClick={()=>{setEr5(!er5)}} />}</TableCell>
                {er5 ? <SubTable/> : <div></div>}
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}