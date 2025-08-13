import React from 'react';
import { Box, Typography, Grid, Container, Paper, Divider, Button } from '@mui/material';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard'; // Import ProductCard directly
import { products } from '../data/products';

const benefits = [
  {
    title: "Cruelty-Free",
    description: "All our products are 100% cruelty-free and never tested on animals."
  },
  {
    title: "Natural Ingredients",
    description: "Crafted with natural ingredients that nourish and enhance your skin."
  },
  {
    title: "Sustainable Packaging",
    description: "Eco-friendly packaging that's kind to our planet and reduces waste."
  },
  {
    title: "Dermatologist Approved",
    description: "Approved by dermatologists to ensure effectiveness for all skin types."
  }
];

const HomePage = () => {
  const newProducts = products.filter(product => product.tags && product.tags.includes('new')).slice(0, 4);

  return (
    <Box>
      <HeroSection />
      
      {/* Benefits Section */}
      <Container sx={{ mb: 8 }}>
        <Grid container spacing={3}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 2,
                  bgcolor: 'secondary.light',
                  border: '1px solid',
                  borderColor: 'secondary.main',
                  textAlign: 'center'
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    mb: 1,
                    fontWeight: 600,
                    color: 'primary.main'
                  }}
                >
                  {benefit.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {benefit.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      {/* About Us Section */}
      <Box sx={{ backgroundColor: '#f8f4ff', py: 10, mb: 8 }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="overline" 
              sx={{ 
                color: 'primary.main', 
                fontWeight: 600, 
                fontSize: '1rem',
                letterSpacing: 2
              }}
            >
              OUR JOURNEY
            </Typography>
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                fontWeight: 700, 
                mb: 3, 
                mt: 1,
                backgroundImage: 'linear-gradient(45deg, #6a11cb 0%, #2575fc 100%)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              Beauty with Purpose, Made for You
            </Typography>
            <Divider sx={{ width: '60px', borderWidth: '3px', borderColor: 'secondary.main', mb: 4, mx: 'auto' }} />
            <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
              Founded in 2015 with a vision to revolutionize skincare, we've been on a mission to create products that celebrate your natural beauty while being kind to our planet. Our team of passionate formulators and skincare experts work tirelessly to blend science and nature, creating powerful formulations that deliver real results.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              What sets us apart is our unwavering commitment to transparency, sustainability, and inclusivity. Every ingredient we use is carefully selected, ethically sourced, and formulated to work for all skin types and tones. We are committed to a journey of constant innovation, empowering you to feel confident in your own skin.
            </Typography>
          </Box>
        </Container>
      </Box>
      
      {/* New Arrivals Section */}
      <Container sx={{ mb: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
            New Launches
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
            Be the first to try our latest innovations in beauty
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {newProducts.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductCard 
                product={product}
                showAddToCart={false} // This will hide the Add to Cart button
              />
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            href="/category/new"
            sx={{ fontWeight: 600 }}
          >
            Explore New Arrivals
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;