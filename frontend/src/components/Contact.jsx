import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper, Box } from '@mui/material';
import { Instagram, Mail, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
const [formData, setFormData] = useState({
    name: '',
    email: '',
    rollNo: '',
    query: ''
});

const handleChange = (e) => {
    setFormData({
    ...formData,
    [e.target.name]: e.target.value
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
};

return (
    <Container maxWidth="md" sx={{ 
        pb: 10, 
        px: { xs: 2, sm: 3, md: 4 } 
    }}>
    <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
        Contact Us
        </Typography>
    </Box>

    <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
            />
            
            <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
            />
            
            <TextField
            label="Roll Number"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
            />
            
            <TextField
            label="Query"
            name="query"
            value={formData.query}
            onChange={handleChange}
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            required
            />
            
            <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            size="large"
            sx={{ 
                bgcolor: '#8B4513',
                '&:hover': {
                bgcolor: '#6B3410'
                }
            }}
            >
            Submit
            </Button>
        </Box>
        </form>
    </Paper>

    <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
        Other Platforms
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Instagram size={24} />
            <Typography>
            yogaclubnitk
            </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Mail size={24} />
            <Typography>
            yogaclub@nitk.edu.in
            </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Phone size={24} />
            <Typography>
            +91 9876543210
            </Typography>
        </Box>
        </Box>
    </Paper>
    </Container>
);
};

export default Contact;