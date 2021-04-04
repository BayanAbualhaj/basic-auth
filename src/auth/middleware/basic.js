'use strict';

const base64 = require('base-64');
const users= require('../models/users-model');

const signinValidator = async (req,res,next)=>{
    if(req.headers.authorization){
        
        let encodedStr = req.headers.authorization.split(' ')[1]; 
        let decodedStr = base64.decode(encodedStr);
        let [username,password]= decodedStr.split(':');
        const valid= await users.read({username,password});

        if(valid){
            req.body=valid;
            next();  
        }else{
            next('username or password incorrect')

        }
    }else{
        next('Not Found Authorization')
    }
};


const signupValidator=(req,res,next)=>{
    if(req.body){
        next();
    }else{
        next('info to sign up not found');
    }
};


module.exports={
    signinValidator:signinValidator,
    signupValidator:signupValidator
};