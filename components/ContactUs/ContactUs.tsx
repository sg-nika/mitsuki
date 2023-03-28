import { Box, Typography } from '@mui/material';
import React from 'react';
import theme from '@/styles/theme';

export default function ContactUs() {
  const PHONE_NUMBER = '+63 995 746 7869';
  const styles = {
    contactUs: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '700px',
      color: theme.palette.primary.main,
      gap: '40px',
    },
    infoBoxContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
    },
    infoBox: {
      display: 'flex',
      flexDirection: 'column',

      '& > div': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    },
  };

  return (
    <Box id='contact-us' sx={styles.contactUs}>
      <Typography variant='h2'>Contact Us</Typography>

      <Box sx={styles.infoBoxContainer}>
        <Box sx={styles.infoBox}>
          <Typography variant='h4'>Contact Info</Typography>
          <Box>
            <Typography variant='body2'>Phone Number:</Typography>
            <Typography variant='body2'>{`${PHONE_NUMBER}`}</Typography>
          </Box>
          <Box>
            <Typography variant='body2'>Email:</Typography>
            <Typography variant='body2'>blabla@gmail.com</Typography>
          </Box>
          <Box>
            <Typography variant='body2'>Location:</Typography>
            <Typography variant='body2'>Greenwoods Executive Village, Cainta, Rizal, Philippines</Typography>
          </Box>
        </Box>

        <Box sx={styles.infoBox}>
          <Typography variant='h4'>Hours:</Typography>
          <Box>
            <Typography variant='body2'>Monday:</Typography>
            <Typography variant='body2'>CLOSED</Typography>
          </Box>
          <Box>
            <Typography variant='body2'>Tuesday - Thursday:</Typography>
            <Typography variant='body2'>11AM - 6PM</Typography>
          </Box>
          <Box>
            <Typography variant='body2'>Friday - Sunday:</Typography>
            <Typography variant='body2'>10AM - 7PM</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={styles.infoBoxContainer}>
        <Box>Google Maps here</Box>
        <Box sx={styles.infoBox}>
          <Typography variant='h4'>Events</Typography>
          <Box>
            <Typography variant='body2'>March 17:</Typography>
            <Typography variant='body2'>Grand Opening</Typography>
          </Box>
          <Box>
            <Typography variant='body2'>March 17 - 19:</Typography>
            <Typography variant='body2'>ArcoVia City, Pasig</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={styles.infoBoxContainer}>
        <Box>Get in touch with us form</Box>
      </Box>
    </Box>
  );
}
