import { Box, Typography } from '@mui/material';
import React from 'react';
import theme from '@/styles/theme';

export default function ContactUs() {
  const styles = {
    contactUs: {
      height: '700px',
      color: theme.palette.primary.main,
    },
  };

  return (
    <Box id='contact-us' sx={styles.contactUs}>
      <Typography variant='h3'>Contact Us</Typography>
      <Typography variant='body2'>Events</Typography>
      <Typography variant='body2'>Location</Typography>
      <Typography variant='body2'>Hours</Typography>

      <Box>Get in touch with us form</Box>
      <Box>Google Maps here</Box>
    </Box>
  );
}
