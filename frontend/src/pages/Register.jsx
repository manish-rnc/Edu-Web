import React, { useRef, useState } from 'react';
import { Box, TextField, Button, Snackbar, Alert, Checkbox, FormControlLabel } from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const handleRegister = (e) => {
        e.preventDefault();

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

        // Registration logic here...


        // upon successful registration navigate to login page
        navigate('/login'); 

        setSnackbarMessage('Registration Successful');
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <Box
            sx={{
                width: '100%',
                height: '90vh',
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
                    backgroundColor: 'white',
                    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
                    borderRadius: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <form
                    onSubmit={handleRegister}
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <TextField
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
                    />
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

                    {/* Checkbox for terms and conditions with smaller and grey text */}
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={agreeToTerms}
                                onChange={(e) => setAgreeToTerms(e.target.checked)}
                                color="primary"
                            />
                        }
                        label="I agree to Edu's Terms of Service and Privacy Policy."
                        sx={{
                            marginTop: '10px',
                            '.MuiFormControlLabel-label': {
                                fontSize: '0.875rem',
                                color: '#757575',
                            },
                        }}
                    />

                    <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{
                            marginTop: '20px',
                            padding: '12px',
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
                        Register
                    </Button>
                </form>
            </Box>

            {/* Snackbar for form feedback */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={4000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{
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
    );
};

export default Register;
