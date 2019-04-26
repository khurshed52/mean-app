const express = require('express');
const router= express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const db = "mongodb+srv://mean:mean@123@mean-users-9nwkz.mongodb.net/test?retryWrites=true";


mongoose.Promise = global.Promise;

mongoose.connect(db,{ useNewUrlParser: true , dbName: 'users'}, function(err){
    if(err){
        console.error("Error! " + err);
    } else {
        console.log('connected')
    }
});


//get api 
router.get('/users', function(req, res){
    console.log('Get request for all users');
    User.find({})
    .exec(function(err, users){
        if (err){
            console.log("Error retrieving users");
        }else {
            res.json(users);
        }
    });
});


// post api 
router.post('/users', function(req, res){
    console.log('Post a users');
    var newUser = new User();
    newUser.name = req.body.name;
    newUser.designation = req.body.designation;
    newUser.email = req.body.email;
    newUser.phone = req.body.phone;
    newUser.save(function(err, insertedUser){
        if (err){
            console.log('Error saving video');
        }else{
            res.json(insertedUser);
        }
    });
});
module.exports = router;