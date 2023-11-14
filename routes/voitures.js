var express = require('express');
var router = express.Router();
var Voiture = require('../model/voiture');

/* GET users listing. */
router.post('/add', async function(req, res, next) {
  try{
    console.log(req.body);
  const   voiture=new Voiture(req.body);
    await voiture.save();//.exec();
    res.status(200).send("good add");

  }
  catch(err){
    console.log(err);

  }
 // res.send('respond with a resource');
});
router.get("/showall", async function (req, res, next){
  try{
    const data = await Voiture.find();
    res.json(data);
  }
  catch(err){
    console.log(err);
  }
});

router.put("/update/:id", async function (req, res, next){
  try{
    await Voiture.findByIdAndUpdate(req.params.id, req.body);
    res.send("update");
  }
  catch(err){
    console.log(err);
  }
});

router.delete("/delete/:id", async function (req, res, next){
  try{
    await Voiture.findByIdAndDelete(req.params.id, req.body);
    res.send("remove");
  }
  catch(err){
    console.log(err);
  }
});

router.get("/showbyid/:id", async function (req, res, next){
  try{
    const data = await Voiture.findById(req.params.id, req.body);
    res.json(data);
  }
  catch(err){
    console.log(err);
  }
});

router.get("/showbyname/:name", async function (req, res, next){
  try{

    const data = await Voiture.findOne(req.params);
    res.json(data);
  }
  catch(err){
    console.log(err);
  }
});


module.exports = router;
