/* eslint-disable no-unused-vars */
import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import { useEffect, useState } from 'react';

import TableHeader from './TableHeader';

function CustomTable() {
  const getSubjects = () => {
    const data = localStorage.getItem('subjects');
    // if (data) {
    //   setSubjects(JSON.parse(data));
    // }

    return JSON.parse(data) || [];
  };

  const [subjects, setSubjects] = useState(getSubjects());

  useEffect(() => {
  }, []);

  return (
    <TableContainer>
      <TableHeader />

      <Table sx={{
        '& .MuiTableCell-root': {
          border: '1px solid black',
        },
      }}
      >
        <TableHead>

          <TableRow>
            <TableCell width={200} />
            <TableCell>Mrks</TableCell>
            <TableCell>Mrks</TableCell>
            <TableCell>Mrks</TableCell>
            <TableCell
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                backgroundColor: 'whitesmoke',
              }}
            >
              Mrks

            </TableCell>
            <TableCell
              width={66}
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                backgroundColor: 'whitesmoke',
              }}
            >
              Agg

            </TableCell>

            <TableCell>Remarks</TableCell>
            <TableCell>Initials</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>

          {subjects.map((item) => (
            <TableRow key={item.subject}>
              <TableCell>{item.subject}</TableCell>
              <TableCell>
                {' '}
                <input
                  style={{
                    width: '25px',
                    backgroundColor: 'black',
                  }}
                  placeholder="name"
                />
              </TableCell>
              <TableCell>
                {' '}
                <input
                  style={{
                    width: '25px',
                  }}
                />
              </TableCell>
              <TableCell>
                {' '}
                <input
                  style={{
                    width: '25px',
                  }}
                />
              </TableCell>
              <TableCell>
                {' '}
                <input
                  style={{
                    width: '25px',
                  }}
                />
              </TableCell>
              <TableCell>
                {' '}
                <input
                  style={{
                    width: '25px',
                  }}
                />
              </TableCell>
              <TableCell>
                {' '}
                <input
                  style={{
                    width: '25px',
                  }}
                />
              </TableCell>
              <TableCell>
                {' '}
                <input
                  style={{
                    width: '25px',
                  }}
                />
              </TableCell>
            </TableRow>
          ))}

          {/* core */}
          <TableRow>
            <TableCell style={{
              textAlign: 'end',
              fontWeight: 'bold',
            }}
            >
              CORE
            </TableCell>
            <TableCell>
              <input style={{
                width: '25px',
              }}
              />
            </TableCell>
            <TableCell>
              <input
                style={{
                  width: '25px',
                }}
              />

            </TableCell>
            <TableCell>
              <input
                style={{
                  width: '25px',
                }}
              />

            </TableCell>
            <TableCell>
              <input
                style={{
                  width: '25px',
                }}
              />

            </TableCell>
            <TableCell>
              <input
                style={{
                  width: '25px',
                }}
              />
            </TableCell>
            <TableCell>
              <input
                style={{
                  width: '25px',
                }}
              />
            </TableCell>
            <TableCell>
              <input
                style={{
                  width: '25px',
                }}
              />
            </TableCell>
          </TableRow>

          {/* grand total */}
          <TableRow>
            <TableCell style={{
              textAlign: 'center',
            }}
            >
              Grand Total
            </TableCell>
            <TableCell>
              <input style={{
                width: '25px',
              }}
              />
            </TableCell>
            <TableCell>
              <input
                style={{
                  width: '25px',
                }}
              />

            </TableCell>
            <TableCell>
              <input
                style={{
                  width: '25px',
                }}
              />

            </TableCell>
            <TableCell>
              <input
                style={{
                  width: '25px',
                }}
              />

            </TableCell>
            <TableCell>
              <input
                style={{
                  width: '25px',
                }}
              />
            </TableCell>
            <TableCell>
              <input
                style={{
                  width: '25px',
                }}
              />
            </TableCell>
            <TableCell>
              <input
                style={{
                  width: '25px',
                }}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;
