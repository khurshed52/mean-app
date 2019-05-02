const express = require('express');
const router= express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const Album = require('../models/gallery');
require('dotenv').config()

const db = process.env.MONGOURI

mongoose.Promise = global.Promise;

mongoose.connect(db,{ useNewUrlParser: true , dbName: 'users'}, function(err){
    if(err){
        console.error("Error! " + err);
    } else {
        console.log('connected')
    }
});

//get api for album
router.get('/albums', function(req, res){
    console.log('Get request for all album');
    Album.find({})
    .exec(function(err, users){
        if (err){
            console.log("Error retrieving albums");
        }else {
            res.json(users);
        }
    });
})
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

// delete api
router.delete('/users/:id', function(req, res){
    console.log('Deleting an user');
    User.findByIdAndRemove(req.params.id, function(err, deletedUser){
        if(err){
            res.send("Error deleting user");
        }else{
            res.json(deletedUser);
        }
    });
});

//edit api 

router.put('/users/:id', function(req, res){
    console.log('Update a user');
    User.findByIdAndUpdate(req.params.id,
    {
        $set: {name: req.body.name, designation: req.body.designation, email: req.body.email, phone: req.body.phone}
    },
    {
        new: true
    },
    function(err, updatedUser){
        if(err){
            res.send("Error updating user");
        }else{
            res.json(updatedUser);
        }
    }

    );
});

module.exports = router;