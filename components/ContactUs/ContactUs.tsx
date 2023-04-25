import {
  Box, Link, Typography, useMediaQuery,
} from '@mui/material';
import React from 'react';
import theme from '@/styles/theme';
import FacebookIcon from '../Icons/facebook';
import InstagramIcon from '../Icons/instagram';

export default function ContactUs() {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const PHONE_NUMBER = '+63 995 746 7869';
  const styles = {
    contactUs: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: theme.palette.primary.main,
      gap: '24px',
      paddingBottom: '80px',

    },
    infoBoxContainer: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-around',
      width: '100%',
      gap: '30px',
    },
    infoBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexBasis: '33.33%',
      gap: '8px',
    },
    contactInfo: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    schedule: {
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
      gap: '8px',
    },
    dayHours: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    socialMediaLinks: {
      display: 'flex',
      gap: '12px',
      width: '100%',
      justifyContent: 'center',
    },
  };

  return (
    <Box id='contact-us' sx={styles.contactUs}>
      <Box sx={styles.infoBoxContainer}>
        <Box sx={styles.infoBox}>
          <Typography variant='h4'>Hours</Typography>
          <Box sx={styles.schedule}>
            <Box sx={styles.dayHours}>
              <Typography variant='body2'>Monday:</Typography>
              <Typography variant='body2'>CLOSED</Typography>
            </Box>

            <Box sx={styles.dayHours}>
              <Typography variant='body2'>Tuesday:</Typography>
              <Typography variant='body2'>11AM - 6PM</Typography>
            </Box>

            <Box sx={styles.dayHours}>
              <Typography variant='body2'>Wednesday:</Typography>
              <Typography variant='body2'>11AM - 6PM</Typography>
            </Box>

            <Box sx={styles.dayHours}>
              <Typography variant='body2'>Thursday:</Typography>
              <Typography variant='body2'>11AM - 6PM</Typography>
            </Box>

            <Box sx={styles.dayHours}>
              <Typography variant='body2'>Friday:</Typography>
              <Typography variant='body2'>10AM - 7PM</Typography>
            </Box>

            <Box sx={styles.dayHours}>
              <Typography variant='body2'>Saturday:</Typography>
              <Typography variant='body2'>10AM - 7PM</Typography>
            </Box>

            <Box sx={styles.dayHours}>
              <Typography variant='body2'>Sunday:</Typography>
              <Typography variant='body2'>10AM - 7PM</Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={styles.infoBox}>
          <Typography variant='h4'>Events</Typography>
          <Box sx={styles.schedule}>
            <Box sx={styles.dayHours}>
              <Typography variant='body2'>March 17:</Typography>
              <Typography variant='body2'>Grand Opening</Typography>
            </Box>
            <Box sx={styles.dayHours}>
              <Typography variant='body2'>March 17 - 19:</Typography>
              <Typography variant='body2'>ArcoVia City, Pasig</Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={styles.infoBox}>
          <Typography variant='h4'>Contact Us</Typography>
          <Box sx={styles.contactInfo}>
            <Typography variant='body2'>{`${PHONE_NUMBER}`}</Typography>
            <Typography variant='body2'>blabla@gmail.com</Typography>
            <Typography variant='body2'>Greenwoods Executive Village, Cainta, Rizal, Philippines</Typography>
          </Box>

          <Box sx={styles.socialMediaLinks}>
            <Link href='https://www.facebook.com/mitsukijapanesefoods'>
              <FacebookIcon />
            </Link>
            <Link href='https://www.instagram.com/mitsukijapanesefoods'>
              <InstagramIcon />
            </Link>
          </Box>
        </Box>
      </Box>

      {/* <Box sx={styles.infoBoxContainer}>
        <Box>Google Maps here</Box>
      </Box> */}

      {/* <Box sx={styles.infoBoxContainer}>
        <Box>Get in touch with us form</Box>
      </Box> */}
    </Box>
  );
}
