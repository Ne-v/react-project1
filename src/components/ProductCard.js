import React, { useState } from 'react';
import { 
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Rating,
  Chip,
  Snackbar,
  Alert,
  Box
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
    setShowAlert(true);
  };


  return (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        minWidth: 250, 
        maxWidth: 300, 
        m: 1, 
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 3
        }
      }}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      {product.tags?.includes('new') && (
        <Chip
          label="New"
          color="primary"
          size="small"
          sx={{ 
            position: 'absolute', 
            top: 10, 
            right: 10, 
            zIndex: 1,
            fontWeight: 'bold'
          }}
        />
      )}

     
      <Box sx={{
        position: 'relative',
        width: '100%',
        paddingTop: '100%', 
        overflow: 'hidden',
        backgroundColor: '#f5f5f5' 
      }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
          onError={(e) => {
            console.error('Failed to load:', product.image);
            e.target.src = '/images/placeholder.jpg';
            e.target.style.opacity = 0.7;
          }}
        />
      </Box>

      
      <CardContent sx={{ 
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 600 }}>
          {product.name}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
          {product.description.length > 80 
            ? `${product.description.substring(0, 80)}...` 
            : product.description}
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
          ₹{product.price.toFixed(2)}
          </Typography>
          <Rating value={product.rating} precision={0.5} size="small" readOnly />
        </Box>
      </CardContent>

    
      <Box sx={{ p: 2, pt: 0 }}>
        <Button 
          variant="contained" 
          color="primary"
          onClick={handleAddToCart}
          fullWidth
          sx={{ fontWeight: 600 }}
        >
          Add to Cart
        </Button>
      </Box>

     
      <Snackbar
        open={showAlert}
        autoHideDuration={3000}
        onClose={() => setShowAlert(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" onClose={() => setShowAlert(false)}>
          Added to cart!
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default ProductCard;