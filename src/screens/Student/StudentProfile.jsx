import { Paper } from '@mui/material';
import Dashboard from '../Dashboard';
import { useStudentApi } from '../../hooks/useStudentApi';

function StudentProfile() {
  const { results } = useStudentApi();
  console.log(results);
  return (
    <Dashboard>
      <Paper>
        Student Profile
        <div>{results[0].firstName}</div>
      </Paper>
    </Dashboard>
  );
}

export default StudentProfile;
