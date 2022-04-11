import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {navigate} from 'gatsby';
import * as icons from '../customIcons/index'
import Link from "./Link";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {ColorModeContext} from "../context/ColorModeContext";

const pages = ['about', 'resume', 'works', 'blog', 'contact'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = React.forwardRef(({mode}, ref) => {
  const colorMode = React.useContext(ColorModeContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const isDark = () => mode === 'dark';

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };
  const handleClick = (page) => {
    setAnchorElUser(null);
    const path = `/${page}`
    navigate(path)
  }

  return (
    <AppBar position="static" ref={ref}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            <Link to="/">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
              >
                <icons.Logo sx={{fontSize: 40, color: isDark() ? 'primary' : 'yellow'}}/>
                <Typography sx={{
                  fontSize: 24,
                  lineHeight: '40px',
                  color: isDark() ? 'primary' : 'yellow',
                  fontWeight: 'bold',
                  ml: 1
                }}>KAIMINGLIU</Typography>
              </Typography>
            </Link>
          </Box>
          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none'},
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleClick(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <Link to="/">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{display: {xs: 'flex', md: 'none'}}}
              >
                <icons.Logo sx={{fontSize: 40, color: isDark() ? 'primary' : 'yellow'}}/>
              </Typography>
            </Link>
          </Box>


          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleClick(page)}
                sx={{my: 2, color: 'white', display: 'block'}}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{flexGrow: 0}}>
            <Tooltip title='dark mode'>
              <IconButton sx={{ml: 1}} onClick={colorMode.toggleColorMode} color="inherit">
                {mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
});
export default ResponsiveAppBar;
