/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import { IconButton, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Title from '../Dashboard/Title';
import { useSubjectApi } from '../../hooks/useSubjectApi';

export default function StudentPerformance() {
  const [studentInfo, setStudentInfo] = useState([]);

  const [subjects, setSubject] = useState([]);

  const { studentSubjects } = useSubjectApi();

  const navigate = useNavigate();

  const getData = () => {
    const studentData = localStorage.getItem('studentData');
    const data = JSON.parse(studentData);
    if (data) { setStudentInfo(data); }
  };

  const deleteStudent = (id) => {
    setStudentInfo(studentInfo.filter((student) => student.id !== id));
    localStorage.setItem('studentData', JSON.stringify(studentInfo));
    // localStorage.todo
  };

  const { deleteStudentSubject } = useSubjectApi();

  useEffect(() => {
    getData();
    console.log([studentInfo]);
  }, []);

  return (
    <>
      <Title>Exam Results</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Term</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Marks</TableCell>
            <TableCell>Avg</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentSubjects.map((row) => (
            <TableRow key={row.studentId}>
              <TableCell>{row.term}</TableCell>
              <TableCell>{row.subject}</TableCell>
              <TableCell>{row.marks}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="center">

                <Tooltip title="Generate Report">
                  <IconButton onClick={() => { navigate(`/report1/${row.studentId}`); }}>
                    <AssessmentOutlinedIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton
                    style={{
                      color: '#FD6868',
                    }}
                    onClick={() => { deleteStudentSubject(row.id); }}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
