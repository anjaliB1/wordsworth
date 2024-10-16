const HttpError = require('../models/errorModel')
const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerUser = async (req, res, next) => {
    try{
        const {name, email, password, password2} = req.body;
        if(!name || !email || !password){
            return next(new HttpError("Fill in all fields", 422))
        }
        const newEmail = email.toLowerCase()
        const emailExists = await User.findOne({email: newEmail})
        if(emailExists){
            return next(new HttpError("Email already exists", 422))
        }
        if((password.trim()).length<6){
            return next(new HttpError("Password should be of at least 6 characters", 422))
        }
        if(password!=password2){
            return next(new HttpError("Passwords does not match", 422))
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password, salt);
        const newUser = await User.create({name, email: newEmail, password: hashedPass})
        res.status(201).json(`New user ${newUser.email} registered`)
    } catch(error){
        return next(new HttpError("User registration failed", 422))
    }
}

const loginUser = async (req, res, next) => {
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return next(new HttpError("Fill in all the fields", 422))
        }
        const newEmail = email.toLowerCase();
        const user = await User.findOne({email:newEmail})
        if(!user){
            return next(new HttpError("Invalid Credentials", 422))
        }
        const comparePass = await bcrypt.compare(password, user.password)
        if(!comparePass){
            return next(new HttpError("Invalid Credentials", 422))
        }
        const {_id: id, name} = user;
        const token = jwt.sign({id, name}, process.env.JWT_SECRET, {expiresIn: "1h"})
        res.status(200).json({token, id, name})
    } catch(error){
        return next(new HttpError("Login failed. Please check your credentials or try again", 422))
    }
}

const getUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id).select('-password');
        if(!user){
            return next(new HttpError("User not found", 404))
        }
        res.status(200).json(user);
    } catch (error) {
        return next(new HttpError(error))
    }
}

const getAuthors = async (req, res, next) => {
    try {
        const authors = await User.find().select('-password');
        res.json(authors);
    } catch (error) {
        return next(new HttpError(error))
    }
}

const changeAvatar = async (req, res, next) => {
    try {
        if(!req.files.avatar){
            return next(new HttpError("Please choose an image", 422))
        }
    } catch (error) {
        return next(new HttpError(error))
    }
}

const editUser = async (req, res, next) => {
    res.json("Edit User Details")
}

module.exports = {registerUser, loginUser, getUser, changeAvatar, editUser, getAuthors}