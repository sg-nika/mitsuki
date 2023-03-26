import React from 'react';
import { Box, Typography } from '@mui/material';
import theme from '@/styles/theme';

export default function About() {
  const styles = {
    about: {
      display: 'flex',
      height: '700px',
      color: theme.palette.primary.main,
    },
    header: {

    },
  };

  return (
    <Box id='about-us' sx={styles.about}>
      <Box sx={styles.header}>
        <Typography variant='body1'>About Mitsuki</Typography>
        <Typography variant='h4'>Authentic Japanese Food</Typography>
      </Box>
    </Box>
  );
}
