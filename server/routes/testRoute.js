const express = require("express");
const router = express.Router();
const Test = require("../models/Test");
const Word = require("../models/Word");
const mongoose = require("mongoose");

router.post("/:id", async (req, res) => {
  let newTest = new Test({ _id: req.params.id });

  try {
    await newTest.save();
    res.status(200).send({ message: "dates setted" });
  } catch (err) {
    res.status(500).send({ message: "dates couldn't setted" });
  }
});

router.get("/:id", (req, res) => {
  Word.find({ _id: req.params.id }, (err, words) => {
    if (err) {
      console.log(err);
    }
    const uid = words.map(word => word._id);
    console.log(req.params.id);
    Word.aggregate([
      {
        $match: {
          _id: {
            $in: uid.map(function(id) {
              return new mongoose.Types.ObjectId(id);
            })
          }
        }
      },
      {
        $lookup: {
          from: "tests",
          localField: "eventId",
          foreignField: "_id.str",
          as: "events"
        }
      },
    //   {
    //     $project: {
    //       "word": 1,
    //       "translate": 1,
    //       "kind": 1,
    //       "exampleSentence": 1,
    //       "events": {
    //         "$filter": {
    //           "input": "$events",
    //           "as": "event",
    //           "cond": { $eq: ["$$event._id", req.params.id] }
    //         }
    //       }
    //     }
    //   }
    ])
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        throw err;
      });
  });
});

module.exports = router;
