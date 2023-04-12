import { Box, useMediaQuery } from '@mui/material';
import React from 'react';
import theme from '@/styles/theme';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

interface MenuItemVariation {
  quantity: number,
  price: number,
  isAvailableOnline?: boolean
}

interface MenuItem {
    foodName: string,
    variations: MenuItemVariation[],
    image: string
}

export default function Menu() {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const styles = {
    menu: {
      minHeight: '700px',
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.main,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '40px',
    },
    menuInnerContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: isMobile ? 'column' : 'row',
      gap: '40px',

    },
    cardsContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: 'fit-content',
      borderRadius: '20px',
      borderColor: theme.palette.primary.light,
      borderStyle: 'ridge',
      '&.MuiCard-root': {
        backgroundColor: 'transparent',
      },
      padding: '20px',
    },
    image: {
      marginBottom: '8px',
      '& > img': {
        objectFit: 'cover',
        width: '100%',
        borderRadius: '20px',
      },
    },
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      gap: '8px',
      color: theme.palette.primary.main,
      width: '100%',
      flex: '1',
    },
    backgroundImage: {
      backgroundImage: 'url(\'/menu_bg_image.png\')',
      opacity: '.15',
      minHeight: '700px',
      width: '100%',
      display: 'block',
      position: 'absolute',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  };

  const menu: MenuItem[] = [
    {
      foodName: 'takoyaki',
      variations: [
        {
          quantity: 4,
          price: 79,
          isAvailableOnline: false,
        },
        {
          quantity: 8,
          price: 149,
          isAvailableOnline: true,
        },
        {
          quantity: 12,
          price: 199,
          isAvailableOnline: true,
        },
      ],
      image: '/takoyaki.png',
    },

    {
      foodName: 'gyoza',
      variations: [
        {
          quantity: 4,
          price: 79,
          isAvailableOnline: false,
        },
        {
          quantity: 10,
          price: 179,
          isAvailableOnline: true,
        },
      ],
      image: '/gyoza.png',
    },
  ];

  const menuItems = menu.map((menuItem: MenuItem) => {
    const {
      foodName, variations, image,
    } = menuItem;

    const formattedFoodName = `${foodName.charAt(0).toUpperCase()}${foodName.slice(1)}`;

    return (
      <Card sx={styles.cardsContainer} key={`${foodName}`}>
        <Box sx={styles.image}>
          <Image src={image} alt={foodName} width={300} height={200} />
        </Box>
        <Box sx={styles.cardContent}>
          <Typography variant='h4'>{formattedFoodName}</Typography>
          {variations.map((variation: MenuItemVariation) => {
            const { quantity, price, isAvailableOnline } = variation;

            return (
              <Typography variant='body1'>
                {`${quantity}pcs - ₱${price}`}
                {!isAvailableOnline && <>*</>}
              </Typography>
            );
          })}
        </Box>

      </Card>
    );
  });

  return (
    <>
      <Box sx={styles.backgroundImage} />
      <Box id='menu' sx={styles.menu}>
        <Typography variant='h3'>Menu Items</Typography>
        <Box sx={styles.menuInnerContainer}>
          {menuItems}
        </Box>
      </Box>
    </>

  );
}
