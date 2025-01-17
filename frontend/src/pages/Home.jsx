import React, { useState } from 'react';
import { Box, TextField, Button, Snackbar, Alert, Checkbox, FormControlLabel, FormControl, RadioGroup, Radio, Typography, InputAdornment, IconButton } from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { useNavigate } from 'react-router-dom';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import Logo from '../assests/final_logo.png';

const Home = () => {
  const [authType, setAuthType] = useState('login');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [userType, setUserType] = useState('tutor');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [toggleVisibilty, setToggleVisibilty] = useState(true);
  const navigate = useNavigate();

  const resetFields = () => {
    setEmail('');
    setPassword('');
    setName('');
    setUserType('tutor');
  };

  const handleAuth = (e) => {
    e.preventDefault(); // Prevent the form from submitting if any validation fails

    if (authType === 'register') {
      // Validation checks for registration form
      if (!name || !email || !password) {
        setSnackbarMessage('All fields are required');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
        return; // Stop further execution if any field is empty
      }

      if (!agreeToTerms) {
        setSnackbarMessage('You must agree to the terms and conditions');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
        return; // Stop further execution if terms are not agreed
      }

      setSnackbarMessage('Registration successful! Please login.');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);

      // only reset password and allow user to continue
      setPassword('');
      setAuthType('login');
    } else if (authType === 'login') {
      // Validation checks for login form
      if (!email || !password) {
        setSnackbarMessage('All fields are required!');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
        return; // Stop further execution if email or password is missing
      }

      setSnackbarMessage('Login successful!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);

      // get userType from DB
      if (userType == 'tutor') {
        navigate('/tutor'); // Navigate to the tutor page on successful login
      }
      else if (userType == 'learner') {
        navigate('/learner');
      }
    }
  };

  return (
    <>
      <Box sx={{
        display: 'flex',
        height: '100vh',
      }}>
        <Box sx={{
          backgroundColor: '#146cf1',
          width: '49vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img src={Logo} width="350" />
        </Box>
        <Box sx={{
          width: '51vw',
        }}>
          <Box
            sx={{
              width: '100%',
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
            }}
          >
            <Box
              sx={{
                width: '450px',
                padding: '30px',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {authType === 'register' && <TextField
                id="name"
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter your name"
                size="small"
                sx={{
                  borderRadius: '8px',
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <PersonIcon fontSize='small' />
                    </InputAdornment>
                  ),
                }}
              />}
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                size="small"
                sx={{
                  borderRadius: '8px',
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <MailOutlinedIcon fontSize='small' />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={toggleVisibilty ? "password" : "text"}
                placeholder="Enter your password"
                size="small"
                sx={{
                  borderRadius: '8px',
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <LockOutlinedIcon fontSize='small' />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment
                      position='end'
                      sx={{
                        cursor: 'pointer',
                      }}>
                      <IconButton
                        // onClick={setToggleVisibilty((prevVisibility) => !prevVisibility)}
                      >
                        {toggleVisibilty ? <VisibilityOffIcon fontSize='small' /> : <VisibilityIcon fontSize='small' />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {/* Radio button for user type */}
              {authType === 'register' && <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  size="small"
                  sx={{
                    '& .MuiFormControlLabel-root': {
                      marginRight: '20px', // Add spacing between options
                    },
                    '& .MuiRadio-root': {
                      color: '#757575', // Set default color for radio buttons
                      '&.Mui-checked': {
                        color: '#1976d2', // Color for checked state
                      },
                    },
                    '& .MuiTypography-root': {
                      fontSize: '14px', // Set label font size
                      color: '#424242', // Set label color
                    },
                  }}
                >
                  <FormControlLabel value="tutor" control={<Radio />} label="Tutor" />
                  <FormControlLabel value="learner" control={<Radio />} label="Learner" />
                </RadioGroup>
              </FormControl>}

              {/* Checkbox for terms and conditions with smaller and grey text */}
              {authType === 'register' && <FormControlLabel
                control={
                  <Checkbox
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    color="primary"
                  />
                }
                label="I agree to Edu's Terms of Service and Privacy Policy."
                sx={{
                  marginTop: '6px',
                  '.MuiFormControlLabel-label': {
                    fontSize: '0.875rem',
                    color: '#757575',
                  },
                }}
              />}

              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  marginTop: '16px',
                  padding: '7px',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #42a5f5, #1976d2)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #1976d2, #42a5f5)',
                  },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={handleAuth}
              >
                <LoginOutlinedIcon sx={{ marginRight: '12px' }} />
                {authType === 'login' ? 'Login' : 'Register'}
              </Button>

              {authType === 'login' && (
                <Typography
                  sx={{
                    marginTop: '14px',
                    fontSize: '15px',
                    color: '#757575',
                  }}
                >
                  Don't have an account?{' '}
                  <span
                    onClick={() => { resetFields(), setAuthType('register') }}
                    style={{
                      color: '#1976d2',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                    }}
                    onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
                    onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
                  >
                    Register
                  </span>
                </Typography>
              )}

              {authType === 'register' && <Typography
                sx={{
                  marginTop: '14px',
                  fontSize: '15px',
                  color: '#757575',
                }}
              >
                Already registered?{' '}
                <span
                  onClick={() => { resetFields(), setAuthType('login') }}
                  style={{
                    color: '#1976d2',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                  onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
                  onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
                >
                  Login
                </span>
              </Typography>}
            </Box>

            {/* Snackbar for form feedback */}
            <Snackbar
              open={openSnackbar}
              autoHideDuration={4000}
              onClose={() => {
                setOpenSnackbar(false);
                setSnackbarMessage(''); // Clear message after closing
              }}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
              <Alert
                onClose={() => setOpenSnackbar(false)}
                severity={snackbarSeverity}
                sx={{
                  width: '100%',
                  backgroundColor: snackbarSeverity === 'error' ? '#f42424' : '#4caf50',
                  color: 'white',
                  '& .MuiAlert-icon': {
                    color: 'white',
                  },
                }}
              >
                {snackbarMessage}
              </Alert>
            </Snackbar>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;