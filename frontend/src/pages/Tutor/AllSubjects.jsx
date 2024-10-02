import { Box, Typography } from '@mui/material'
import React from 'react'

const AllSubjects = () => {

  const datas = [
    {
      name: 'Physics',
      description: 'Interesting subject',
    },
    {
      name: 'Physics',
      description: 'Interesting subject',
    },
    {
      name: 'Physics',
      description: 'Interesting subject',
    },
  ];

  return (
    <>
      <Box>
        {datas.map((data, index) => (
          <Box key={index}>
            <Typography>
              {data.name}
            </Typography>
            <Typography>
              {data.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  )
}

export default AllSubjects;
