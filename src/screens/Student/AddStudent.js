import {  FormControl, Button, FormGroup, Paper, TextField, Box, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const AddStudent = () => {

    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [indexCodeName, setIndexCodeName] = useState('')
    const [houseName, setHouseName] = useState('')
    const [age, setAge] = useState('')
    const [division, setDivision] = useState('')

  const [userData, setUserData] = useState([])



  const navigate = useNavigate()

  const inputValues = {
    firstName,
    secondName,
    indexCodeName,
    houseName,
    age,
    division
  }



  const saveData = () => {
    setUserData([
        ...userData,inputValues
    ])
    // const items = localStorage.getItem('studentData')
    // const data = JSON.parse(items)
    // if(data){
    //         const newItems = [...data, {inputValues }];
    // localStorage.setItem('studentData', JSON.stringify(newItems))

    // }
    localStorage.setItem('studentData', JSON.stringify(userData))

console.log(userData)
  }

  useEffect(()=>{
    const hasUser = localStorage.getItem('studentData')
    if(hasUser){
            localStorage.setItem('studentData',JSON.stringify(userData))

    }
  },[])
  return (
    <div style={{
      display: 'flex',
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}>


      <Paper style={{
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        padding:"10px",
        position:"relative"
      }}
        // elevation={3}
      >
                <IconButton onClick={() => navigate('/')} style={{
                    position:"fixed",
                    top:"0",
                    left:"0"
                }}>
        <ArrowBackIcon />

        </IconButton>
        <FormGroup style={{
          width: "80%",
        }}>
          <FormControl
            style={{
              margin: "1rem"
            }}
          >
            <TextField id="outlined-basic" label="First Name"
              variant="outlined"
              style={{
                width: "100%"
              }}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormControl>

          {/* password input */}
          <FormControl
            style={{
              margin: "1rem"
            }}
          >
            <TextField id="outlined-basic" label="Second Name"
              variant="outlined"
              style={{
                width: "100%"
              }}
              onChange={(e) => setSecondName(e.target.value)}
            />
          </FormControl>

          {/* confirm password */}
          <FormControl
            style={{
              margin: "1rem"
            }}
          >
            <TextField id="outlined-basic" label="Index Code"
              variant="outlined"
              style={{
                width: "100%"
              }}
              onChange={(e) => setIndexCodeName(e.target.value)}

            />
          </FormControl>

          <FormControl
            style={{
              margin: "1rem"
            }}
          >
            <TextField id="outlined-basic" label="House"
              variant="outlined"
              style={{
                width: "100%"
              }}
              onChange={(e) => setHouseName(e.target.value)}

            />
          </FormControl>

          <FormControl
            style={{
              margin: "1rem"
            }}
          >
            <TextField id="outlined-basic" label="Age"
              variant="outlined"
              style={{
                width: "100%"
              }}
            />
          </FormControl>

          <FormControl
            style={{
              margin: "1rem"
            }}
          >
            <TextField id="outlined-basic" label="Division"
              variant="outlined"
              style={{
                width: "100%"
              }}
              onChange={(e) => setAge(e.target.value)}

            />
          </FormControl>

{/* subject */}
          <FormControl
            style={{
              margin: "1rem"
            }}
          >
            <TextField id="outlined-basic" label="Subject"
              variant="outlined"
              style={{
                width: "100%"
              }}
              onChange={(e) => setDivision(e.target.value)}

            />
          </FormControl>



          
          <Button variant='contained'
            disableElevation
            style={{
              width: "100%",
              margin: "auto",
              display: "block",
              padding: "10px",
              marginTop: "1.5rem"
            }}
            onClick={() => saveData()}
            >SAVE</Button>

          {/* have an account */}

        </FormGroup>



      </Paper>
    </div>
  )
}

export default AddStudent