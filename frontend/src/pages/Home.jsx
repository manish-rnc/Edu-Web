import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  }

  const handleLoginClick = () => {
    navigate('/login');
  }

  return (
    <>
      <Box>
        <Typography>
          <IconButton onClick={handleLoginClick}>
            Login
          </IconButton>
        </Typography>
        <Typography>
          <IconButton onClick={handleRegisterClick}>
            Register
          </IconButton>
        </Typography>

      </Box>
    </>
  )
}

export default Home;
