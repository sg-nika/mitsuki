import React from 'react';
import {
  Box, Button, Typography, useMediaQuery,
} from '@mui/material';
import theme from '@/styles/theme';
import Image from 'next/image';
import TakoyakiIcon from '../Icons/takoyaki';
import GyozaIcon from '../Icons/gyoza';

export default function Hero() {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const styles = {
    hero: {
      backgroundColor: theme.palette.primary.dark,
      // backgroundImage: 'url(\'/test_background.png\')',
      // filter: 'blur(8px)',
      minHeight: '700px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.primary.main,
      gap: '40px',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    title: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    copy: {
      maxWidth: '70%',
    },
    button: {
      maxWidth: '30%',
      marginTop: '24px',
    },
  };

  return (
    <Box id='hero' sx={styles.hero}>
      <Box sx={styles.content}>
        <Typography sx={styles.title} variant='body1'>
          <TakoyakiIcon />
          Experience the Essence of Japan at Mitsuki
          <GyozaIcon />
        </Typography>
        <Typography variant='h2'>Discover the Timeless Art of Japanese Cuisine</Typography>
        <Typography sx={styles.copy} variant='body1'>Our authentic Japanese cuisine is meticulously crafted to tantalize your taste buds with the perfect harmony of flavors, textures, and presentation.</Typography>
        <Button sx={styles.button} variant='outlined' component='a' href='#menu'>Menu</Button>
      </Box>

      {!isMobile
        && <Image src='/Logo.png' alt='Mitsuki Japanese Restaurant' width={400} height={400} />}
    </Box>

  );
}
