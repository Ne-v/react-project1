import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

const TermsAndConditions = () => {
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
        Terms and Conditions
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
        Last updated: April 2025
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
          1. Introduction
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Welcome to Liora Cosmetics. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the website.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
          2. Use License
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Permission is granted to temporarily download one copy of the materials on Liora Cosmetics' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </Typography>
        <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
          <li>Modify or copy the materials;</li>
          <li>Use the materials for any commercial purpose;</li>
          <li>Attempt to decompile or reverse engineer any software contained on Liora Cosmetics' website;</li>
          <li>Remove any copyright or other proprietary notations from the materials; or</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
          3. Disclaimer
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          The materials on Liora Cosmetics' website are provided on an 'as is' basis. Liora Cosmetics makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
          4. Limitations
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          In no event shall Liora Cosmetics or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Liora Cosmetics' website, even if Liora Cosmetics or a Liora Cosmetics authorized representative has been notified orally or in writing of the possibility of such damage.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
          5. Accuracy of Materials
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          The materials appearing on Liora Cosmetics' website could include technical, typographical, or photographic errors. Liora Cosmetics does not warrant that any of the materials on its website are accurate, complete or current. Liora Cosmetics may make changes to the materials contained on its website at any time without notice. However Liora Cosmetics does not make any commitment to update the materials.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
          6. Links
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Liora Cosmetics has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Liora Cosmetics of the site. Use of any such linked website is at the user's own risk.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
          7. Modifications
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Liora Cosmetics may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
          8. Governing Law
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsAndConditions;