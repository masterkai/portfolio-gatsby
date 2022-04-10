import React, {useRef} from 'react';
import ResponsiveAppBar from "./ResponsiveAppBar";
import Footer from "./Footer";
import 'normalize.css';
import Container from "@mui/material/Container";
import GlobalStyles from "../styles/GlobalStyles";
import {createTheme} from "@mui/material/styles";
import {getDesignTokens} from "../utils/getDesignToken";
import {ColorModeContext} from "../context/ColorModeContext";
import {ThemeProvider} from "@emotion/react";

export default function Layout({children}) {
  const [mode, setMode] = React.useState('light');
  const appBarRef = useRef()
  const footerRef = useRef()
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        console.log('toggleColorMode rendered!!');
        setMode((prevMode) => {
            return prevMode === 'light' ? 'dark' : 'light'
          }
        );
      },
      mode
    }),
    [mode],
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  // console.log('theme', theme.palette.primary.main);
  return (
    <>
      <GlobalStyles mode={mode} mainColor={theme.palette.primary.main}/>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <ResponsiveAppBar mode={mode} ref={appBarRef}/>
          <Container maxWidth="lg">
            {children}
          </Container>
          <Footer ref={footerRef}/>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  )
}
