var express = require('express');
var router = express.Router();

var Studentcontroller = require("../controller/studentcontroller")





router.get("/showall",Studentcontroller.show);
router.post('/addstudent',Studentcontroller.addstudent);
router.put("/update/:id", Studentcontroller.update);
router.delete("/delete/:id",  Studentcontroller.deleted);
router.get("/showbyid/:id", Studentcontroller.showbyid);


/*GET users listin
router.post('/add', async function(req, res, next) {
  try{
  const   user=new User(req.body);
    await user.save();
    res.status(200).send("good add");

  }
  catch(err){
    console.log(err);

  }
 res.send('respond with a resource');
});
router.get("/showall", async function (req, res, next){
  try{
    const data = await User.find();
    res.json(data);
  }
  catch(err){
    console.log(err);
  }
});

router.put("/update/:id", async function (req, res, next){
  try{
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.send("update");
  }
  catch(err){
    console.log(err);
  }
});

router.delete("/delete/:id", async function (req, res, next){
  try{
    await User.findByIdAndDelete(req.params.id, req.body);
    res.send("remove");
  }
  catch(err){
    console.log(err);
  }
});

router.get("/showbyid/:id", async function (req, res, next){
  try{
    const data = await User.findById(req.params.id, req.body);
    res.json(data);
  }
  catch(err){
    console.log(err);
  }
});

router.get("/showbyname/:name", async function (req, res, next){
  try{

    const data = await User.findOne(req.params);
    res.json(data);
  }
  catch(err){
    console.log(err);
  }
});*/




module.exports = router;
