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
      minHeight: '700px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.primary.main,
      gap: '40px',
      '& .MuiTypography-root': {
        textShadow: `4px 4px 4px ${theme.palette.primary.dark}`,
      },
    },
    backgroundImage: {
      backgroundImage: 'url(\'/hero_bg_image.png\')',
      opacity: '.15',
      minHeight: '700px',
      width: '100%',
      display: 'block',
      position: 'absolute',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      zIndex: '1'
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      zIndex: '1',
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
    image: {
      zIndex: '1',
    },
  };

  return (
    <>
      <Box sx={styles.backgroundImage} />
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

        {/* {!isMobile
        && <Image style={styles.image} src='/Logo.png' alt='Mitsuki Japanese Restaurant' width={400} height={400} />} */}
      </Box>
    </>

  );
}
