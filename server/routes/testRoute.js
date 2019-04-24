const express = require("express");
const router = express.Router();
const Test = require('../models/Test');
const Word = require('../models/Word');

router.post("/", async(req, res) => {
    let newTest = new Test();

    try {
        await newTest.save()
        res.status(200).send({message:"dates setted"});
    } catch (err) {
        res.status(500).send({message:"dates culdn't setted"});
    }
})

router.get("/", (req,res) => {
    const promise = Word.aggregate([
        {
        $lookup:
           {
             from: Test.collection.name,
             localField: 'pointer',
             foreignField: 'status',
             as: 'events'
           }
         }
        ]);
        promise.then(data => {
            res.json(data);
        })
        .catch(err=>{throw err});
})

module.exports = router;