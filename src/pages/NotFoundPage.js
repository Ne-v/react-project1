import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  
  return (
    <Container sx={{ py: 8, textAlign: 'center' }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: '6rem', md: '10rem' },
          fontWeight: 700,
          color: 'primary.light',
          mb: 2
        }}
      >
        404
      </Typography>
      
      <Typography
        variant="h4"
        component="h1"
        sx={{ 
          mb: 3,
          fontWeight: 600,
          fontFamily: '"Cormorant Garamond", serif',
        }}
      >
        Page Not Found
      </Typography>
      
      <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: 600, mx: 'auto' }}>
        The page you're looking for doesn't seem to exist. It might have been moved or deleted.
      </Typography>
      
      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate('/')}
          sx={{ fontWeight: 600 }}
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;