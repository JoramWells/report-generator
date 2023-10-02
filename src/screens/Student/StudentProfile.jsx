/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
import {
  Box, Button, FormControl, FormGroup, Grid, InputLabel,
  MenuItem, Modal, Paper, Select, TextField, Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import Dashboard from '../Dashboard';
import { useStudentApi } from '../../hooks/useStudentApi';
import { getSubjects } from '../../utils/subjectFuncs';
import { useSubjectApi } from '../../hooks/useSubjectApi';
import StudentPerformance from './StudentPerformance';
import profile from '../../imgs/profile.png';
import StudentPerformanceChart from './StudentPerfomanceChart';
import StudentPerformanceBarChart from './StudentPerformanceBarChart';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  height: '50%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '10px',
  p: 4,
};

function StudentProfile() {
  const [subjects, setSubjects] = useState(getSubjects());
  const [subject, setSubject] = useState('');
  const [marks, setMarks] = useState('');
  const [term, setTerm] = useState('');

  const { results } = useStudentApi();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setSubject(e.target.value);
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const { id } = useParams();

  const inputValues = {
    id: nanoid(),
    studentId: id,
    term,
    subject,
    marks,

  };

  const { saveStudentSubjectByID, studentSubjectByID } = useSubjectApi(inputValues);

  // const savedSubjects = getStudentSubjectById(id);

  useEffect(() => {
    // if (id) { getStudentSubjectById(id); }
    console.log(studentSubjectByID, 'sbs');
  }, []);

  return (
    <Dashboard>
      <Grid item xs={12} md={6} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <Typography
            variant="h6"
            style={{
              color: 'primary',
            }}
          >Performace Analysis
          </Typography>
          <StudentPerformanceChart />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <Typography
            variant="h6"
            style={{
              color: 'primary',
            }}
          >Performace Analysis
          </Typography>
          <StudentPerformanceBarChart />
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={profile}
            alt={results[0].firstName}
            style={{
              width: '80px',
              height: '80px',
              objectFit: 'contain',
            }}
          />
          <Typography
            variant="h6"
          >{results[0].firstName} {results[0].secondName}
          </Typography>
          <div>
            {results[0].age} yrs
          </div>
          <div style={{
            // fontWeight: 'bold',
            color: 'grey',
            fontSize: '12px',
          }}
          >
            {results[0].indexCodeName} (code)
          </div>
          <Button
            variant="contained"
            disableElevation
            style={{

              marginTop: '1rem',
            }}
          >Edit Profile
          </Button>
        </Paper>
      </Grid>

      {/* table */}

      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <StudentPerformance />
        </Paper>
      </Grid>
      <Paper sx={{
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '80%',
      }}
      >

        <Box>
          <Typography variant="h3">Subjects</Typography>
          <Button onClick={handleOpen}>Add Subject</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <FormGroup
                style={{
                  width: '70%',
                  margin: 'auto',
                }}
              >
                {/* subject */}
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
                    label="Term"
                    size="small"
                    onChange={handleTermChange}
                  >
                    <MenuItem value="BOT">BOT</MenuItem>
                    <MenuItem value="MID">MID</MenuItem>
                    <MenuItem value="EOT">EOT</MenuItem>

                  </Select>
                </FormControl>

                {/* term */}
                {/* subject */}
                <FormControl
                  style={{
                    margin: '1rem',
                  }}
                >
                  <InputLabel id="demo-simple-select-label">Select Subject</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={subject}
                    label="Term"
                    size="small"
                    onChange={handleChange}
                  >
                    {subjects.map((item) => (
                      <MenuItem value={item.subject}>{item.subject}</MenuItem>
                    ))}

                  </Select>
                </FormControl>

                {/* marks */}
                <FormControl
                  style={{
                    margin: '1rem',
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Marks"
                    variant="outlined"
                    size="small"
                    sx={{
                      width: '100%',
                    }}
                    value={marks}
                    onChange={(e) => setMarks(e.target.value)}
                  />
                </FormControl>
                <Button
                  variant="contained"
                  sx={{
                    width: '95%',
                    display: 'block',
                    margin: 'auto',
                    marginTop: '2rem',

                  }}
                  onClick={() => { saveStudentSubjectByID(inputValues); }}
                >
                  Save

                </Button>

              </FormGroup>
            </Box>
          </Modal>

        </Box>

      </Paper>

    </Dashboard>
  );
}

export default StudentProfile;
