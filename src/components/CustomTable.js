import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const CustomTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>SUBJECT</TableCell>
            <TableCell>BOT</TableCell>
            <TableCell>MID</TableCell>
            <TableCell>EOT</TableCell>
            <TableCell>AVERAGE</TableCell>
            <TableCell>Subje Teachers</TableCell>

          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Mrks</TableCell>
            <TableCell>Mrks</TableCell>
            <TableCell>Mrks</TableCell>
            <TableCell>Agg</TableCell>
            <TableCell>Remarks</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>ENGLISH LANGUAGE</TableCell>
            <TableCell></TableCell>
            <TableCell>46</TableCell>
            <TableCell>38</TableCell>
            <TableCell>38</TableCell>
            <TableCell>P8</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>LITERACY 1</TableCell>
            <TableCell>          <input
              style={{
                width: "25px"
              }}
            /></TableCell>
            <TableCell>          <input
              style={{
                width: "25px"
              }}
            /></TableCell>
            <TableCell>          <input
              style={{
                width: "25px"
              }}
            /></TableCell>
            <TableCell>          <input
              style={{
                width: "25px"
              }}
            /></TableCell>
            <TableCell>          <input
              style={{
                width: "25px"
              }}
            /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>LITERACY II</TableCell>
            <TableCell>          <input
              style={{
                width: "25px"
              }}
            /></TableCell>
            <TableCell>          <input
              style={{
                width: "25px"
              }}
            /></TableCell>
            <TableCell>          <input
              style={{
                width: "25px"
              }}
            /></TableCell>
            <TableCell>          <input
              style={{
                width: "25px"
              }}
            /></TableCell>
            <TableCell>          <input
              style={{
                width: "25px"
              }}
            /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>MATHEMATICS</TableCell>
            <TableCell>
              <input style={{
                width: "25px"
              }} />
            </TableCell>
            <TableCell>
              <input
                style={{
                  width: "25px"
                }}
              />

            </TableCell>
            <TableCell>
              <input
                style={{
                  width: "25px"
                }}
              />
            </TableCell>
            <TableCell>
              <input
                style={{
                  width: "25px"
                }}
              />
            </TableCell>
            <TableCell>
              <input
                style={{
                  width: "25px"
                }}
              />
            </TableCell>
          </TableRow>

          {/* core */}
          <TableRow>
            <TableCell style={{
              textAlign:"end",
              fontWeight:"bold"
            }}>CORE</TableCell>
            <TableCell>
              <input style={{
                width: "25px"
              }} />
            </TableCell>
            <TableCell>
              <input
                style={{
                  width: "25px"
                }}
              />

            </TableCell>
            <TableCell>
              <input
                style={{
                  width: "25px"
                }}
              />
            </TableCell>
            <TableCell>
              <input
                style={{
                  width: "25px"
                }}
              />
            </TableCell>
            <TableCell>
              <input
                style={{
                  width: "25px"
                }}
              />
            </TableCell>
          </TableRow>

          {/* grand total */}
          <TableRow>
            <TableCell style={{
              textAlign:"center",
            }}>Grand Total</TableCell>
            <TableCell>
              <input style={{
                width: "25px"
              }} />
            </TableCell>
            <TableCell>
              <input
                style={{
                  width: "25px"
                }}
              />

            </TableCell>
            <TableCell>
              <input
                style={{
                  width: "25px"
                }}
              />
            </TableCell>
            <TableCell>
              <input
                style={{
                  width: "25px"
                }}
              />
            </TableCell>
            <TableCell>
              <input
                style={{
                  width: "25px"
                }}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CustomTable