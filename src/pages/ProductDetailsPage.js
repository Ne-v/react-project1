import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Rating,
  Divider,
  Tabs,
  Tab,
  Paper,
  Breadcrumbs,
  Link,
  IconButton,
  Snackbar,
  Alert,
  TextField
} from '@mui/material';
import { Link as RouterLink, useParams, useNavigate } from 'react-router-dom';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import { useCart } from '../contexts/CartContext';
import { products } from '../data/products';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`product-tabpanel-${index}`}
      aria-labelledby={`product-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [tabValue, setTabValue] = useState(0);
  const [notification, setNotification] = useState({ open: false, message: '' });
  
  useEffect(() => {
    // Find product by ID
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate('/not-found');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [id, navigate]);
  
  if (!product) {
    return null; // or loading indicator
  }
  
  const handleQuantityChange = (newValue) => {
    if (newValue >= 1) {
      setQuantity(newValue);
    }
  };
  
  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setNotification({ open: true, message: 'Added to cart!' });
  };
  
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  
  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };
  
  // Recommended products (just some random ones for demo)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  return (
    <Container sx={{ py: 6 }}>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link component={RouterLink} to="/" color="inherit" underline="hover">
          Home
        </Link>
        <Link component={RouterLink} to={`/category/${product.category.toLowerCase()}`} color="inherit" underline="hover">
          {product.category}
        </Link>
        <Typography color="text.primary">{product.name}</Typography>
      </Breadcrumbs>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={product.image || "/images/placeholder.jpg"}
            alt={product.name}
            sx={{
              width: '40%',
              height: 'auto',
              borderRadius: 2,
              bgcolor: 'secondary.light'
            }}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box>
            <Typography 
              variant="h4" 
              component="h1" 
              sx={{ 
                fontWeight: 600,
                mb: 1,
                fontFamily: '"Cormorant Garamond", serif',
              }}
            >
              {product.name}
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={product.rating} precision={0.5} readOnly />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                {product.rating} stars
              </Typography>
            </Box>
            
            <Typography 
              variant="h5" 
              color="primary.main" 
              sx={{ fontWeight: 700, mb: 3 }}
            >
              ₹{product.price.toFixed(2)}
            </Typography>
            
            <Typography variant="body1" paragraph>
              {product.description}
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
              <Typography variant="subtitle1" sx={{ mr: 2 }}>
                Quantity:
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton 
                  size="small"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                  sx={{ border: 1, borderColor: 'divider' }}
                >
                  <RemoveIcon fontSize="small" />
                </IconButton>
                <TextField
                  size="small"
                  value={quantity}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (!isNaN(value)) {
                      handleQuantityChange(value);
                    }
                  }}
                  InputProps={{ 
                    inputProps: { 
                      min: 1, 
                      style: { textAlign: 'center', width: '30px' } 
                    }
                  }}
                  sx={{ 
                    mx: 1, 
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 0
                    }
                  }}
                />
                <IconButton 
                  size="small"
                  onClick={() => handleQuantityChange(quantity + 1)}
                  sx={{ border: 1, borderColor: 'divider' }}
                >
                  <AddIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
            
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 4 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleAddToCart}
                fullWidth
                sx={{ fontWeight: 600, py: 1.5 }}
              >
                Add to Cart
              </Button>
              
              <Button
                variant="outlined"
                color="primary"
                size="large"
                component={RouterLink}
                to="/cart"
                fullWidth
                sx={{ 
                  fontWeight: 600, 
                  py: 1.5,
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2
                  }
                }}
              >
                View Cart
              </Button>
            </Box>
            
            <Box sx={{ bgcolor: 'secondary.light', p: 2, borderRadius: 1 }}>
              <Typography variant="body2">
                Free shipping on all orders over ₹2000. Easy returns within 30 days.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      
      <Box sx={{ mt: 6 }}>
        <Paper elevation={0} sx={{ borderRadius: 2, border: 1, borderColor: 'divider' }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange}
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
              '& .MuiTab-root': {
                fontWeight: 600,
                py: 2
              }
            }}
          >
            <Tab label="Description" />
            <Tab label="Ingredients" />
            <Tab label="How to Use" />
          </Tabs>
          
          <TabPanel value={tabValue} index={0}>
            <Typography variant="body1">
              {product.description} Our {product.name} is formulated with high-quality ingredients that work together to provide exceptional results. This product is suitable for all skin types and has been dermatologically tested for safety.
            </Typography>
          </TabPanel>
          
          <TabPanel value={tabValue} index={1}>
            <Typography variant="body1">
              Water/Aqua/Eau, Glycerin, Dimethicone, Cetyl Alcohol, Butylene Glycol, Niacinamide, Pentylene Glycol, Hyaluronic Acid, Tocopherol (Vitamin E), Panthenol, Sodium Hyaluronate, Sodium PCA, Aloe Barbadensis Leaf Juice, Camellia Sinensis Leaf Extract, Chamomilla Recutita (Matricaria) Flower Extract.
            </Typography>
          </TabPanel>
          
          <TabPanel value={tabValue} index={2}>
            <Typography variant="body1">
              Apply to clean, dry skin. Use morning and evening as part of your regular skincare routine. Dispense a small amount onto fingertips and gently massage into skin using upward circular motions until fully absorbed. For best results, follow with moisturizer.
            </Typography>
          </TabPanel>
        </Paper>
      </Box>
      
      {relatedProducts.length > 0 && (
        <Box sx={{ mt: 8 }}>
          <Typography 
            variant="h5" 
            component="h2" 
            sx={{ 
              mb: 4, 
              fontWeight: 600,
              fontFamily: '"Cormorant Garamond", serif',
              textAlign: 'center'
            }}
          >
            You Might Also Like
          </Typography>
          
          <Grid container spacing={3}>
            {relatedProducts.map((product) => (
              <Grid item key={product.id} xs={6} sm={6} md={3}>
                <Box 
                  sx={{ 
                    cursor: 'pointer',
                    textAlign: 'center' 
                  }}
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <Box
                    component="img"
                    src={product.image || "/images/placeholder.jpg"}
                    alt={product.name}
                    sx={{
                      width: '50%',
                      height: '50%',
                      mb: 1,
                      borderRadius: 2,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)'
                      },
                      bgcolor: 'secondary.light'
                    }}
                  />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="primary.main" fontWeight={600}>
                  ₹{product.price.toFixed(2)}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      
      <Snackbar
        open={notification.open}
        autoHideDuration={3000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseNotification} 
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ProductDetailsPage;