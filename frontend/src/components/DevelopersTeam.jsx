    import React from 'react';
    import { Container, Typography, Box } from '@mui/material';
    import SingleCard from './SingleCard';

    const DevelopersTeam = () => {
    const developers = [
        {
        name: 'VIKAS KUSHWAHA',
        role: 'CONVENOR',
        image: '/images/dev1.jpg'
        },
        {

        name: 'XYZ XYZ XYZ XYZ',
        role: 'CO-CONVENOR',
        image: '/images/dev2.jpg'
        },
        {
        name: 'ABC ABC ABC ABC',
        role: 'CO-CONVENOR',
        image: '/images/dev3.jpg'
        }
    ];

    return (
        <Container maxWidth="md" sx={{ pt: 4 ,pb:10}}>
        <Typography 
            variant="h4" 
            component="h1" 
            align="center" 
            sx={{ mb: 4, fontWeight: 'bold' }}
        >
            DEVELOPERS TEAM
        </Typography>

        <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            gap: 2
        }}>
            {developers.map((dev, index) => (
            <SingleCard
                key={index}
                name={dev.name}
                role={dev.role}
                image={dev.image}
            />
            ))}
        </Box>
        </Container>
    );
    };

    export default DevelopersTeam;