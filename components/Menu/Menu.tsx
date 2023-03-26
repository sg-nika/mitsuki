import { Box } from '@mui/material';
import React from 'react';
import theme from '@/styles/theme';

interface MenuItem {
    type: 'takoyaki' | 'gyoza',
    quantity: number,
    price: number,
    isAvailableOnline?: boolean
}

export default function Menu() {
  const styles = {
    menu: {
      height: '700px',
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.main,
    },
  };

  const menu: MenuItem[] = [
    {
      type: 'takoyaki',
      quantity: 4,
      price: 79,
      isAvailableOnline: false,
    },
    {
      type: 'takoyaki',
      quantity: 8,
      price: 149,
      isAvailableOnline: true,
    },
    {
      type: 'takoyaki',
      quantity: 12,
      price: 199,
      isAvailableOnline: true,
    },
    {
      type: 'gyoza',
      quantity: 4,
      price: 79,
      isAvailableOnline: false,
    },
    {
      type: 'gyoza',
      quantity: 10,
      price: 179,
      isAvailableOnline: true,
    },
  ];

  const menuItems = menu.map((menuItem: MenuItem) => {
    const {
      type, quantity, price, isAvailableOnline,
    } = menuItem;

    return (
      <li>
        {`${type} ${quantity} - ${price}`}
        {!isAvailableOnline && <>*</>}
      </li>
    );
  });

  return (
    <Box id='menu' sx={styles.menu}>
      <ul>
        {menuItems}
      </ul>
    </Box>
  );
}
