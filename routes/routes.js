//mvcmodel\routes\routes.js
const mongoose= require('mongoose');
const path= require('path');
//const multer=require('multer');
const express=require("express");
const cors=require('cors');
//Middleware upload

const upload= require('../middleware/upload.js');
//Importing controllers
const userController= require('../controllers/userController.js');

const eventController =require('../controllers/eventController.js');

const merchController=require('../controllers/merchController.js');
//Routes begin
const apiUrl="mongodb://localhost:27017/images";

const Route = express();

Route.use(express.static(path.join(__dirname,'../views')));

Route.use(cors());

Route.post('/users',upload.single('image'),userController.addUser);

Route.get('/users',userController.getUsers);

Route.get('/user/:id',userController.getUserById);

Route.get('/user/image/:id',userController.getUserImage);

Route.delete('/users/:id',userController.deleteUser);

Route.post('/events',upload.single('image'),eventController.addEvent);

Route.get('/events',eventController.getEvents);

Route.get('/event/:id',eventController.getEventById);

Route.get('/event/image/:id',eventController.getEventImage);

Route.delete('/events/:id',eventController.deleteEvent);

Route.post('/merchs',upload.single('image'),merchController.addMerch);

Route.get('/merchs', merchController.getMerchs);

Route.get('/merch/:id',merchController.getMerchById);

Route.get('/merch/image/:id',merchController.getMerchImage);

Route.delete('/merchs/:id',merchController.deleteMerch);
module.exports = Route;