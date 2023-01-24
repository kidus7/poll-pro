import React, { useState, useEffect, useContext } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import './signup.scss'


const Signup = (props) =>{

const [values, setValues] = React.useState({
    password: '',
    email: '',
    fname: '',
    lname: '',
    showPassword: false,
  });
  const [errors, setErrors] = useState({
    email: '',
    name: '',
    password: ''
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log("VV ", values)
    const faildFiels = validator(values, prop)
    setErrors(() => ({
      ...errors,
      [prop]: Object.values(faildFiels)[0]
    }));

  };

  const handleBlur = (prop) => e => {
    const { name: prop, el } = e.target;

    const faildFiels = validator(el.value, prop);
    setErrors(() => ({
      ...errors,
      [prop]: Object.values(faildFiels)[0]
    }));
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // let isValidForm =
  // Object.values(errors).filter(error => typeof error !== "undefined")
  //   .length === 0;


  function validateEmail(email, errors) {
    console.log("validating email", email)
    let result = true;
  
    if (!email) {
      console.log("email is empty")
      errors.email = "Email is Required";
      setErrors({ ...errors, email: "Email is Required"});
      result = false;
    } else {
      console.log("email is invalid")
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      result = re.test(String(email).toLowerCase());
      if (!result) {
        errors.email = "Invalid Email address";
      }else{
        errors.email= ""
      }
    }
    return result;
  }

  // ******************************
  function validatePassword(pass, errors) {
    let result = true;
  
    if (!pass) {
      errors.password = "Password is Required";
      result = false;
    } else {
      var lower = /(?=.*[a-z])/;
      result = lower.test(pass);
  
      if (!result) {
        errors.password = "Password must contain at least one lower case letter.";
        result = false;
      } else if (pass.length < 8) {
        errors.password = "Your password has less than 8 characters.";
        result = false;
      }
    }
  }

  const validateName = (name, errors) => {
    let result = true;
  
    if (!name) {
      errors.name = "First Name is Required";
      result = false;
    }
    return result;
  }

  const validator = (values, fieldName) => {
    const errors={}
  switch (fieldName) {
    case "email":
      validateEmail(values.email, errors);
      break;
    case "password":
      validatePassword(values.password, errors);
      break;
    case "fname":
      validateName(values.fname, errors);
      break;
    case "lname":
      validateName(values.lname, errors);
    break; 
    default:
  }
  return errors;
};

  // return result;

const _handleSubmit = (val) => {
    setValues({...values, val})
    console.log("working ", values)
    if(values.fname){}
}

    return(
            <Typography
                component= "div"
                sx={{
                    // background: 'rgb(255,255,255)',
                    background: 'linear-gradient(21deg, rgba(214,240, 255,1) 42%, rgba(94,125,150,1) 93%)',
                    zIndex: '1000',
                    width: '100vw',
                    height: '100vh',
                    overFlow: 'none'
                }} >
               <Paper 
                className="paperContainer"
                sx={{
                    borderRadius: '24px',
                    // background: 'rgb(60,154,207)',
                    background: 'linear-gradient(41deg, rgba(60,154,207,0.14329481792717091) 40%, rgba(24,52,66,1) 69%)',
                    // background: 'rgb(128,110,6)',
                    // background: 'linear-gradient(90deg, rgba(210,234,255,1) 0%, rgba(170,168,170,1) 91%, rgba(70,89,77,1) 100%)'
                }}
                elevation={3}>
                <Typography
                    component="h2"
                    sx={{
                        mr: 1,
                        flexGrow: 1,
                        fontFamily: 'Sans-serif',
                        fontWeight: 700,
                        fontSize: 30,
                        letterSpacing: '.2rem',
                        color: 'rgb(10, 10, 57)',
                        textDecoration: 'none',
                    }}
                >
                    Sign Up
                </Typography>

        <Box 
          component="form"
          m={3}
          sx={{ 
            display: 'block', flexWrap: 'wrap', flexDirection: 'column'}}>
          
         <div>
        <TextField
          required
          label="First Name"
          id="first name"
          size="small"
          sx={{ m: 1, width: '25ch' }}
          value={values.fname}
          onChange={handleChange('fname')}
          error={errors.name ? true : false}
          helperText={errors.name}
          onBlur={handleBlur}
          // InputProps={{
          //   startAdornment: <InputAdornment position="start"></InputAdornment>,
          // }}
        />
          <TextField
          label="Last Name"
          id="last name"
          size="small"
          sx={{ m: 1, width: '25ch' }}
          value={values.lname}
          onChange={handleChange('lname')}
          error={errors.name ? true : false}
          helperText={errors.name}
          onBlur={handleBlur}
          
        />
         </div>
         <div>
          <TextField
            label="Email"
            id="email"
            size="small"
            sx={{ m: 1, ml: 6, width: '30ch' }}
            value={values.email}
            onChange={handleChange('email')}
            error={errors.email ? true : false}
            helperText={errors.email}
            onBlur={handleBlur}
            
          />
         </div>
         <div>         
          <FormControl sx={{ m: 1, mb: 6, width: '25ch' }} variant="outlined" size="small">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              error={errors.password ? true : false}
              helperText={errors.password}
              onBlur={handleBlur}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
        <div>
                    <Button 
                        variant="outlined"
                        sx={{
                          marginTop: '1rem',
                            marginLeft: '16rem',
                            width: '20ch'
                        }}
                        onClick= {_handleSubmit}

                    >
                        SIGNUP
                    </Button>
                    </div>
                  </Box>
                </Paper>
            </Typography>
    )
}

export default (Signup)
