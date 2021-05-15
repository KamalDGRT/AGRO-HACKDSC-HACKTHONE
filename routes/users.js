var express = require('express');
var router = express.Router();
var userM = require('../assets/UserM')

/* GET home page. */
router.get('/getPrdt',(req, res, next) => {
  userM.test().then(d=>{
    res.json(d)
  })
});

router.post('/addPrdt',(req,res)=>{
  var data = req.body
  userM.addPrdt(data).then(d=>{
    res.status({data:true})
  })

})

module.exports = router;
