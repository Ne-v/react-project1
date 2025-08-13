import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { resetPassword } = useAuth();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Email is required');
      return;
    }
    
    try {
      await resetPassword(email);
      setSuccess(true);
    } catch (err) {
      setError('Failed to reset password. Please try again.');
    }
  };
  
  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', p: 3 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Forgot Password?
      </Typography>
      <Typography align="center" sx={{ mb: 3 }}>
        Enter your email to receive a reset link
      </Typography>
      
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      
      {success ? (
        <>
          <Alert severity="success" sx={{ mb: 2 }}>
            Password reset email sent!
          </Alert>
          <Button 
            fullWidth 
            component={RouterLink} 
            to="/login"
            variant="outlined"
          >
            Back to Login
          </Button>
        </>
      ) : (
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button 
            fullWidth 
            type="submit" 
            variant="contained"
            sx={{ mb: 2 }}
          >
            Send Reset Link
          </Button>
          <Button 
            fullWidth 
            component={RouterLink} 
            to="/login"
          >
            Back to Login
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ForgotPasswordPage;