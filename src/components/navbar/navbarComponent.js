import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Logo from '../../assets/images/logo.jpeg'

const NavbarComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Executed Projects', path: '/projects' },
    { text: 'What We Offer?', path: '/what-we-offer' },
    { text: 'Our Values', path: '/our-vision' },
    { text: 'Contact Us', path: '/contact' }
  ];

  const getTitle = (path) => {
    switch (path) {
      case '/':
        return 'Home';
      case '/projects':
        return 'Executed Projects';
      case '/what-we-offer':
        return 'What We Offer?';
      case '/our-vision':
        return 'Our Values';
      case '/contact':
        return 'Contact Us';
      default:
        return 'Menu';
    }
  };

  const list = () => (
    <Box
      sx={{ width: 250, backgroundColor: '#0A1A29', height: '100%' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} component={Link} to={item.path}>
            <ListItemText
              primary={
                <Typography variant="body1" sx={{ color: '#EC7C30', fontWeight: 'bold' }}>
                  {item.text}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#0A1A29' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#EC7C30', fontWeight: 'bold'  }}>
            {getTitle(location.pathname)}
          </Typography>
          <Link to="/" style={{ textDecoration: 'none', marginLeft: 'auto' }}>
            <img src={Logo} alt="Logo" style={{ height: '50px' }} />
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </Box>
  );
};

export default NavbarComponent;
