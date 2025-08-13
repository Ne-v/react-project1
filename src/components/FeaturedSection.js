import React from 'react';
import { Box, Typography, Grid, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';

const FeaturedSection = ({ title, subtitle, products, actionText, actionLink, bgColor = 'transparent' }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 6, bgcolor: bgColor }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 600,
              mb: 1,
              color: 'text.primary',
              fontFamily: '"Cormorant Garamond", serif',
            }}
          >
            {title}
          </Typography>
          
          <Typography
            variant="subtitle1"
            sx={{ 
              color: 'text.secondary', 
              maxWidth: 600, 
              mx: 'auto',
              mb: 2 
            }}
          >
            {subtitle}
          </Typography>
        </Box>
        
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
        
        {actionText && (
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => navigate(actionLink)}
              sx={{
                borderWidth: 2,
                fontWeight: 600,
                px: 4,
                py: 1,
                '&:hover': {
                  borderWidth: 2
                }
              }}
            >
              {actionText}
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default FeaturedSection;