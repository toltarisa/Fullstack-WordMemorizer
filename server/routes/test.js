const express = require("express");
const router = express.Router();
const Word = require("../models/Word");

router.get('/getbytime', (req,res) => {
    Word.aggregate(
        [
            {$match : {"level":{$in:[1,2,3]}}},
            {$project: {
                "word":1,
                "translate" :1,
                "kind":1,
                "exampleSentence":1,
                "date":1,
                "level":1
            }}
        ]
    ).then(data => {
        res.status(200).json(data);
    }).catch(err => {
        throw err ; //catch ile hata yakalama
    })
})

router.get('/getmemorizedwords', (req, res) => {
    Word.aggregate(
        [
            {$match: {"level":4}},
            {$project:{
                "level":1,
                "date":1
            }}
        ]
    ).then(data => {
        res.status(200).json(data);
    }).catch(err => {
        throw err ; //catch ile hata yakalama
    })
})
module.exports = router;