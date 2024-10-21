import { Avatar, Box, IconButton, Tooltip, Typography, Menu, MenuItem } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Header = () => {

  const { user } = useContext(UserContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  // Function to handle opening the menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Function to handle closing the menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // clear local storage
    navigate('/login');
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: '#F5F5F5',
          paddingY: '4px',
          display: 'flex',
          justifyContent: 'space-between',
          paddingX: '20px',
        }}
      >
        <Typography sx={{ color: 'grey' }}>Edu's Website</Typography>
        <Tooltip title="Profile">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>{user}</Typography>
          <IconButton onClick={handleClick}>
            <Avatar />
          </IconButton>
          </Box>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default Header;
