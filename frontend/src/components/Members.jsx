import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import SingleCard from './SingleCard';

const Members = () => {
    const [searchParams] = useSearchParams();
    const teamType = searchParams.get('team') || 'core';

    const teamMembers = {
        core: [
            {
                name: 'VIKAS KUSHWAHA',
                role: 'CONVENOR',
                image: '/images/dev1.jpg'
            },
            {
                name: 'XYZ XYZ XYZ XYZ',
                role: 'CO-CONVENOR',
                image: '/images/dev2.jpg'
            }
        ],
        developers: [
            {
                name: 'ABC ABC ABC ABC',
                role: 'DEVELOPER',
                image: '/images/dev3.jpg'
            }
        ],
        internit: [
            {
                name: 'PQR PQR PQR PQR',
                role: 'COORDINATOR',
                image: '/images/dev4.jpg'
            }
        ]
    };

    const getTitle = () => {
        switch(teamType) {
            case 'developers':
                return 'DEVELOPERS TEAM';
            case 'internit':
                return 'INTER NIT TEAM';
            default:
                return 'CORE TEAM';
        }
    };

    const currentTeam = teamMembers[teamType] || teamMembers.core;

    return (
        <Container maxWidth="md" sx={{ pt: 4, pb: 10 }}>
            <Typography 
                variant="h4" 
                component="h1" 
                align="center" 
                sx={{ mb: 4, fontWeight: 'bold' }}
            >
                {getTitle()}
            </Typography>

            <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center',
                gap: 2
            }}>
                {currentTeam.map((member, index) => (
                    <SingleCard
                        key={index}
                        name={member.name}
                        role={member.role}
                        image={member.image}
                    />
                ))}
            </Box>
        </Container>
    );
};

export default Members;