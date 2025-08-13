import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentTagline, setCurrentTagline] = useState(0);
  const isMobile = useMediaQuery('(max-width:600px)');

  const taglines = [
    "Radiance, Bottled Just for You",
    "Beauty That Speaks Nature's Language",
    "Unleash Your Glow, Naturally"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{
      background: 'linear-gradient(135deg, #d8c4ff 0%, #8a6dc7 100%)',
      color: 'white',
      py: isMobile ? 6 : 10,
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid rgba(0,0,0,0.1)'
    }}>
      {/* Animated floating elements */}
      {[...Array(5)].map((_, i) => (
        <Box key={i} sx={{
          position: 'absolute',
          background: 'rgba(255,255,255,0.15)',
          borderRadius: '50%',
          animation: `float ${15 + i * 2}s linear infinite`,
          '@keyframes float': {
            '0%': { transform: 'translateY(0) rotate(0deg)' },
            '50%': { transform: `translateY(${-20 + i * 5}px) rotate(${180 + i * 30}deg)` },
            '100%': { transform: 'translateY(0) rotate(360deg)' }
          },
          width: `${50 + i * 30}px`,
          height: `${50 + i * 30}px`,
          top: `${10 + i * 15}%`,
          left: `${i * 20}%`,
          opacity: 0.4
        }} />
      ))}

      {/* Glitter effect */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.8) 0%, transparent 70%)',
        opacity: 0.3
      }} />

      {/* AI Generated Hero Image */}
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1600180758890-8e362f96f430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGJlYXV0eXxlbnwwfHx8fDE2ODM2NzY1NTA&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Beauty Natural Glow"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.1,
          zIndex: 0
        }}
      />

      {/* Main Content */}
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant={isMobile ? 'h4' : 'h2'} sx={{ 
          fontWeight: 700, 
          mb: 2,
          fontFamily: '"Playfair Display", serif',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          position: 'relative',
          display: 'inline-block',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -10,
            left: '25%',
            width: '50%',
            height: '3px',
            background: 'rgba(255,255,255,0.7)',
            borderRadius: '3px'
          }
        }}>
          Beauty That Transforms
        </Typography>
        
        <Typography variant={isMobile ? 'h6' : 'h5'} sx={{ 
          mb: 3,
          minHeight: isMobile ? '30px' : '40px',
          fontStyle: 'italic',
          color: '#f8f2ff',
          textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
          transition: 'opacity 0.5s ease',
          opacity: 1
        }}>
          {taglines[currentTagline]}
        </Typography>
        
        <Typography variant="body1" sx={{ 
          mb: 4,
          maxWidth: 600,
          mx: 'auto',
          color: 'rgba(255,255,255,0.9)',
          fontSize: isMobile ? '1rem' : '1.1rem',
          textShadow: '1px 1px 1px rgba(0,0,0,0.1)'
        }}>
          Experience our award-winning formulas with rare botanicals and ethically sourced ingredients.
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          gap: 2, 
          justifyContent: 'center',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center'
        }}>
          <Button
            variant="contained"
            onClick={() => navigate('/category/bestsellers')}
            sx={{ 
              px: 4, 
              py: 1.5,
              borderRadius: '25px',
              background: 'linear-gradient(45deg, #7a5db7 0%, #9d84e0 100%)',
              boxShadow: '0 4px 15px rgba(154, 132, 212, 0.5)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 8px 25px rgba(154, 132, 212, 0.7)',
                '&::before': {
                  opacity: 1
                }
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(45deg, rgba(255,255,255,0.2) 0%, transparent 100%)',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }
            }}
          >
            Shop Bestsellers
          </Button>
          
          <Button
            variant="outlined"
            onClick={() => navigate('/category/new')}
            sx={{ 
              px: 4,
              py: 1.5,
              borderRadius: '25px',
              borderWidth: 2,
              borderColor: 'white',
              color: 'white',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.15)',
                transform: 'translateY(-3px)',
                boxShadow: '0 4px 10px rgba(255,255,255,0.2)'
              }
            }}
          >
            New Arrivals
          </Button>
        </Box>
        
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mt: 4, 
          gap: 3,
          flexWrap: 'wrap',
          color: '#f0e9ff',
          '& > *': {
            display: 'flex',
            alignItems: 'center',
            '&::before': {
              content: '"✧"',
              marginRight: '8px'
            }
          }
        }}>
          <Typography>4.5/5 Rating</Typography>
          <Typography>3000+ Happy Customers</Typography>
          <Typography>Cruelty Free</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
