/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Title from './Title';

export default function Orders() {
  const [studentInfo, setStudentInfo] = React.useState([]);

  const navigate = useNavigate();

  const getData = () => {
    const studentData = localStorage.getItem('studentData');
    const data = JSON.parse(studentData);
    if (data) { setStudentInfo(data); }
  };

  React.useEffect(() => {
    getData();
    console.log([studentInfo]);
  }, []);

  return (
    <>
      <Title>Registered Students</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Second Name</TableCell>
            <TableCell>Index Code</TableCell>
            <TableCell>Age</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentInfo.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.secondName}</TableCell>
              <TableCell>{row.indexCodeName}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => { navigate('/report1'); }}>
                  <AssessmentOutlinedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
