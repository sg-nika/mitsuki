import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import theme from '@/styles/theme';

export default function Hero() {
  const styles = {
    hero: {
      backgroundColor: theme.palette.primary.dark,
      height: '700px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.primary.main,
    },
  };

  return (
    <Box id='hero' sx={styles.hero}>
      <Box>
        <Typography variant='h4'>Welcome</Typography>
        <Typography variant='h1'>Main Copy Here</Typography>
        <Typography variant='body1'>details here at the bottom</Typography>
        <Button component='a' href='#menu'>Explore Menu</Button>
      </Box>
    </Box>
  );
}
