import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Breadcrumbs,
  Link,
  Pagination,
  Paper
} from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState('popularity');
  const [page, setPage] = useState(1);
  const productsPerPage = 8;
  
  useEffect(() => {
    let filtered = [...products];
    
    // Filter by category if provided
    if (categoryName && categoryName !== 'all') {
      if (categoryName === 'bestsellers') {
        filtered = filtered.filter(product => product.tags && product.tags.includes('bestseller'));
      } else if (categoryName === 'new') {
        filtered = filtered.filter(product => product.tags && product.tags.includes('new'));
      } else if (categoryName === 'summer') {
        filtered = filtered.filter(product => product.tags && product.tags.includes('summer'));
      } else {
        filtered = filtered.filter(
          product => product.category.toLowerCase() === categoryName.toLowerCase()
        );
      }
    }
    
    // Sort products
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      // Default: sort by popularity (rating)
      filtered.sort((a, b) => b.rating - a.rating);
    }
    
    setFilteredProducts(filtered);
    setPage(1); // Reset to first page when filters change
  }, [categoryName, sortBy]);
  
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };
  
  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const displayedProducts = filteredProducts.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );
  
  // Format category name for display
  const formatCategoryName = (name) => {
    if (!name) return 'All Products';
    
    if (name === 'bestsellers') return 'Bestsellers';
    if (name === 'new') return 'New Arrivals';
    if (name === 'summer') return 'Summer Essentials';
    
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  
  return (
    <Container sx={{ py: 6 }}>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link component={RouterLink} to="/" color="inherit" underline="hover">
          Home
        </Link>
        <Typography color="text.primary">
          {formatCategoryName(categoryName)}
        </Typography>
      </Breadcrumbs>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography 
          variant="h4" 
          component="h1" 
          sx={{ 
            fontWeight: 600,
            fontFamily: '"Cormorant Garamond", serif',
          }}
        >
          {formatCategoryName(categoryName)}
        </Typography>
        
        <FormControl size="small" sx={{ minWidth: 200 }}>
          <InputLabel id="sort-select-label">Sort By</InputLabel>
          <Select
            labelId="sort-select-label"
            id="sort-select"
            value={sortBy}
            label="Sort By"
            onChange={handleSortChange}
          >
            <MenuItem value="popularity">Popularity</MenuItem>
            <MenuItem value="price-low">Price: Low to High</MenuItem>
            <MenuItem value="price-high">Price: High to Low</MenuItem>
            <MenuItem value="name">Name</MenuItem>
          </Select>
        </FormControl>
      </Box>
      
      {filteredProducts.length === 0 ? (
        <Paper sx={{ p: 4, textAlign: 'center', borderRadius: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            No products found
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Try changing your filters or check back later for new products.
          </Typography>
        </Paper>
      ) : (
        <>
          <Grid container spacing={3}>
            {displayedProducts.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={3}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
          
          {totalPages > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
              <Pagination 
                count={totalPages} 
                page={page} 
                onChange={handlePageChange} 
                color="primary"
                size="large"
              />
            </Box>
          )}
        </>
      )}
    </Container>
  );
};

export default CategoryPage;
