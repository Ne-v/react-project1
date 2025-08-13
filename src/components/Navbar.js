import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton,
  Badge,
  Box,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { ShoppingBag, Person, Menu as MenuIcon } from '@mui/icons-material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { cartItemCount } = useCart();
  const { isAuthenticated, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuLinks = [
    { text: 'Home', path: '/' },
    { text: 'Face', path: '/category/face' },
    { text: 'Eyes', path: '/category/eyes' },
    { text: 'Lips', path: '/category/lips' },
    { text: 'Skincare', path: '/category/skincare' },
  ];

  const closeMenu = () => setAnchorEl(null);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleLogout = () => {
    logout();
    localStorage.removeItem('loggedInUser');
    navigate('/login');
    closeMenu();
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
      <List>
        {menuLinks.map((link) => (
          <ListItem 
            button 
            key={link.text}
            component={RouterLink}
            to={link.path}
          >
            <ListItemText primary={link.text} />
          </ListItem>
        ))}
        <Divider />
        {isAuthenticated ? (
          <ListItem button onClick={handleLogout}>
            <ListItemText primary="Logout" />
          </ListItem>
        ) : (
          <ListItem 
            button 
            component={RouterLink}
            to="/login"
          >
            <ListItemText primary="Login" />
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="secondary">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo and Hamburger Menu (mobile) */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography 
              variant="h5" 
              component={RouterLink} 
              to="/" 
              sx={{ 
                fontWeight: 'bold', 
                textDecoration: 'none', 
                color: 'primary.main' 
              }}
            >
              LIORA
            </Typography>
          </Box>

          {/* Navigation Links (desktop) */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {menuLinks.map((link) => (
                <Button 
                  key={link.text} 
                  component={RouterLink} 
                  to={link.path} 
                  color="inherit"
                >
                  {link.text}
                </Button>
              ))}
            </Box>
          )}

          {/* Cart & Account */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton component={RouterLink} to="/cart" color="inherit">
              <Badge badgeContent={cartItemCount} color="primary">
                <ShoppingBag />
              </Badge>
            </IconButton>

            {!isMobile && (
              isAuthenticated ? (
                <>
                  <IconButton onClick={(e) => setAnchorEl(e.currentTarget)} color="inherit">
                    <Person />
                  </IconButton>
                  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <Button component={RouterLink} to="/login" color="inherit">
                  Login
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;