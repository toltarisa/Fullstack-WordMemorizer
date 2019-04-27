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
    Word.aggregate([
      {
        $match: {
          _id: {
            $in: uid.map(function(id) {
              return mongoose.Types.ObjectId(id);
            })
          }
        }
      },
      {
        $lookup: {
          from: "tests",
          localField: "_id.str",
          foreignField: "eventId",
          as: "events"
        }
      },
      {
        $addFields: {
          events: {
            $filter: {
              input: "$events",
              as: "event",
              cond: {
                $eq: ["$$event._id", mongoose.Types.ObjectId(req.params.id)]
              }
            }
          }
        }
      }
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
