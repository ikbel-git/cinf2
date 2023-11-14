var express = require('express');
var Client = require('../model/client');

async function show(req, res, next) {
    try{
      const data = await Client.find();
      res.json(data);
    }
    catch(err){
      console.log(err);
    }
  }
    async function addclient (req, res, next) {
      try{
      const   client=new Client(req.body);
        await client.save();
        res.status(200).send("good add");
    
      }
      catch(err){
        console.log(err);
    
      }
     res.send('respond with a resource');
    }

async function update(req, res, next){
  try{
    await Client.findByIdAndUpdate(req.params.id, req.body);
    res.send("update");
  }
  catch(err){
    console.log(err);
  }
}

async function deleted (req, res, next){
  try{
    await Client.findByIdAndDelete(req.params.id, req.body);
    res.send("remove");
  }
  catch(err){
    console.log(err);
  }
}
async function showbyid(req, res, next){
  try{
    const data = await Client.findById(req.params.id, req.body);
    res.json(data);
  }
  catch(err){
    console.log(err);
  }
}

 module.exports = { show, addclient , update, deleted, showbyid };