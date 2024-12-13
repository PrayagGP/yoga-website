//mvcmodel\controllers\merchController.js
const mongoose= require('mongoose');
const express=require('express');
const {Merch} = require('../models/model.js');

const getMerchs= async (req,res)=>{
    try{
    const merchs = await Merch.find({});
    if(!merchs)
        return res.status(404).send("No merch found");
        return res.status(200).send(merchs);

    } catch (error){
            console.error("An error occured while retrieving merchs",error);
            return res.status(500).send("cannot retrieve merchs");

    }
};
const getMerchById = async (req,res)=> {
    try{
        const merch = await Merch.findById(req.params.id);
        if(!merch)
            return res.status(404).send("No merch found for given id");
            return res.status(200).send(merch);
    }catch(error)
    {
        console.log("Error occured" , error);
        return res.status(500).send("Cannot retrieve merch");
    }
};

const addMerch = async (req,res) => {
    try{
            const duplicatemerch= await Merch.findOne({name:req.body.name});
            if(duplicatemerch)
                return res.status(400).send("Merch of same name already exists");
        const merch = req.body;
        if(req.file)
            {
                 merch.image={
                        data : req.file.buffer,
                        contentType: req.file.mimetype
                };
        }
            const newmerch = new Merch(merch);
            await newmerch.save();
            return res.status(201).send("Successfully created new merch");

    }catch(err){
        console.error("Cannot add the merch ",err);
        return res.status(500).send("Cannot add Merch");
    }
};
const deleteMerch= async (req,res)=> {
    try{
        const merch = await Merch.findByIdAndDelete(req.params.id);
        if(!merch)
        {
            console.error("Cannot find merch ");
            return res.status(404).send("Could not find merch");
        }
            return res.status(200).send("Merch deleted successfully");

    }catch(err){
        console.error("Cannot delete merch");
        return res.status(500).send("Cannot delete merch");
    }
};
const getMerchImage= async (req,res) => {
     try {
            const merch = await Merch.findById(req.params.id);
            if(!merch||!merch.image)
                return res.status(404).send("no merch image found");
                res.contentType(merch.image.contentType);
                res.send(merch.image.data);

     } catch (err) {
            console.error("Could not get merch image");
            return res.status(500).send("could not get image");
     }
};
const updateMerch = async (req,res) => {
    try{
        const merch = await Merch.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).send("Merch updated successfully");
    } catch(err){
        console.error("error received while updating merch is ", err);
        return res.status(500).send("Merch cannot be updated due to error");
    }
};
module.exports= {
    getMerchs, getMerchById,addMerch,deleteMerch, getMerchImage , updateMerch};