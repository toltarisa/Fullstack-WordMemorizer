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

    Word.find({}, (err, words) => {
        if(err){console.log(err)}
        const uid = words.map(word=>word._id);
    
    const promise = Word.aggregate([
        {
            $match: {
              _id: {
                $in: uid.map(function(id){return new mongoose.Types.ObjectId(id)})
              }
            }
        },
        {
        $lookup:
           {
             from: 'tests',
             localField: 'eventId',
             foreignField: '_id.str',
             as: 'events'
           }
        },
        {
            $unwind: '$events'
        }
        ]);
        promise.then(data => {
            res.json(data);
        })
        .catch(err=>{throw err});

    });
    // const data = await Word.find().populate({path:'event',Model:'Test'}).exec();
    // res.json(data);

})

module.exports = router;