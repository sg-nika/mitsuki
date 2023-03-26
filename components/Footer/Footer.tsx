import { Box } from '@mui/material';
import React from 'react';
import theme from '@/styles/theme';

export default function Footer() {
  const styles = {
    footer: {
      backgroundColor: theme.palette.primary.dark,
    },
  };

  return (<Box sx={styles.footer}>Footer</Box>);
}
