//mvcmodel\controllers\authController.js
const bcrypt=require('bcrypt');
const jwt =require("jsonwebtoken");
const path=require('path');
const fs= require('fs');
const {User}= require('../models/model.js');
require('dotenv').config();
const authoriseAccess= async (req,res)=>{

    // fs.readFile(path.join(__dirname,'views','login.html'),'utf-8',(err,data)=>{
    //     if(err){
    //         return res.status(500).send("Error loading page");
    //     }
    // });
    try{
        console.log("Request received by server is ", req.body);
        const user = await User.findOne({$or :[{email:req.body.email},{rollno:req.body.email}]});
        if(!user)
            return res.status(404).send('Account does not exist');
        const match =await bcrypt.compare(req.body.password , user.password)  ;
           
    if(!match){
        console.log("Password does not match");
        return res.status(400).send("Wrong password enterred");
    }
        const token = jwt.sign({id:user.id}, process.env.TOKEN ,{expiresIn :'1h'});
        console.log("Successfuly logged in");
        return res.json({token,user:{id:user._id, email:user.email},ok:true});
    } catch(error) {
        console.log("error experienced while logging in is",error);
            res.status(500).json({message: "An error occurred",error:error.meassage});
    }
};

const register= async (req,res)=>{
    console.log("Request received is" , req.body);
    try{
        const email= req.body.email;
    const password= req.body.password;
    const rollno =req.body.rollno;
        const user = await User.findOne({$or:[{email:req.body.email},{rollno:req.body.rollno}]});
        if(user)
            return res.status(400).send("user already exists");
            const salt =await bcrypt.genSalt(10);
            
            const hashedPassword =await bcrypt.hash(password,salt);
            req.body.password=hashedPassword;
            const newUser = new User(req.body);
            await newUser.save();
            //return res.redirect('/login');
            console.log("User created successfully");
            return res.status(201).json({message:'Admin User created successfilly',ok:true});
    } catch(err){
            console.error("Error experienced while registering:",err);
            return res.status(500).send("Failed to create admin user");
    }
};
module.exports= {authoriseAccess,register};