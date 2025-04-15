import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import WebinarCard from './WebinarCard';

const webinarsData = [
  {
    id: 1,
    title: '1st webinar',
    status: 'live',
    image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5'
  },
  {
    id: 2,
    title: '1st webinar',
    status: 'live',
    image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5'
  },
  {
    id: 3,
    title: '1st webinar',
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5'
  }
];

const Webinars = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography 
        variant="h2" 
        component="h1" 
        align="center" 
        sx={{ mb: 6 }}
      >
        WEBINARS
      </Typography>
      
      <Grid container spacing={4}>
        {webinarsData.map((webinar) => (
          <Grid item xs={12} sm={6} md={4} key={webinar.id}>
            <WebinarCard {...webinar} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Webinars;