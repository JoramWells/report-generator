/* eslint-disable no-unused-vars */
import {
  Paper, Table, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';

function TableHeader() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{
        '& .MuiTableCell-root': {
          border: '1px solid black',
          borderBottom: '0px',
        },
      }}
      >
        <TableHead>
          <TableRow sx={{
            height: '50px',
            fontWeight: 'bold',
          }}
          >
            <TableCell
              width={200}
              height={20}
              sx={{
                height: '10px',
              }}
            >
              SUBJECT

            </TableCell>
            <TableCell
              width={76}
              style={{
                fontWeight: 'bold',
              }}
            >
              BOT

            </TableCell>
            <TableCell
              width={76}
              style={{
                fontWeight: 'bold',
              }}
            >
              MID

            </TableCell>
            <TableCell
              width={76}
              style={{
                fontWeight: 'bold',
              }}
            >
              EOT

            </TableCell>
            <TableCell
              width={146}
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                backgroundColor: 'whitesmoke',
              }}

            >
              AVERAGE

            </TableCell>
            <TableCell
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                backgroundColor: 'whitesmoke',
              }}
            >
              Subject Teachers

            </TableCell>

          </TableRow>
        </TableHead>

      </Table>
    </TableContainer>
  );
}

export default TableHeader;
