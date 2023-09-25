import {
  FormControl, Button, FormGroup, Paper, TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import Dashboard from '../Dashboard';

function AddSubject() {
  const [firstName, setFirstName] = useState('');

  const [userData, setUserData] = useState([]);

  const inputValues = {
    firstName,

  };

  const saveData = () => {
    setUserData([
      ...userData, inputValues,
    ]);

    localStorage.setItem('studentData', JSON.stringify(userData));

    console.log(userData);
  };

  useEffect(() => {
    const hasUser = localStorage.getItem('studentData');
    if (hasUser) {
      localStorage.setItem('studentData', JSON.stringify(userData));
    }
  }, []);
  return (
    <Dashboard>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
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
                label="Subject Name"
                variant="outlined"
                size="small"
                style={{
                  width: '100%',
                }}
                onChange={(e) => setFirstName(e.target.value)}
              />
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

export default AddSubject;
