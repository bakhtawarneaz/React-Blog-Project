const { body , validationResult } = require('express-validator');
const User = require("../models/user")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const createToken = (user) =>{
    return jwt.sign({user},process.env.SECRET,{
        expiresIn:'7d'
    });
}


module.exports.registerValidation = [
    body("name").not().isEmpty().withMessage("Name is required"),
    body("email").not().isEmpty().withMessage("Email is required"),
    body("password").not().isEmpty().withMessage("Password is required"),
    body('password').isLength({ min: 5 }).withMessage("Must 6 Character"),
];


module.exports.register = async (req,res) =>{
    const {name , email , password} = req.body;
    const errors = validationResult(req);
     if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
     }
     try {
        const checkUser = await User.findOne({email});
        if(checkUser){
            return res.status(400).json({errors: [{msg: 'Email is already taken'}]})
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await  bcrypt.hash(password,salt);
        try {
            const user = await User.create({
                name,
                email,
                password:hash,
            })
            const token = createToken(user);
            return res.status(200).json({msg: 'Registered Successfully...!',token});

        } catch (error) {
            return res.status(500).json({errors:error});
        }

     } catch (error) {
        return res.status(500).json({errors:error});
     }
}

module.exports.loginValidation = [
    body("email").not().isEmpty().withMessage("Email is required"),
    body("password").not().isEmpty().withMessage("Password is required"),
];

module.exports.login = async (req,res) => {
    const errors = validationResult(req); 
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
     }
     const {email , password} = req.body;
     try {
        const user = await User.findOne({email});
        if(user){
             const matched = await bcrypt.compare(password,user.password);
             if(matched){
                const token = createToken(user);
                return res.status(200).json({msg: 'Login Successfully...!',token});
             } else{
                return res.status(401).json({errors: [{msg: 'Password not correct'}]});
             }      
        }else{
            return res.status(404).json({errors: [{msg: 'Email not found'}]});
        }
     } catch (error) {
        return res.status(500).json({errors:error});
     }
}