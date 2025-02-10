    import React from 'react';
    import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
    import { styled } from '@mui/material/styles';

    const StyledCard = styled(Card)({
    maxWidth: 280,
    margin: '16px',
    borderRadius: '16px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    });

    const SingleCard = ({ image, name, role }) => {
    return (
        <StyledCard>
        <CardMedia
            component="img"
            height="280"
            image={image}
            alt={name}
            sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ textAlign: 'center', py: 2 }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {role}
            </Typography>
        </CardContent>
        </StyledCard>
    );
    };

    export default SingleCard;