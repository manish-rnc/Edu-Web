import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material';
import AddSubjectModal from './AddSubjectModal';
import { useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const Tutor = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();
  const handleAllSubjects = () => {
    navigate('/tutor/subjects');
  };

  const handleAllStudents = () => {
    navigate('/tutor/students');
  };

  return (
    <>
      <Box sx={{
        display: 'flex',
        height: `calc(100vh - 64px)`,
      }}>
        <Box sx={{
          width: '20vw',
          backgroundColor: 'rgb(181 176 176 / 54%)',
          margin: '8px',
          padding: '6px',
          borderRadius: '12px',
        }}>
          <Sidebar />
        </Box>
        <Box sx={{ margin: '25px' }}>
          <Box>
            <Typography sx={{ fontSize: '40px' }}>Welcome Manish !</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: '600', color: 'grey', marginY: '10px' }}>
              Want to add more Subjects or Topics to give a KT ?
            </Typography>
            <Button
              onClick={() => setIsModalOpen(true)}
              sx={{
                backgroundColor: '#0096FF',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#1F51FF',
                  boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                Click to Add
              </Typography>
            </Button>
          </Box>
          <AddSubjectModal
            open={isModalOpen}
            closeModal={handleCloseModal}
            type="create"
          />
          <Box>
            <Typography sx={{ fontWeight: '600', color: 'grey', marginY: '10px' }}>
              Want to see all subjects added ?
            </Typography>
            <Button
              onClick={handleAllSubjects}
              sx={{
                backgroundColor: '#0096FF',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#1F51FF',
                  boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                View All Subjects
              </Typography>
            </Button>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: '600', color: 'grey', marginY: '10px' }}>
              Check All Students Request ?
            </Typography>
            <Button
              onClick={handleAllStudents}
              sx={{
                backgroundColor: '#0096FF',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#1F51FF',
                  boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                View All Students
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>

    </>
  )
}

export default Tutor;
