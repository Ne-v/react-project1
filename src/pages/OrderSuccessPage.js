import React, { useEffect } from 'react';
import { Container, Typography, Box, Button, Paper } from '@mui/material';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const OrderSuccessPage = () => {
  const navigate = useNavigate();
  const orderNumber = `ORD-${Math.floor(Math.random() * 10000)}-${new Date().getFullYear()}`;
  
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 2 }}>
        <CheckCircleIcon 
          color="primary" 
          sx={{ fontSize: 80, mb: 2 }} 
        />
        
        <Typography 
          variant="h4" 
          component="h1" 
          sx={{ 
            mb: 2, 
            fontWeight: 600,
            fontFamily: '"Cormorant Garamond", serif',
          }}
        >
          Order Placed Successfully!
        </Typography>
        
        <Typography variant="body1" color="text.secondary" paragraph>
          Thank you for your order. We've received your request and will process it soon.
        </Typography>
        
        <Box sx={{ my: 3, p: 3, bgcolor: 'secondary.light', borderRadius: 2, display: 'inline-block' }}>
          <Typography variant="h6" gutterBottom>
            Order Number:
          </Typography>
          <Typography 
            variant="h5" 
            fontWeight={700}
            color="primary.main"
          >
            {orderNumber}
          </Typography>
        </Box>
        
        <Typography variant="body1" paragraph>
          A confirmation email has been sent to your registered email address.
        </Typography>
        
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/')}
            sx={{ fontWeight: 600 }}
          >
            Continue Shopping
          </Button>
          
        </Box>
      </Paper>
    </Container>
  );
};

export default OrderSuccessPage;
