const express=require('express');
const User = require('../models/User');
const router=express.Router();
const {body,validationResult}=require('express-validator');
const bcrypt= require('bcryptjs');
const jwt=require('jsonwebtoken');

const JWT_SECRET='PriyanshuISaMale';
//Create a User using :POST "/api/auth/createuser". Doesn't require Auth.
router.post('/createuser',[
    body('name','enter a valid name').isLength({min:3}),
    body('email','enter a valid email').isEmail(),
    body('password','password must be at least 5 characters').isLength({min:5}),
],async(req,res)=>{
    //If there are errors return Bad request and the errors.
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    try {
        
    let user = await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({errors:"Sorry a user with this email is already exists."});
    }
    const salt=await bcrypt.genSalt(10);
    const secPass=await bcrypt.hash(req.body.password,salt);
    //create a user.
    //check wheather email(unique) exist or not.
     user = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:secPass
       
    })
    const data={
        user:{
            id:user.id
        }
    }
    const authToken=jwt.sign(data,JWT_SECRET);
    
    // res.json(user);
    res.json({authToken});
    
    } catch (error) {
     console.error(error.message);
     res.status(500).send("Some Error occured");       
    }
})

module.exports=router;