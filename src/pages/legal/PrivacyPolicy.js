import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography 
        variant="h3" 
        component="h1" 
        sx={{ 
          fontWeight: 700, 
          mb: 2,
          color: 'primary.main'
        }}
      >
        Privacy Policy
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
        Last updated: April 2025
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <Box sx={{ mb: 4 }}>
        <Typography variant="body1" sx={{ mb: 4 }}>
          At Liora Cosmetics, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
          1. Collection of Your Information
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          We may collect information about you in a variety of ways. The information we may collect on the Site includes:
        </Typography>
        <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
          Personal Data
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards. You are under no obligation to provide us with personal information of any kind, however your refusal to do so may prevent you from using certain features of the Site.
        </Typography>
        <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
          Derivative Data
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
          2. Use of Your Information
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
        </Typography>
        <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
          <li>Create and manage your account.</li>
          <li>Process your orders and payments.</li>
          <li>Email you regarding your account or order.</li>
          <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
          <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site to you.</li>
          <li>Enable user-to-user communications.</li>
          <li>Increase the efficiency and operation of the Site.</li>
          <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
          <li>Notify you of updates to the Site.</li>
          <li>Perform other business activities as needed.</li>
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
          3. Disclosure of Your Information
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
        </Typography>
        <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
          By Law or to Protect Rights
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
        </Typography>
        <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
          Third-Party Service Providers
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
          4. Security of Your Information
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
          5. Contact Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          If you have questions or comments about this Privacy Policy, please contact us at:
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          Liora Cosmetics<br/>
          Email: privacy@lioracosmetics.com<br/>
          Phone:(+91) 22 1234 5678
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;