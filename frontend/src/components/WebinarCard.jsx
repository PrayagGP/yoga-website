import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { CircleDot } from 'lucide-react';

const WebinarCard = ({ title, status, image }) => {
  const isLive = status === 'live';

  return (
    <Card
      sx={{
        position: 'relative',
        borderRadius: 3,
        overflow: 'hidden',
        height: '300px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }
        }}
      />
      <CardContent
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Typography 
          variant="h5" 
          component="h2" 
          sx={{ 
            color: 'white',
            mb: 2,
            textAlign: 'center'
          }}
        >
          {title}
        </Typography>
        <Button
          variant="contained"
          startIcon={isLive ? <CircleDot size={16} /> : null}
          sx={{
            backgroundColor: isLive ? '#f4a261' : '#8b4513',
            '&:hover': {
              backgroundColor: isLive ? '#e76f51' : '#704214',
            },
            borderRadius: 28,
            px: 4,
            py: 1,
          }}
        >
          {isLive ? 'Live now' : 'Completed'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default WebinarCard;