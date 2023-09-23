import { Box, Container, FormGroup, InputLabel, Button } from '@material-ui/core'
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useState } from 'react';
import Header from './components/Header';
import Header2 from './components/Header2';
import PersonalDetails from './components/PersonalDetails';
import { Route, Routes } from 'react-router-dom';
import Login from './screens/UserAuth/Login';
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
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>


    </div>

  );
}

export default App;
