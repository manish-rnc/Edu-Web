import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const AddSubjectModal = ({ open, closeModal }) => {

    const [subjectName, setSubjectName] = useState('');
    const [description, setDescription] = useState('');
    

    const handleAddSubject = () => {
        // add subjects
        closeModal();
    };

    return (
        <>
            <Dialog open={open} close={closeModal}>
                <DialogTitle>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>ADD NEW SUBJECT</Typography>
                        <IconButton onClick={closeModal}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box>
                        <TextField
                            fullWidth
                            label="Subject Name"
                            size='small'
                            onChange={(e) => setSubjectName(e.target.value)}
                            sx={{
                                marginY: '8px',
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Subject Description"
                            size='small'
                            onChange={(e) => setDescription(e.target.value)}
                            sx={{
                                marginY: '8px',
                            }}
                        />
                    </Box>
                </DialogContent>
                <DialogActions sx={{ padding: '5px 23px 15px 23px' }}>
                    <Box sx={{ display: 'flex', width: '100%' }}>
                        <Box sx={{ width: '50%', marginRight: '5px' }}>
                            <Button variant="outlined" onClick={closeModal} sx={{ textTransform: 'none', width: '100%', fontWeight: 'bold', borderRadius: '4px' }} >
                                Cancel
                            </Button>
                        </Box>
                        <Box sx={{ width: '50%', marginLeft: '5px' }}>
                            <Button
                                sx={{
                                    textTransform: 'none', width: '100%', fontWeight: 'bold', backgroundColor: '#2196F3', color: "white", borderRadius: '4px'
                                    , '&:hover': {
                                        backgroundColor: '#2196F3',
                                    },
                                }}
                                onClick={handleAddSubject}
                            >
                                Add
                            </Button>
                        </Box>
                    </Box>
                </DialogActions>    
            </Dialog>
        </>
    )
}

export default AddSubjectModal;
