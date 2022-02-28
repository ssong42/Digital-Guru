import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {

  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontSize: '21px' }}>
              Digital Guru
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: '18px' }}>
              Helping you navigate your spiritual path.
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
  );
}