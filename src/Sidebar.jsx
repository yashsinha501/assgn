import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';


export default function Sidebar() {

  const [data1,setData1] = React.useState("")
  const [data2,setData2] = React.useState("")
  const [data3,setData3] = React.useState("")
  const [data4,setData4] = React.useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Client :",data1);
    console.log("Date of Commencement :",data2);
    console.log("Date of Completion :",data3);
    console.log("RFQ Code :",data4);
    setData1("")
    setData2("")
    setData3("")
    setData4("")
};


  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor,open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div style={{padding:20}}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <div>Client</div>
          <TextField
            id="outlined-required"
            label="Client Name"
            placeholder="Client"
            value={data1}
            onChange={(e)=>{setData1(e.target.value)}}
          />
          <div>Date of Commencement</div>
          <TextField
            id="outlined-required"
            label="dd/mm/yyyy"
            placeholder="Client"
            value={data2}
            onChange={(e)=>{setData2(e.target.value)}}
          />
          <div>Date of Completion</div>
          <TextField
            id="outlined-required"
            label="dd/mm/yyyy"
            value={data3}
            onChange={(e)=>{setData3(e.target.value)}}
          />
          <div>RFQ Code</div>
          <TextField
            id="outlined-required"
            label="RFQ Cpde"
            value={data4}
            onChange={(e)=>{setData4(e.target.value)}}
          />
        </div>
        <button style={{margin:8}} onClick={(e) => handleSubmit(e)}>Done</button>
      </Box>
    </div>
  );


  const anchor = 'right'
  return (
    <div>
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor,true)}>Save</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
    </div>
  );
}