var express = require('express');
var Student = require('../model/student');

async function show(req, res, next) {
    try{
      const data = await Student.find();
      res.json(data);
    }
    catch(err){
      console.log(err);
    }
  }
    async function addstudent (req, res, next) {
      try{
      const   student=new Student(req.body);
        await student.save();
        res.status(200).send("good add");
    
      }
      catch(err){
        console.log(err);
      }
      //res.send('respond with a resource');
    }

async function update(req, res, next){
  try{
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.send("update");
  }
  catch(err){
    console.log(err);
  }
}

async function deleted (req, res, next){
  try{
    await Student.findByIdAndDelete(req.params.id, req.body);
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

 module.exports = { show, addstudent , update, deleted, showbyid };