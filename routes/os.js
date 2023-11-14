var express = require('express');
var router = express.Router();
var os = require("os")

/* GET home page. */
router.get('/os', function(req, res, next) {
  res.json({
    hostname: os.hostname(),
    type: os.type(),
    plateform: os.platform(),
  });
});
router.get("/oc/cpus", function (req, res, next){
  res.json({
    cpus: os.cpus(),
  });
});

router.get("/oc/cpus/:id", function (req, res, next){
  const { id } = req.params;
  console.log("id" +id);
  const cpus=os.cpus();
  res.status(200).json(pus[id])
});

module.exports = router;
