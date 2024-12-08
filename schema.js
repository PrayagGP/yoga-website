/*webbackend>models>Schema.js*/
const mongoose=require('mongoose');
const userSchema = new mongoose.Schema({
    name:{type:String , required:true},
    rollno: {type:String, required:true},
    email:{type:Number ,required:true},
    semester:{type:Number ,required:true},
    credits:Number,
    member: {type:String ,required:true},
    image :{type:Buffer},
});
module.exports= mongoose.model('Item',userSchema);
const eventSchema= new mongoose.Schema({
    name:{type:String , required:true},
    venue:{type:String},
    date:{type:Number}/**ddmmyyyy format**/,
    guest:{type:String},
    image:{type:Buffer},

});
module.exports=mongoose.model('Event', eventSchema);
const merchSchema= new mongoose.Schema({
    name :{type:String , required:true},
    price:{type:Number , required:true},
    description:{type:String },
    image:{type:Buffer},
});