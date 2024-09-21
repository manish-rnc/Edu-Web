import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Learner = () => {
  return (
    <>
      <Box sx={{ margin: '30px' }}>
        <Box>
          <Typography sx={{ fontSize: '40px' }}>
            Welcome Shayam !
          </Typography>
        </Box>
        <Box>
          <Typography>What do you want to learn Today ?</Typography>
        </Box>
        <Box>
          <TextField
            size='small'
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </>
  )
}

export default Learner;
