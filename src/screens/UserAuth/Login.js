import { FilledInput, FormControl, FormControlLabel, FormGroup, FormLabel, IconButton, InputAdornment, InputLabel, Paper, TextField } from '@material-ui/core'
import React from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div style={{
      display: 'flex',
      justifyContent:"center",
      alignItems:"center",
      height:"100vh"
    }}>
      <Paper style={{
        width:"50%",
        height:"50%",
        display:"flex",
        justifyContent:"center",
        alignItems:'center'
      }}
      elevation={3}
      >
        <FormGroup>
          <FormControl>
              <TextField id="outlined-basic" label="First Name" variant="outlined" />
          </FormControl>

          <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </FormGroup>
      </Paper>
    </div>
  )
}

export default Login