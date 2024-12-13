//mvcmodel\middleware\authenticate.js
const jwt = require('jsonwebtoken');
require("dotenv").config();
const authenticate=  (req,res,next)=>{
    const token = req.headers['Authorization'] || req.headers['authorization'];
    console.log("Header is",req.headers);
    if(!token)
        return res.status(403).json({message:"No token provided , unauthorized access denied",ver:false});
    try{
    const decoded=jwt.verify(token.replace('Bearer ','') , process.env.TOKEN);
        req.user=decoded;
        next();
} catch(error){
    return res.status(401).json({message:"Access denied, Unauthorized access",ver:false});
}
};
module.exports=authenticate;