<<<<<<< HEAD
//mvcmodel\controllers\eventController.js
const mongoose=require('mongoose');
const express=require('express');
const {User, Merch , Event} =require('../models/model.js');
const upload= require('../middleware/upload.js');
const getEvents= async (req,res) => {
    try{
    const events= await Event.find({});
    if(!events)
        return res.status(404).send("no events found");
    return res.status(200).send(events);
    }catch (error) {
        console.error("An error occured while retreiving events",error);
        return res.status(500).send("Cannot get events");
    }
};
const getEventById = async (req,res) => {
    try{
        const event= await Event.findById(req.params.id);
        if(!event)
            return res.status(404).send("no such event");
        return res.statuss(200).send(event);
    } catch (error){
        return res.status(500).send("Cannot get the event");
    }
};
const addEvent= async (req,res) => {
    try {
        const duplicateEvent= await Event.findOne({name: req.body.name,});
        if(duplicateEvent)
        {
            console.error("Duplicate exists");
            return res.status(400).send("Event already exist");
        }
        const newevent = req.body;
        console.log("Received request is",req.body);
        if(req.file){
            newevent.image={
                data:req.file.buffer,
                contentType:req.file.mimetype,
            }
        }
        const event = new Event(newevent);
            await event.save();
            res.status(201).send('Successfully added event');
    } catch (error){
        res.status(500).send("An error occurred while uploading event ",error);

    }
};
const deleteEvent=async (req,res)=>{
    try{
            const item= await Event.findByIdAndDelete(req.params.id) ;
            if(!item)
            {
                console.log("EVent not found");
                return res.status(404).send("event not found");
            }
                return res.status(200).send("Event deleted successfully");
    }catch(error) {
        console.log("Cannot delete event ",error);
        return res.status(500).send("failed to delete event");
    }
};
const getEventImage = async (req,res) => {
    try{
    const event = await Event.findById(req.params.id);
    if(!event||!(event.image))
        return res.status(404).send("Image not found");
        res.contentType(event.image.contentType);
        res.send(event.image.data);

}catch(error)
{
    console.log("Cannot get Image");
    return res.status(500).send("Cannot get Image");
}    
};
const updateEvent = async (req,res) =>{
    try{
            const event = await Event.findByIdAndUpdate(req.params.id,req.body);
            if(!event)
                return res.status(404).send("No event found");
                console.log("Request for update received is",req.body);
                return res.status(200).send("Event updated successfully");
    } catch (error) {
        console.error("Error experienced while processing update request is",error);
        return res.status(500).send("Cannot update event due to some error");
    }
};
=======
//mvcmodel\controllers\eventController.js
const mongoose=require('mongoose');
const express=require('express');
const {User, Merch , Event} =require('../models/model.js');
const upload= require('../middleware/upload.js');
const getEvents= async (req,res) => {
    try{
    const events= await Event.find({});
    if(!events)
        return res.status(404).send("no events found");
    return res.status(200).send(events);
    }catch (error) {
        console.error("An error occured while retreiving events",error);
        return res.status(500).send("Cannot get events");
    }
};
const getEventById = async (req,res) => {
    try{
        const event= await Event.findById(req.params.id);
        if(!event)
            return res.status(404).send("no such event");
        return res.statuss(200).send(event);
    } catch (error){
        return res.status(500).send("Cannot get the event");
    }
};
const addEvent= async (req,res) => {
    try {
        const duplicateEvent= await Event.findOne({name: req.body.name,});
        if(duplicateEvent)
        {
            console.error("Duplicate exists");
            return res.status(400).send("Event already exist");
        }
        const newevent = req.body;
        console.log("Received request is",req.body);
        if(req.file){
            newevent.image={
                data:req.file.buffer,
                contentType:req.file.mimetype,
            }
        }
        const event = new Event(newevent);
            await event.save();
            res.status(201).send('Successfully added event');
    } catch (error){
        res.status(500).send("An error occurred while uploading event ",error);

    }
};
const deleteEvent=async (req,res)=>{
    try{
            const item= await Event.findByIdAndDelete(req.params.id) ;
            if(!item)
            {
                console.log("EVent not found");
                return res.status(404).send("event not found");
            }
                return res.status(200).send("Event deleted successfully");
    }catch(error) {
        console.log("Cannot delete event ",error);
        return res.status(500).send("failed to delete event");
    }
};
const getEventImage = async (req,res) => {
    try{
    const event = await Event.findById(req.params.id);
    if(!event||!(event.image))
        return res.status(404).send("Image not found");
        res.contentType(event.image.contentType);
        res.send(event.image.data);

}catch(error)
{
    console.log("Cannot get Image");
    return res.status(500).send("Cannot get Image");
}    
};
const updateEvent = async (req,res) =>{
    try{
            const event = await Event.findByIdAndUpdate(req.params.id,req.body);
            if(!event)
                return res.status(404).send("No event found");
                console.log("Request for update received is",req.body);
                return res.status(200).send("Event updated successfully");
    } catch (error) {
        console.error("Error experienced while processing update request is",error);
        return res.status(500).send("Cannot update event due to some error");
    }
};
>>>>>>> 2013c7f895fbeb786f63f9a81d3c67a6cf249f89
module.exports={getEvents, addEvent,getEventById, deleteEvent ,getEventImage , updateEvent};