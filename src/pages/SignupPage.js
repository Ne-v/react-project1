import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Stack, Checkbox, FormControlLabel, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!formData.agreeTerms) {
      alert('Please agree to the Terms and Conditions.');
      return;
    }

    const { fullName, email, password } = formData;
    

    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    
    
    if (existingUsers.some(user => user.email === email)) {
      alert('Email already registered!');
      return;
    }
    
    
    existingUsers.push({ fullName, email, password });
    
 
    localStorage.setItem('users', JSON.stringify(existingUsers));

    alert('Signup successful!');
    setFormData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false
    });
  };

  return (
    <Box sx={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default' }}>
      <Container maxWidth="xs">
        <Box sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600 }}>
            Sign Up
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                fullWidth
                required
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    color="primary"
                    required
                  />
                }
                label="I agree to the Terms & Conditions and Privacy Policy"
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Sign Up
              </Button>
            </Stack>
          </Box>

          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Already have an account?{' '}
            <Link component={RouterLink} to="/login" underline="hover">
              Login
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Signup;
