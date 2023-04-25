import React from 'react';
import {
  Avatar, Box, Typography, useMediaQuery,
} from '@mui/material';
import theme from '@/styles/theme';
import Image from 'next/image';
import TakoyakiIcon from '../Icons/takoyaki';
import GyozaIcon from '../Icons/gyoza';
import ChefIcon from '../Icons/chef';

export default function About() {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const styles = {
    about: {
      color: theme.palette.primary.main,
      minHeight: '700px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '40px',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      width: '700px'
    },
    title: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
  };

  return (
    <Box id='about-us' sx={styles.about}>
      {!isMobile
        && <Image src='/Logo.png' alt='Mitsuki Japanese Restaurant' width={400} height={400} />}
      <Box sx={styles.header}>
        <Typography sx={styles.title} variant='h6'>
          <TakoyakiIcon />
          About Mitsuki
          <GyozaIcon />
        </Typography>
        <Typography variant='h3' sx={{width: 'fit-content'}}>Authentic Japanese Food</Typography>
        <Typography variant='body1' sx={{ whiteSpace: 'pre-line' }}>
          {`Indulge in the exquisite flavors of genuine Japanese cuisine! At our Japanese restaurant, we specialize in serving authentic dishes like Takoyaki and Gyoza, crafted by our skilled chefs using time-honored techniques and the freshest ingredients.

          Embark on a culinary journey with us at our inaugural bazaar in the vibrant Arcovia City, conveniently located near Landers Superstore.

          For those who prefer to savor our delicacies at home, we are pleased to offer delivery via courier or the option for pick-up.
          `}
        </Typography>

        {/* <ChefIcon />
        <Avatar alt='Owner' src='/Hiromitzzzzzzzzzz.png' /> */}
      </Box>

    </Box>
  );
}
