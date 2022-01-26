import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

//Note that it is good practice to start the name of a react component with a capital
export default function CreateStudent() {

  const [student, setStudent] =  useState({
    registrationNum: null,
    studentName: '',
    grade: '',
    section: ''
  });


  const create = () => {
    axios.post('http://localhost:5000/studentRoute', student).then( () => {
      //this following line reloads the page automatically
      window.location.reload(false);
    });
  }

  return (
    <>
      <h2> Create Students </h2>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Enter Registration No." variant="outlined" value={student.registrationNum} onChange={(event) => setStudent({ ...student, registrationNum: event.target.value})}/>
      <TextField id="outlined-basic" label="Enter Name" variant="outlined" value={student.studentName} onChange={(event) => setStudent({ ...student, studentName: event.target.value})}/>
      <TextField id="outlined-basic" label="Enter Grade" variant="outlined" value={student.grade} onChange={(event) => setStudent({ ...student, grade: event.target.value})}/>
      <TextField id="outlined-basic" label="Enter Section" variant="outlined" value={student.section} onChange={(event) => setStudent({ ...student, section: event.target.value})}/>

      <Button variant="contained" onClick={create}>Create</Button>
    </Box>
    
    </>
  );
}