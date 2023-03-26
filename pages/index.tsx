import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import About from '@/components/About/About';
import Hero from '@/components/Hero/Hero';
import ContactUs from '@/components/ContactUs/ContactUs';
import Menu from '@/components/Menu/Menu';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/theme';
import { Box } from '@mui/material';

export default function Home() {
  const styles = {
    container: {
      backgroundColor: theme.palette.primary.light,
      display: 'flex',
      flexDirection: 'column',
      '.MuiBox-root': {
        padding: '20px 40px',
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Mitsuki Japanese Restaurant</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Box sx={styles.container}>
        <Hero />
        <About />
        <Menu />
        <ContactUs />
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
