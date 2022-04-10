import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#071F2E',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    test: {
      main: '#a3e082',
      contrastText: '#fff',
    },
    logo: {
      main: '#FFD600'
    }
  },
});

export default theme;
