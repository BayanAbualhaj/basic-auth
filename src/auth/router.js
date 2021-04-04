'use strict';

const express= require('express');
const users= require('./models/users-model');
const bcrypt = require('bcrypt');
const {signinValidator}= require('./middleware/basic');

const router=express.Router();

router.post('/signup' , async (req,res)=>{
    try {

        const record= await users.create(req.body);
        res.status(201).json(record);
    } catch (error) {
        res.status(400).send("Error while creating user")
    }
});


router.post('/signin', signinValidator , async(req,res)=>{
    console.log(req.body);

    try {
        res.status(200).json(req.body);
    } catch (error) {
        res.status(403).send('Invalid Login');
    }
})


module.exports=router;