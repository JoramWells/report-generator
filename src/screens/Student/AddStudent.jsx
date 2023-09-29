/* eslint-disable no-unused-vars */
import {
  FormControl, Button, FormGroup, Paper, TextField,
  InputLabel, Select, MenuItem,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Dashboard from '../Dashboard';

function AddStudent() {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [indexCodeName, setIndexCodeName] = useState('');
  const [houseName, setHouseName] = useState('');
  const [age, setAge] = useState('');
  const [term, setTerm] = useState('');

  // const [division, setDivision] = useState('');
  const [subject, setSubject] = useState('');

  const [userData, setUserData] = useState([]);

  const inputValues = {
    id: nanoid(),
    firstName,
    secondName,
    indexCodeName,
    houseName,
    term,
    age,
    // division,
  };

  const handleChange = (e) => {
    setSubject(e.target.value);
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const getStudents = () => {
    const data = localStorage.getItem('studentData');
    return JSON.parse(data) || [];
  };

  const [students, setStudents] = useState(getStudents());

  const saveStudent = (student) => {
    localStorage.setItem('studentData', JSON.stringify(student));
  };

  const saveData = () => {
    const newStudent = [...students, inputValues];
    setUserData(newStudent);
    saveStudent(newStudent);
  };

  const getSubjects = () => {
    const data = localStorage.getItem('subjects');
    // if (data) {
    //   setSubjects(JSON.parse(data));
    // }

    return JSON.parse(data) || [];
  };

  const [subjects, setSubjects] = useState(getSubjects());

  useEffect(() => {
    const hasUser = localStorage.getItem('studentData');
    if (!hasUser && hasUser.length < 0) {
      localStorage.setItem('studentData', JSON.stringify(userData));
    }
    getSubjects();
    console.log(subjects, 'subjects');
  }, []);
  return (
    <Dashboard>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '100vh',
        width: '100%',
      }}
      >

        <Paper style={{
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
          position: 'relative',
        }}
        // elevation={3}
        >

          <FormGroup style={{
            width: '80%',
          }}
          >
            <FormControl
              style={{
                margin: '1rem',
              }}
            >
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                size="small"
                sx={{
                  width: '100%',
                }}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>

            {/* password input */}
            <FormControl
              style={{
                margin: '1rem',
              }}
            >
              <TextField
                id="outlined-basic"
                label="Second Name"
                variant="outlined"
                size="small"
                style={{
                  width: '100%',
                }}
                onChange={(e) => setSecondName(e.target.value)}
              />
            </FormControl>

            {/* confirm password */}
            <FormControl
              style={{
                margin: '1rem',
              }}
            >
              <TextField
                id="outlined-basic"
                label="Index Code"
                variant="outlined"
                size="small"
                style={{
                  width: '100%',
                }}
                onChange={(e) => setIndexCodeName(e.target.value)}

              />
            </FormControl>

            <FormControl
              style={{
                margin: '1rem',
              }}
            >
              <TextField
                id="outlined-basic"
                label="House"
                variant="outlined"
                size="small"
                style={{
                  width: '100%',
                }}
                onChange={(e) => setHouseName(e.target.value)}

              />
            </FormControl>

            {/* term */}

            <FormControl
              style={{
                margin: '1rem',
              }}
            >
              <InputLabel id="demo-simple-select-label">Select Term</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={term}
                label="Subject"
                size="small"
                onChange={handleTermChange}
              >
                <MenuItem value="BOT">BOT</MenuItem>
                <MenuItem value="MID">MID</MenuItem>
                <MenuItem value="EOT">EOT</MenuItem>

              </Select>
            </FormControl>

            <FormControl
              style={{
                margin: '1rem',
              }}
            >
              <TextField
                id="outlined-basic"
                label="Age"
                variant="outlined"
                size="small"
                style={{
                  width: '100%',
                }}
              />
            </FormControl>

            <FormControl
              style={{
                margin: '1rem',
              }}
            >
              <TextField
                id="outlined-basic"
                label="Division"
                variant="outlined"
                size="small"
                style={{
                  width: '100%',
                }}
                onChange={(e) => setAge(e.target.value)}

              />
            </FormControl>

            {/* subject */}
            <FormControl
              style={{
                margin: '1rem',
              }}
            >
              <InputLabel id="demo-simple-select-label">Subject</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={subject}
                label="Subject"
                size="small"
                onChange={handleChange}
              >
                {subjects.map((item) => (
                  <MenuItem value={item.subject}>{item.subject}</MenuItem>
                ))}

              </Select>
            </FormControl>

            <Button
              variant="contained"
              disableElevation
              style={{
                width: '95%',
                margin: 'auto',
                display: 'block',
                padding: '5px',
                marginTop: '1.5rem',
              }}
              onClick={() => saveData()}
            >
              SAVE
            </Button>

            {/* have an account */}

          </FormGroup>

        </Paper>
      </div>
    </Dashboard>
  );
}

export default AddStudent;
