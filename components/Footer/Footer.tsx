import { Box } from '@mui/material';
import React from 'react';
import theme from '@/styles/theme';

export default function Footer() {
  const styles = {
    footer: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.main,
      padding: '20px 40px',
      textAlign: 'center',
    },
  };

  return (<Box sx={styles.footer}>© Copyright 2023 Mitsuki. All rights reserved.</Box>)
}
