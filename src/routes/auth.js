
const express = require('express');
const router = express.Router();
const User = require('../app/models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

    
    const registerUser = async(req, res) => {

    const emailExists = await User.findOne({ email: req.body.email});
    if(emailExists) return res.status(400).send("email already exists");

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);


    try{
            
    // create new user
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword
        });
    //    return res.status(200).send();
            const saveAuth = await user.save();
            // res.send({user: user._id });
            return res.status(200).send(saveAuth);
        }catch(err){
            res.status(400).send(err);
        }

}
 const userLogin = async (req, res) => {

    const user = await User.findOne({ email: req.body.email});
    if(!user) return res.status(400).send("email is not found");

    // Password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid password');

    // Create and assign a token

    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
    // return res.status(404).send();

}

router.post('/register', registerUser, (req, res) => {
      return res.status(200).send();
} );

router.post('/login', userLogin, (req, res) => {
    return res.status(200).send();

});

module.exports = router;
