const express = require("express");
const router = express.Router();
const Test = require('../models/Test');
const Word = require('../models/Word');
const mongoose = require('mongoose');

router.post("/", async (req, res) => {
    let newTest = new Test();

    try {
        await newTest.save()
        res.status(200).send({message:"dates setted"});
    } catch (err) {
        res.status(500).send({message:"dates couldn't setted"});
    }
})

router.get("/", (req,res) => {
    const promise = Word.aggregate([
        {
        $lookup:
           {
             from: 'tests',
             localField: 'eventId',
             foreignField: '_id.str',
             as: 'event'
           }
        },
        {
            $project : {
                "word":1,
                "translate":1,
                "kind":1,
                "exampleSentence":1,
                "event": 1,
                'event':{ $arrayElemAt:['$event',0] }
            }
        }
        ]);
        promise.then(data => {
            res.json(data);
        })
        .catch(err=>{throw err});

    });

module.exports = router;