import { Box, Container, FormGroup, InputLabel, Button } from '@material-ui/core'
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useState } from 'react';
import Header from '../components/Header';
import Header2 from '../components/Header2';
import PersonalDetails from '../components/PersonalDetails';
function App() {

  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')

  const [loader, setLoader] = useState(false)

  const downloadPDF = () => {
    const capture = document.querySelector('.actual-receipt');
    setLoader(loader)
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('/img/jpeg', 1.0)
      const doc = new jsPDF('p', 'mm', 'a4')
      const componentWidth = doc.internal.pageSize.getWidth()
      const componentHeight = doc.internal.pageSize.getHeight()
      doc.addImage(imgData, 'JPEG', 0, 0, componentWidth, componentHeight)
      setLoader(false)
      doc.save('receipt.pdf')
    })
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: "space-between",
      height: "100vh",
      padding: "10px"
    }}>

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
      <div style={{
        width: "793.7007874px",
        height:"1122.519685px",
        // margin: "30mm 45mm 30mm 45mm"
      }}
      className='actual-receipt'
      >
          <Header />
          <Header2 />
          <PersonalDetails />
      </div>

      
        {/* <Box sx={{
        display: "flex",
        flexDirection: "column"
      }}>
        <div
          className='actual-receipt'

        >First Name: {firstName}</div>
        <div>
          Second Name: {secondName}

        </div>
        <Button onClick={() => downloadPDF()}>SAVE</Button>
      </Box> */}
        <Button onClick={() => downloadPDF()}>SAVE</Button>


    </div>

  );
}

export default App;
