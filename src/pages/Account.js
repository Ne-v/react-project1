import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Card, CardContent, Avatar } from '@mui/material';

const Account = () => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const loggedInEmail = localStorage.getItem('loggedInUser');
    
    const currentUser = users.find(u => u.email === loggedInEmail);

    if (currentUser) {
      const name = `${currentUser.firstName} ${currentUser.lastName}`;
      const email = currentUser.email;
      setUser({ name, email });
    } else {
      setUser({ name: 'Guest User', email: 'Not Provided' });
    }
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Card sx={{ p: 4, textAlign: 'center', boxShadow: 3 }}>
        <Avatar sx={{ width: 80, height: 80, margin: '0 auto', bgcolor: 'primary.main', fontSize: 32 }}>
          {user.name.charAt(0)}
        </Avatar>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {user.name}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {user.email}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Account;
