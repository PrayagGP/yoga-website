<<<<<<< HEAD
//mvcmodel\models\model.js
const mongoose =require('mongoose');
const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    rollno:{type:String,required:true,unique :true},
    email:{type:String , required:true},
    password:{type:String,required:true},
    semester:{type:Number },
    credits:Number,
    member:{type:String },
    eventsParticipated:{ type:Number
    },
    attendance:{type: Number},
    image :{
        data:Buffer,
        contentType:String,
    },
});
const eventSchema= new mongoose.Schema({
    name:{type:String,required:true},
    venue:{type:String},
    date:{type:Number},
    time:{type:String},
    guest:{type:String},
    seats:{type:Number},
    description:{type:String},
    image:{
        data:Buffer,
        contentType:String,
    }
});
const merchSchema= new mongoose.Schema({
    name:{type:String , required:true},
    price:{type:Number , required:true},
    description:{type:String},
    image:{
        data:Buffer,
        contentType:String,
    }
});
const User = mongoose.model('User',userSchema);
const Event = mongoose.model('Event',eventSchema);
const Merch=mongoose.model('Merch',merchSchema);
module.exports={
  User ,
  Event,
  Merch,
=======
//mvcmodel\models\model.js
const mongoose =require('mongoose');
const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    rollno:{type:String,required:true,unique :true},
    email:{type:String , required:true},
    password:{type:String,required:true},
    semester:{type:Number },
    credits:Number,
    member:{type:String },
    eventsParticipated:{ type:Number
    },
    attendance:{type: Number},
    image :{
        data:Buffer,
        contentType:String,
    },
});
const eventSchema= new mongoose.Schema({
    name:{type:String,required:true},
    venue:{type:String},
    date:{type:Number},
    time:{type:String},
    guest:{type:String},
    seats:{type:Number},
    description:{type:String},
    image:{
        data:Buffer,
        contentType:String,
    }
});
const merchSchema= new mongoose.Schema({
    name:{type:String , required:true},
    price:{type:Number , required:true},
    description:{type:String},
    image:{
        data:Buffer,
        contentType:String,
    }
});
const User = mongoose.model('User',userSchema);
const Event = mongoose.model('Event',eventSchema);
const Merch=mongoose.model('Merch',merchSchema);
module.exports={
  User ,
  Event,
  Merch,
>>>>>>> 2013c7f895fbeb786f63f9a81d3c67a6cf249f89
};