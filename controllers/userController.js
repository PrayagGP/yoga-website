//mvcmodel\controllers\userController.js
const mongoose= require('mongoose');
const upload = require('../middleware/upload.js');
const express=require("express");
const {User, Event,Merch}=require('../models/model.js');
//const { User } = require('../models/model.js');
const getUsers= async(req,res)=>{
try{
    const users= await User.find({});
    if(!users)
       return res.status(404).send("No users found") ;
    return res.status(200).json(users);
}catch(err){
    
        console.error("Unable to find users",err);
        return res.status(500).send("Failed to fetch users");
}
};
const getUserById= async (req,res)=>{
    try{
        const user= await User.findById(req.params.id);
        if(!user)
            return res.status(404).send("Unable to find the user");
        return res.status(200).json(user);
    }catch(err){
            return res.status(500).json({error:err.message});
}};
const addUser= async (req,res) =>{
    try{
        const duplicateUser= await User.findOne({$or:[{email:req.body.email},{rollno: req.body.rollno} ]});
        if(duplicateUser)
            return res.status(400).send("User already exists");
        console.log("request body is", req.body);
        const newuser =req.body;
        if(req.file)
        {
            newuser.image={
                data:req.file.buffer,
                contentType : req.file.mimetype
            }
            console.log("received image is", req.file);
        }
        const user= await new User(newuser);
        if(!user)
            return res.status(500).send("failed to create user");
             await user.save();
                return res.status(201).send("User created Succcessfully");

    }catch(error){
        console.error("An error occured",error);
        return res.status(500).send("An error occured");
    }
};
const deleteUser= async (req,res)=>{
    try{const user= await User.findByIdAndDelete(req.params.id);
    if(!user){
        console.log("Cannot find user");
        return res.status(404).send("Cannot find user");
    }
        return res.status(200).send("User deleted successfully");
    } catch(error){
        console.error("Unable to delete",error);
        return res.status(500).send("An error occured ");
}};
const getUserImage= async (req,res) =>{
        try{
            const user= await User.findById(req.params.id);
            if(!user||!user.image)
                return res.status(404).send("Image not found");
                /*This was the error .No nedd to set header files as here
                If done it causes large header file
                res.setHeader('Content-Type',user.image.contentType);*/
                res.contentType(user.image.contentType);
                res.send(user.image.data);
        }catch(err){
                console.error("Failed to fetch image",err);
                return res.status(500).send("Failed to send image");
        }
};
const updateUser=async (req,res) =>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body);
        if(!user)
            return res.status(404).json({error:"No user found"});
        console.log("update request received is",req.body,"for user");
            return res.status(200).send("User updated successfully")
    } catch(err){
        return res.status(500).send("User cannot be updated");
    }
};
module.exports={getUsers ,addUser ,getUserById,deleteUser,getUserImage,updateUser};