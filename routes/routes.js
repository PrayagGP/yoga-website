<<<<<<< HEAD
//mvcmodel\routes\routes.js
const mongoose= require('mongoose');
const path= require('path');
//const multer=require('multer');
const express=require("express");
const cors=require('cors');
const fs = require('fs');
//Middleware upload

const upload= require('../middleware/upload.js');

const authenticate= require('../middleware/authenticate.js');
//Importing controllers
const userController= require('../controllers/userController.js');

const eventController =require('../controllers/eventController.js');

const merchController=require('../controllers/merchController.js');

const authController=require('../controllers/authController.js');


//Routes begin
const apiUrl="mongodb://localhost:27017/images";

const Route = express();

//Route.use(express.static(path.join(__dirname,'../views')));

Route.use(cors({
    origin:'*',methods:['GET','POST','PUT','DELETE','UPDATE','PATCH'], allowedHeaders:['Content-Type','Authorization']
}));

Route.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'../views','index.html'));
});

Route.post('/login',authController.authoriseAccess);

Route.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views','login.html'));
});

Route.post('/register',upload.none(),authController.register);

Route.get('/register',(req,res) =>{
    res.sendFile(path.join(__dirname,'../views','register.html'));});



//Route.post('/register',authController.register);

Route.post('/users',authenticate ,upload.single('image'),userController.addUser);

Route.get('/users',authenticate ,userController.getUsers);

Route.get('/user/:id',authenticate,userController.getUserById);

Route.get('/user/image/:id',userController.getUserImage);

Route.put('/user/:id',userController.updateUser);

Route.delete('/users/:id' ,authenticate,userController.deleteUser);

Route.post('/events', authenticate , upload.single('image'),eventController.addEvent);

Route.get('/events',authenticate ,eventController.getEvents);

Route.get('/event/:id',authenticate ,eventController.getEventById);

Route.get('/event/image/:id' ,eventController.getEventImage);

Route.put('/event/:id',eventController.updateEvent);

Route.delete('/events/:id',authenticate ,eventController.deleteEvent);

Route.post('/merchs',authenticate ,upload.single('image'),merchController.addMerch);

Route.get('/merchs', authenticate ,merchController.getMerchs);

Route.get('/merch/:id',authenticate ,merchController.getMerchById);

Route.get('/merch/image/:id' ,merchController.getMerchImage);

Route.put('/merch/:id',merchController.updateMerch);

Route.delete('/merchs/:id',authenticate ,merchController.deleteMerch);

//contact page routes
Route.post('/api/contact', async (req, res) => {
    try {
        const { name, email, rollNo, query } = req.body;
        // Add validation and email sending logic here
        res.status(200).json({ message: 'Message sent successfully' });
        } catch (error) {
        res.status(500).json({ error: 'Failed to send message' });
    }
});

=======
//mvcmodel\routes\routes.js
const mongoose= require('mongoose');
const path= require('path');
//const multer=require('multer');
const express=require("express");
const cors=require('cors');
const fs = require('fs');
//Middleware upload

const upload= require('../middleware/upload.js');

const authenticate= require('../middleware/authenticate.js');
//Importing controllers
const userController= require('../controllers/userController.js');

const eventController =require('../controllers/eventController.js');

const merchController=require('../controllers/merchController.js');

const authController=require('../controllers/authController.js');


//Routes begin
const apiUrl="mongodb://localhost:27017/images";

const Route = express();

//Route.use(express.static(path.join(__dirname,'../views')));

Route.use(cors({
    origin:'*',methods:['GET','POST','PUT','DELETE','UPDATE','PATCH'], allowedHeaders:['Content-Type','Authorization']
}));

Route.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'../views','index.html'));
});

Route.post('/login',authController.authoriseAccess);

Route.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views','login.html'));
});

Route.post('/register',upload.none(),authController.register);

Route.get('/register',(req,res) =>{
    res.sendFile(path.join(__dirname,'../views','register.html'));});



//Route.post('/register',authController.register);

Route.post('/users',authenticate ,upload.single('image'),userController.addUser);

Route.get('/users',authenticate ,userController.getUsers);

Route.get('/user/:id',authenticate,userController.getUserById);

Route.get('/user/image/:id',userController.getUserImage);

Route.put('/user/:id',userController.updateUser);

Route.delete('/users/:id' ,authenticate,userController.deleteUser);

Route.post('/events', authenticate , upload.single('image'),eventController.addEvent);

Route.get('/events',authenticate ,eventController.getEvents);

Route.get('/event/:id',authenticate ,eventController.getEventById);

Route.get('/event/image/:id' ,eventController.getEventImage);

Route.put('/event/:id',eventController.updateEvent);

Route.delete('/events/:id',authenticate ,eventController.deleteEvent);

Route.post('/merchs',authenticate ,upload.single('image'),merchController.addMerch);

Route.get('/merchs', authenticate ,merchController.getMerchs);

Route.get('/merch/:id',authenticate ,merchController.getMerchById);

Route.get('/merch/image/:id' ,merchController.getMerchImage);

Route.put('/merch/:id',merchController.updateMerch);

Route.delete('/merchs/:id',authenticate ,merchController.deleteMerch);

//contact page routes
Route.post('/api/contact', async (req, res) => {
    try {
        const { name, email, rollNo, query } = req.body;
        // Add validation and email sending logic here
        res.status(200).json({ message: 'Message sent successfully' });
        } catch (error) {
        res.status(500).json({ error: 'Failed to send message' });
    }
});

>>>>>>> 2013c7f895fbeb786f63f9a81d3c67a6cf249f89
module.exports = Route;