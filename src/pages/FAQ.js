import React from 'react';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
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
        Frequently Asked Questions
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
        Find answers to common questions about our products, orders, and more
      </Typography>
      <Divider sx={{ mb: 6 }} />

      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
          Product Information
        </Typography>
        
        <Accordion sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography fontWeight={500}>Are your products cruelty-free?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, all Liora Cosmetics products are 100% cruelty-free. We never test on animals and we don't work with suppliers or third parties who test on animals. We are proud to be certified by Leaping Bunny and PETA as a cruelty-free brand.
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography fontWeight={500}>Are your products vegan?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Most of our products are vegan. We clearly label all vegan products on our website and packaging with our vegan icon. We are working toward making our entire line vegan and expect to complete this transition by the end of the year.
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography fontWeight={500}>What ingredients do you avoid in your formulations?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We are committed to clean beauty and formulate without parabens, phthalates, sulfates, mineral oils, formaldehyde, and artificial fragrances. We believe in transparent labeling and list all ingredients on our product pages and packaging.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
          Orders & Shipping
        </Typography>
        
        <Accordion sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography fontWeight={500}>How long does shipping take?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Standard shipping typically takes 3-5 business days within the continental US. Express shipping (1-2 business days) is available for an additional fee. International shipping times vary by location but generally take 7-14 business days.
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography fontWeight={500}>Do you offer free shipping?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes! We offer free standard shipping on all US orders over $50. International orders over $100 qualify for free standard international shipping.
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6a-content"
            id="panel6a-header"
          >
            <Typography fontWeight={500}>How can I track my order?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Once your order ships, you'll receive a confirmation email with a tracking number. You can also log into your account on our website and view your order status and tracking information there.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
          Returns & Refunds
        </Typography>
        
        <Accordion sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7a-content"
            id="panel7a-header"
          >
            <Typography fontWeight={500}>What is your return policy?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We offer a 30-day return policy for unused items in their original packaging. For hygiene reasons, we cannot accept returns on opened cosmetics unless they are defective or damaged upon arrival.
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8a-content"
            id="panel8a-header"
          >
            <Typography fontWeight={500}>How do I initiate a return?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To initiate a return, please log into your account and select the order you wish to return. Click on "Return Items" and follow the instructions. You can also contact our customer service team at support@lioracosmetics.com for assistance.
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel9a-content"
            id="panel9a-header"
          >
            <Typography fontWeight={500}>How long does it take to process a refund?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Once we receive your returned items, it typically takes 3-5 business days to process your refund. The refund will be issued to your original payment method. Please note that it may take an additional 3-7 business days for the refund to appear on your statement, depending on your bank or credit card company.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Still have questions? We're here to help! Contact our customer service team:
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          Email: support@lioracosmetics.com<br/>
          Phone: (+91) 22 1234 5678<br/>
          Hours: Monday-Friday, 9am-6pm IST
        </Typography>
      </Box>
    </Container>
  );
};

export default FAQ;