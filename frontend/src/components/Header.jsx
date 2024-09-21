import { Avatar, Box, Typography } from '@mui/material';
import React from 'react'

const Header = () => {
  return (
    <>
      <Box sx={{
        backgroundColor: '#F5F5F5',
        paddingY: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        paddingX: '20px'
      }}>
        <Typography sx={{ color: 'black' }}>Edu's Website</Typography>
        <Box>
          <Avatar />
        </Box>
      </Box>

    </>
  )
}

export default Header;