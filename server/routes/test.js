const express = require("express");
const router = express.Router();
const Word = require("../models/Word");

router.get('/tenminutelater', (req,res) => {
    Word.aggregate(
        [
            {$match : {"level":1}},
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

router.get('/oneweeklater', (req,res) => {
    Word.aggregate(
        [
            {$match : {"level":2}},
            {$project: {
                "word":1,
                "translate" :1,
                "kind":1,
                "exampleSentence":1,
                "date":1

            }}
        ]
    ).then(data => {
        res.status(200).json(data);
    }).catch(err => {
        throw err ; 
    })
})

module.exports = router;