import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  IconButton,
  Divider,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { 
  Add as AddIcon, 
  Remove as RemoveIcon, 
  Delete as DeleteIcon,
  CreditCard as CreditCardIcon,
  AccountBalance as BankIcon,
  Wallet as WalletIcon
} from '@mui/icons-material';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCheckout = () => {
    clearCart();
    navigate('/order-success');
  };
  
  if (cart.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ 
        py: 8, 
        minHeight: '60vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <Box sx={{ textAlign: 'center', maxWidth: 500 }}>
          <Typography variant="h4" component="h1" sx={{ mb: 3, fontWeight: 600 }}>
            Your Cart is Empty
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Looks like you haven't added any products to your cart yet.
          </Typography>
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
      </Container>
    );
  }
  
  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Typography 
        variant="h4" 
        component="h1" 
        sx={{ 
          mb: 4, 
          fontWeight: 600,
          fontFamily: '"Cormorant Garamond", serif',
          textAlign: 'center' 
        }}
      >
        Your Shopping Cart
      </Typography>
      
      <Grid container justifyContent="center" spacing={4}>
        <Grid item xs={12} md={7} lg={6}>
          <TableContainer 
            component={Paper} 
            sx={{ 
              borderRadius: 2, 
              boxShadow: theme.shadows[1],
              border: '1px solid',
              borderColor: 'divider',
              mx: 'auto',
              maxWidth: 800
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Product</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 600 }}>Price</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>Quantity</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 600 }}>Total</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box
                          component="img"
                          src={item.image || "/images/placeholder.jpg"}
                          alt={item.name}
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: 1,
                            mr: 2,
                            objectFit: 'contain',
                            bgcolor: 'background.paper'
                          }}
                        />
                        <Typography variant="subtitle2">{item.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="right">₹{item.price.toFixed(2)}</TableCell>
                    <TableCell align="center">
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <IconButton 
                          size="small"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <RemoveIcon fontSize="small" />
                        </IconButton>
                        <TextField
                          size="small"
                          value={item.quantity}
                          onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (!isNaN(value)) {
                              handleQuantityChange(item.id, value);
                            }
                          }}
                          InputProps={{ 
                            inputProps: { min: 1, style: { textAlign: 'center' } }
                          }}
                          sx={{ width: 40, mx: 1 }}
                        />
                        <IconButton 
                          size="small"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          <AddIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="subtitle2" fontWeight={600}>
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton 
                        color="error" 
                        size="small" 
                        onClick={() => removeFromCart(item.id)}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            mt: 3,
            maxWidth: 800,
            mx: 'auto'
          }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => navigate('/')}
              sx={{ fontWeight: 500 }}
            >
              Continue Shopping
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={clearCart}
              sx={{ fontWeight: 500 }}
            >
              Clear Cart
            </Button>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={5} lg={4}>
          <Card sx={{ 
            borderRadius: 2, 
            boxShadow: theme.shadows[1],
            maxWidth: 400,
            mx: 'auto'
          }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Order Summary
              </Typography>
              
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                  <Typography variant="body1">Subtotal</Typography>
                  <Typography variant="body1" fontWeight={500}>₹{cartTotal.toFixed(2)}</Typography>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                  <Typography variant="body1">Shipping</Typography>
                  <Typography variant="body1" fontWeight={500}>Free</Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                  <Typography variant="body1">Tax</Typography>
                  <Typography variant="body1" fontWeight={500}>₹{(cartTotal * 0.18).toFixed(2)}</Typography>
                </Box>
              </Box>
              <Divider sx={{ my: 2 }} />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h6">Total</Typography>
                <Typography variant="h6" fontWeight={700} color="primary.main">
                  ₹{(cartTotal * 1.18).toFixed(2)}
                </Typography>
              </Box>

              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                Payment Method
              </Typography>
              
              <FormControl component="fieldset" sx={{ width: '100%', mb: 3 }}>
                <RadioGroup
                  name="payment-method"
                  value={paymentMethod}
                  onChange={handlePaymentMethodChange}
                >
                  <Paper elevation={0} sx={{ 
                    mb: 1.5, 
                    borderRadius: 1, 
                    border: '1px solid', 
                    borderColor: paymentMethod === 'credit_card' ? 'primary.main' : 'divider',
                    transition: 'border-color 0.2s ease'
                  }}>
                    <FormControlLabel 
                      value="credit_card" 
                      control={<Radio />} 
                      label={
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <CreditCardIcon sx={{ 
                            mr: 1.5, 
                            color: paymentMethod === 'credit_card' ? 'primary.main' : 'action.active' 
                          }} />
                          <Typography>Credit/Debit Card</Typography>
                        </Box>
                      }
                      sx={{ 
                        width: '100%', 
                        m: 0, 
                        p: 1.5,
                      }}
                    />
                  </Paper>
                  
                  <Paper elevation={0} sx={{ 
                    mb: 1.5, 
                    borderRadius: 1, 
                    border: '1px solid', 
                    borderColor: paymentMethod === 'upi' ? 'primary.main' : 'divider',
                    transition: 'border-color 0.2s ease'
                  }}>
                    <FormControlLabel 
                      value="upi" 
                      control={<Radio />} 
                      label={
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <WalletIcon sx={{ 
                            mr: 1.5, 
                            color: paymentMethod === 'upi' ? 'primary.main' : 'action.active' 
                          }} />
                          <Typography>UPI / Mobile Wallets</Typography>
                        </Box>
                      }
                      sx={{ 
                        width: '100%', 
                        m: 0, 
                        p: 1.5
                      }}
                    />
                  </Paper>
                  
                  <Paper elevation={0} sx={{ 
                    borderRadius: 1, 
                    border: '1px solid', 
                    borderColor: paymentMethod === 'net_banking' ? 'primary.main' : 'divider',
                    transition: 'border-color 0.2s ease'
                  }}>
                    <FormControlLabel 
                      value="net_banking" 
                      control={<Radio />} 
                      label={
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <BankIcon sx={{ 
                            mr: 1.5, 
                            color: paymentMethod === 'net_banking' ? 'primary.main' : 'action.active' 
                          }} />
                          <Typography>Net Banking</Typography>
                        </Box>
                      }
                      sx={{ 
                        width: '100%', 
                        m: 0, 
                        p: 1.5 
                      }}
                    />
                  </Paper>
                </RadioGroup>
              </FormControl>
              
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                onClick={handleCheckout}
                sx={{ 
                  fontWeight: 600,
                  py: 1.5,
                  mb: 2
                }}
              >
                Pay ₹{(cartTotal * 1.18).toFixed(2)}
              </Button>
              
              <Box sx={{ 
                mt: 2, 
                p: 2, 
                bgcolor: 'background.default', 
                borderRadius: 1,
                border: '1px solid',
                borderColor: 'divider'
              }}>
                <Typography variant="body2" color="text.secondary">
                  <Box component="span" sx={{ fontWeight: 500 }}>Secure checkout:</Box> Your payment information is encrypted and protected.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartPage;