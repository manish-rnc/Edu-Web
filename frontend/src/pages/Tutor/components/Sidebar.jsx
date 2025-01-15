import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
    return (
        <>
            <Box sx={{
                paddingY: '18px',
            }}>
                Company Logo
            </Box>
            <Divider />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '77vh'
            }}>
                <Box>
                    <List>
                        <ListItem disablePadding sx={{
                            padding: '2px 8px',
                        }}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography sx={{ fontWeight: 'bold' }}>Home</Typography>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{
                            padding: '2px 8px',
                        }}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography sx={{ fontWeight: 'bold' }}>Add</Typography>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{
                            padding: '2px 8px',
                        }}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography sx={{ fontWeight: 'bold' }}>History</Typography>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
                <Box>
                    <Divider />
                    <ListItem disablePadding sx={{
                        padding: '2px 8px',
                    }}>
                        <ListItemButton>
                            <ListItemIcon sx={{padding: 0, margin: 0}}>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography sx={{ fontWeight: 'bold' }}>Settings</Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Box>
            </Box>
        </>
    )
}

export default Sidebar;