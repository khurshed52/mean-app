const express = require('express');
const router= express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const Album = require('../models/gallery');
const Salary = require ('../models/salary');
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

const services = [{id:1, name:'sport services 1'}, {id:2, name:'sport services 2'}, {id:3, name:'sport services 3'}, {id:4, name:'sport services 4'}];
router.get('/gas-services', (req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');  
    res.send(services);
});

router.get('/gas-services/:id', function (req, res) {
    const service = services.find(c=> c.id === parseInt(req.params.id));
    if(!service) res.status(404).send('error');
    res.send(service);
  });

//get api for salary
router.get('/salary', (req, res)=> {
    console.log('Get request for all users salary');
    res.setHeader('Access-Control-Allow-Origin' , 'http://localhost:4200')
    Salary.find().exec(function(err, salary){
        if (err) {
            res.send('error');
        }else{
            res.json(salary);
        }
    })
})

  
//get api for users
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

// get user request with id 
router.get('/users/:id', function(req, res){
    console.log('Get request for all users with id');
    User.findById(req.params.id)
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

//albums api start

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

// get album request with id 
router.get('/albums/:id', function(req, res){
    console.log('Get request for all albums with id');
    Album.findById(req.params.id)
    .exec(function(err, albums){
        if (err){
            console.log("Error retrieving album");
        }else {
            res.json(albums);
        }
    });
});

//post api albums
router.post('/albums', function(req, res){
    console.log('Post a albums');
    var newAlbum = new Album();
    newAlbum.title = req.body.title;
    newAlbum.url = req.body.url;
    newAlbum.save(function(err, insertedAlbum){
        if (err){
            console.log('Error saving album');
        }else{
            res.json(insertedAlbum);
        }
    });
});

//delete api for albums
router.delete('/albums/:id', function(req, res){
    console.log('Deleting an album');
    Album.findByIdAndRemove(req.params.id, function(err, deletedAlbum){
        if(err){
            res.send("Error deleting album");
        }else{
            res.json(deletedAlbum);
        }
    });
});

module.exports = router;