var express = require('express');
var router = express.Router();

// get seller home
router.get('/',(req,res) => {
    res.send('Seller here');
});

module.exports = router;