import {
  FormControl, Button, FormGroup, Paper, TextField,
  InputLabel, Select, MenuItem,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Dashboard from '../Dashboard';

function AddStudent() {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [indexCodeName, setIndexCodeName] = useState('');
  const [houseName, setHouseName] = useState('');
  const [age, setAge] = useState('');
  // const [division, setDivision] = useState('');
  const [subject, setSubject] = useState('');

  const [userData, setUserData] = useState([]);

  const inputValues = {
    firstName,
    secondName,
    indexCodeName,
    houseName,
    age,
    // division,
  };

  const handleChange = (e) => {
    setSubject(e.target.value);
  };

  const saveData = () => {
    const hasUser = localStorage.getItem('studentData');

    if (hasUser) {
      setUserData([
        ...userData, inputValues,
      ]);
    } else {
      setUserData([]);
    }

    // const items = localStorage.getItem('studentData')
    // const data = JSON.parse(items)
    // if(data){
    //         const newItems = [...data, {inputValues }];
    // localStorage.setItem('studentData', JSON.stringify(newItems))

    // }
    localStorage.setItem('studentData', JSON.stringify(userData));

    console.log(userData);
  };

  useEffect(() => {
    const hasUser = localStorage.getItem('studentData');
    if (hasUser && hasUser.length > 0) {
      localStorage.setItem('studentData', JSON.stringify(userData));
    }
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
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
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
