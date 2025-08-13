import React from 'react';
import { Box, Container, Grid, Typography, Link, Divider, IconButton, Stack } from '@mui/material';
import { Facebook, Instagram, Twitter, Pinterest } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ bgcolor: 'secondary.main', pt: 6, pb: 6, mt: 8 }}>
      <Container>
        <Grid container spacing={4}>
          {/* Brand and About Section */}
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h5" sx={{ mb: 2, fontFamily: '"Cormorant Garamond", serif', fontWeight: 700, color: 'primary.main' }}>
              LIORA
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Unveil your natural beauty with our premium cosmetics, crafted with care and love.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton size="small" color="primary"><Facebook fontSize="small" /></IconButton>
              <IconButton size="small" color="primary"><Instagram fontSize="small" /></IconButton>
              <IconButton size="small" color="primary"><Twitter fontSize="small" /></IconButton>
              <IconButton size="small" color="primary"><Pinterest fontSize="small" /></IconButton>
            </Stack>
          </Grid>
        </Grid>

        {/* Divider Line */}
        <Divider sx={{ my: 4 }} />

        {/* Footer Bottom */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, 
            justifyContent: 'space-between', 
            alignItems: 'center'
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Liora Cosmetics. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: { xs: 2, sm: 0 } }}>
            <Link component={RouterLink} to="/faq" underline="hover" color="text.secondary">
              FAQ
            </Link>
            <Link component={RouterLink} to="/terms" underline="hover" color="text.secondary">
              Terms & Conditions
            </Link>
            <Link component={RouterLink} to="/privacy-policy" underline="hover" color="text.secondary">
              Privacy Policy
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
