// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}\
// import { ListItem } from '@mui/material';
import { Divider, Typography } from '@mui/material';
import React from 'react';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <Typography variant="h3">
        Call a Friend
      </Typography>
      <Typography variant="subtitle1">Your friendly contact app</Typography>
      <Divider variant="inset" />
      <br></br>
    </>
  );
};

export default Header;