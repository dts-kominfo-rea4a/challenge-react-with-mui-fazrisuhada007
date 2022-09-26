// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material';
import React from 'react';


// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <div>
            <div>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }} aria-label="contacts">
                    {data.map((value, key) => {
                        return (
                            <ListItem disablePadding key={key}>
                                <ListItemButton>
                                    <ListItemAvatar >
                                        <Avatar alt={value.name} src={value.photo} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={value.name}
                                        secondary={
                                            <>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {value.phone}<br></br>
                                                    {value.email}
                                                </Typography>
                                            </>
                                        }
                                    />
                                </ListItemButton>
                            </ListItem>
                        );

                    })}
                </List>
            </div>
        </div>
    );
};

export default Contact;