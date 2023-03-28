import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#F0EDEEff',
      main: '#D12541ff',
      dark: '#151515ff',
    },
  },
});

export default responsiveFontSizes(theme);
