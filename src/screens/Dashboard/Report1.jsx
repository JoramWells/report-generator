/* eslint-disable no-unused-vars */
import {
  Button, Paper, IconButton,
} from '@mui/material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useEffect, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Header2 from '../../components/Header2';
import PersonalDetails from '../../components/PersonalDetails';
import CustomTable from '../../components/CustomTable';
import Badge from '../../components/Badge';
import Underline from '../../components/Underline';
import Dashboard from '.';

function Report1() {
  const [loader, setLoader] = useState(false);
  const [studentData, setStudentData] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();

  const downloadPDF = () => {
    const capture = document.querySelector('.actual-receipt');
    setLoader(loader);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('/img/jpeg', 1.0);
      // eslint-disable-next-line new-cap
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'JPEG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('receipt.pdf');
    });
  };

  const getStudents = () => {
    const data = localStorage.getItem('studentData');
    return JSON.parse(data) || [];
  };
  const [results, setUserResults] = useState(getStudents());

  const students = getStudents();

  const getStudentId = (routeID) => {
    const userResults = students.filter(
      (user) => user.id.toLowerCase().includes(routeID.toLowerCase()),
    );
    setUserResults(userResults);
  };
  useEffect(() => {
    getStudentId(id);
    console.log(results, 'resultsx');
  }, [id]);

  return (
    <Dashboard>
      <div style={{
        width: '80%',
        float: 'right',
      }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          height: '100vh',
          padding: '10px',
        }}
        >
          <IconButton
            onClick={() => navigate('/')}
            style={{
              position: 'fixed',
              top: '0',
              left: '0',
            }}
          >
            <ArrowBackIcon />

          </IconButton>

          {/* LEFT SECTION */}
          {/* <Box>
        <FormGroup >
          <div>
            <InputLabel htmlFor="my-input">First Name</InputLabel>
            <input placeholder='Enter name'
              onChange={(e) => setFirstName(e.target.value)} />
          </div>

          <div style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: 'column'
          }}
          >
            <InputLabel htmlFor="my-input">First Name</InputLabel>

            <input placeholder='Enter second name'
              onChange={(e) => setSecondName(e.target.value)} />
          </div>
        </FormGroup >
      </Box> */}

          {/* report section */}
          <Paper>
            <div
              style={{
                width: '793.7007874px',
                height: '1122.519685px',
                // margin: "30mm 45mm 30mm 45mm"
              }}
              className="actual-receipt"
            >
              <div style={{
                border: '1px solid grey',
                height: '100%',
              }}
              >
                <Header />
                <Header2 />
                <PersonalDetails
                  firstName={results[0].firstName}
                  secondName={results[0].secondName}
                  age={results[0].age}
                  house={results[0].houseName}
                />

                <div style={{
                  padding: '10px',
                }}
                >
                  <CustomTable />
                </div>

                <div style={{
                  marginTop: '1rem',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                }}
                >
                  <Badge text="Class Teachers remarks" width="30%" />
                  <input style={{
                    width: '70%',
                  }}
                  />
                </div>

                {/* initials */}
                <div style={{
                  marginTop: '1rem',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-evenly',
                }}
                >
                  <Badge text="Initials" />
                  <Underline />
                  <Underline width="70%" />

                </div>
              </div>

              <div style={{
                marginTop: '1rem',
                marginBottom: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
              }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    width: '40%',
                  }}
                  onClick={() => downloadPDF()}
                >
                  SAVE

                </Button>
                <Button
                  variant="contained"
                  sx={{
                    width: '40%',
                  }}
                  onClick={() => downloadPDF()}
                >
                  DOWNLOAD

                </Button>

              </div>
            </div>

          </Paper>

        </div>
      </div>
    </Dashboard>

  );
}

export default Report1;
