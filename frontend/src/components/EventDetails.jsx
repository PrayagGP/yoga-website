    import React from 'react';
    import { Box, Typography, Container, Paper, Button,Card,CardMedia,CardContent,Divider} from '@mui/material';
    import { Calendar, Clock, MapPin, Phone } from 'lucide-react';
    import { styled } from '@mui/material/styles';

    // Styled components
    const StyledButton = styled(Button)({
    backgroundColor: '#8b4513',
    color: 'white',
    padding: '12px 24px',
    '&:hover': {
        backgroundColor: '#693610',
    },
    width: '100%',
    marginTop: '20px',
    });

    const EventDetails = () => {
    return (
        <Container maxWidth="md" sx={{ pt: 4,pb: 10 }}>
        <Card elevation={2}>
            <CardMedia
            component="img"
            height="240"
            image="/images/beach-yoga.jpg"
            alt="Beach Yoga Session"



            />
            
            <CardContent>
            <Typography variant="h5" component="h1" gutterBottom align="center" 
                sx={{ fontWeight: 'bold' }}>
                Name of the Event
            </Typography>

            <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                About the Event:
                </Typography>
                <Typography variant="body1" color="text.secondary">
                A yoga beach event offers the perfect blend of tranquility 
                and energy, set against the soothing backdrop of sun 
                kissed waves and soft sands. Imagine starting 
                your morning with a gentle flow as the ocean sun rises 
                over the horizon. The air with sea breeze refreshes you. 
                Participants can connect with nature, moving through 
                poses that ground and rejuvenate, while the rhythmic 
                sound of the ocean enhances the meditative experience.
                </Typography>
            </Box>

            <Paper elevation={0} sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Calendar size={20} />
                <Typography variant="body1" sx={{ ml: 1 }}>
                    <strong>Date:</strong> 10/12/2024
                </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Clock size={20} />
                <Typography variant="body1" sx={{ ml: 1 }}>
                    <strong>Timings:</strong> 6:00 pm - 11:00 pm
                </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <MapPin size={20} />
                <Typography variant="body1" sx={{ ml: 1 }}>
                    <strong>Venue:</strong> Yoga Hall, NSC
                </Typography>
                </Box>
            </Paper>

            <Box sx={{ mt: 3 }}>
                <Typography variant="h6" gutterBottom>
                POCs:
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Phone size={18} />
                <Typography variant="body1" sx={{ ml: 1 }}>
                    Vikas: 9594939393939
                </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Phone size={18} />
                <Typography variant="body1" sx={{ ml: 1 }}>
                    Khushi: 9594939393939
                </Typography>
                </Box>
            </Box>

            <StyledButton variant="contained" fullWidth>
                Register Now
            </StyledButton>
            </CardContent>
        </Card>
        </Container>
    );
    };

    export default EventDetails;