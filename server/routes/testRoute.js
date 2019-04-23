const express = require("express");
const router = express.Router();
const Test = require('../models/Test');

router.post("/", async(req, res) => {
    let newTest = new Test();

    try {
        await newTest.save()
        res.status(200).send({message:"dates setted"});
    } catch (err) {
        res.status(500).send({message:"dates culdn't setted"});
    }
})

router.get("/", async (req,res) => {
    try {
        let tests = await Test.find({});
        res.status(200).send(tests);
      } catch (err) {
        res.status(500).send(err);
      }
})

module.exports = router;