const express = require('express');
const router = express.Router;
const Word = require('../models/Word');

router.get('/', (req,res)=> {
    res.send();
});


module.exports = router;