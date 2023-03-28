import React, { useState } from 'react';
import {
  Box, Divider, Drawer, IconButton, Link, Typography,
} from '@mui/material';
import theme from '@/styles/theme';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
  const PHONE_NUMBER = '+63 995 746 7869';
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigationLinksFontVariant = isMobile ? 'h5' : 'body2';
  const styles = {
    header: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.main,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: '0px',
      zIndex: '10',
      padding: '0 40px',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '1vw',
      padding: '4px 0',
    },
    linksContainer: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: isMobile ? '40px' : '2vw',
      marginTop: isMobile ? '40px' : '0',
    },
    phoneContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    drawer: {
      '& .MuiDrawer-paper': {
        display: 'flex',
        width: '300px',
      },
    },
    icon: {
      width: '20px',
      height: '20px',
    },
  };

  const handleDrawer = () => {
    setIsDrawerOpen((previous) => !previous);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const NavigationLinks = (
    <Box sx={styles.linksContainer}>
      <Link variant={navigationLinksFontVariant} href='#hero' underline='hover' onClick={handleCloseDrawer}>
        Home
      </Link>
      <Link variant={navigationLinksFontVariant} href='#about-us' underline='hover' onClick={handleCloseDrawer}>
        About Us
      </Link>
      <Link variant={navigationLinksFontVariant} href='#menu' underline='hover' onClick={handleCloseDrawer}>
        Menu
      </Link>
      <Link variant={navigationLinksFontVariant} href='#contact-us' underline='hover' onClick={handleCloseDrawer}>
        Contact Us
      </Link>
      <Link variant={navigationLinksFontVariant} sx={styles.phoneContainer} href={`tel:${PHONE_NUMBER}`} underline='hover'>
        <PhoneAndroidIcon sx={styles.icon} />
        Order Now!
      </Link>
    </Box>
  );

  return (
    <Box sx={styles.header}>
      <Box style={styles.logoContainer}>
        <Image src='/Logo.png' alt='Mitsuki Japanese Restaurant' width={75} height={75} />
        <Typography variant='h4'>Mitsuki</Typography>
      </Box>
      { isMobile
        ? (
          <>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='end'
              onClick={handleDrawer}

            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant='temporary'
              anchor='right'
              onClose={handleCloseDrawer}
              open={isDrawerOpen}
              sx={styles.drawer}
            >
              <IconButton
                color='primary'
                aria-label='close drawer'
                onClick={handleCloseDrawer}
                sx={{ width: 'fit-content', alignSelf: 'end' }}
              >
                <CloseIcon sx={styles.icon} />
              </IconButton>
              <Divider variant='middle' />
              {NavigationLinks}
            </Drawer>
          </>
        )
        : NavigationLinks}
    </Box>
  );
}
