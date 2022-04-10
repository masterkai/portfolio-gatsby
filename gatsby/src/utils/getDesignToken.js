import {blue, deepOrange, grey} from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: blue,
        divider: blue[200],
        text: {
          primary: grey[900],
          secondary: grey[800],
        },
      }
      : {
        // palette values for dark mode
        primary: deepOrange,
        divider: deepOrange[700],
        // background: {
        //   default: deepOrange[900],
        //   paper: deepOrange[900],
        // },
        text: {
          primary: '#ccc',
          secondary: grey[500],
        },
      }),
  },
});
