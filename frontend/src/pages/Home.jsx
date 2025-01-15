import React, { useEffect, useRef, useState } from 'react';
import { Box, TextField, Button, Snackbar, Alert, Checkbox, FormControlLabel, FormControl, RadioGroup, Radio, Typography } from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const userTypeRef = useRef('learner');
  const [authType, setAuthType] = useState('login');
  const navigate = useNavigate();

  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleAuth = () => {
    if (authType == 'register') {
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      if (!name || !email || !password) {
        setSnackbarMessage('All fields are required');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
        return;
      }

      if (!agreeToTerms) {
        setSnackbarMessage('You must agree to the terms and conditions');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
        return;
      }
      setAuthType('login');
    }
    else if (authType == 'login') {
      // let login
      navigate('/tutor');
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
          width: '50vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          Logo
        </Box>
        <Box sx={{
          width: '50vw',
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
                // backgroundColor: 'white',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <form
                onSubmit={handleAuth}
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {authType == 'register' && <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  inputRef={nameRef}
                  type="text"
                  placeholder="Enter your name"
                  size="small"
                  sx={{
                    borderRadius: '8px',
                  }}
                />}
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  inputRef={emailRef}
                  type="email"
                  placeholder="Enter your email"
                  size="small"
                  sx={{
                    borderRadius: '8px',
                  }}
                />
                <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  inputRef={passwordRef}
                  type="password"
                  placeholder="Enter your password"
                  size="small"
                  sx={{
                    borderRadius: '8px',
                  }}
                />

                {/* Radio button for user type */}
                {authType == 'register' && <FormControl>
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
                </FormControl>
                }

                {/* Checkbox for terms and conditions with smaller and grey text */}
                {authType == 'register' && <FormControlLabel
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
                    padding: '9px',
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
                  type="submit"
                >
                  <LoginOutlinedIcon sx={{ marginRight: '12px' }} />
                  {authType}
                </Button>

              </form>
              {authType === 'login' && (
                <Typography
                  sx={{
                    marginTop: '14px',
                    fontSize: '15px',
                    color: '#757575',
                  }}
                >

                  {/* <span
                    onClick={() => setAuthType('forgotPassword')}
                    style={{
                      color: '#1976d2',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      alignContent: 'center'
                    }}
                    onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
                    onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
                  >
                    Forgot Password ?
                  </span>
                  <br /> */}

                  Don't have an account?{' '}
                  <span
                    onClick={() => setAuthType('register')}
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

              {authType == 'register' && <Typography
                sx={{
                  marginTop: '14px',
                  fontSize: '15px',
                  color: '#757575',
                }}
              >
                Already registered ?{' '}
                <span
                  onClick={() => setAuthType('login')}
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
              onClose={() => setOpenSnackbar(false)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
              <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity} sx={{
                width: '100%',
                backgroundColor: snackbarSeverity === 'error' ? '#f42424' : '#4caf50',
                color: 'white',
                '& .MuiAlert-icon': {
                  color: 'white',
                },
              }}>
                {snackbarMessage}
              </Alert>
            </Snackbar>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Home;
