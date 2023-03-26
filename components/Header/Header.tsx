import React from 'react';
import { Box, Typography } from '@mui/material';
import theme from '@/styles/theme';

export default function Header() {
  const PHONE_NUMBER = '+63 995 746 7869';
  const styles = {
    header: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.main,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      position: 'sticky',
      top: '0px',
    },
    linksContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2vw',
    },
  };

  return (
    <Box sx={styles.header}>
      <Typography variant="h3">Mitsuki</Typography>

      <Box sx={styles.linksContainer}>
        <a href="#hero">Home</a>
        <a href="#about-us">About Us</a>
        <a href="#menu">Menu</a>
        <a href="#contact-us">Contact Us</a>
      </Box>

      <a href={`tel:${PHONE_NUMBER}`}>Order Now!</a>
    </Box>
  );
}
