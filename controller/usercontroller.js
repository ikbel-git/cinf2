var express = require('express');
var User = require('../model/user');

async function show(req, res, next) {
    try{
      const data = await User.find();
      res.json(data);
    }
    catch(err){
      console.log(err);
    }
  }
    async function adduser (req, res, next) {
      try{
      const   user=new User(req.body);
        await user.save();
        res.status(200).send("good add");
    
      }
      catch(err){
        console.log(err);
    
      }
     res.send('respond with a resource');
    }

async function update(req, res, next){
  try{
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.send("update");
  }
  catch(err){
    console.log(err);
  }
}

async function deleted (req, res, next){
  try{
    await User.findByIdAndDelete(req.params.id, req.body);
    res.send("remove");
  }
  catch(err){
    console.log(err);
  }
}
async function showbyid(req, res, next){
  try{
    const data = await User.findById(req.params.id, req.body);
    res.json(data);
  }
  catch(err){
    console.log(err);
  }
}

 module.exports = { show, adduser , update, deleted, showbyid };