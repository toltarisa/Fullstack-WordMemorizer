const express = require("express");
const router = express.Router();
const Test = require("../models/Test");
const Word = require("../models/Word");
const mongoose = require("mongoose");

router.post("/:id", async (req, res) => {
  let query = {
    _id: req.params.id,
  }
  let newTest = new Test(query);
  try {
    await newTest.save();
    res.status(200).send({ message: "dates setted" });
  } catch (err) {
    res.status(500).send({ message: "dates couldn't setted" });
  }
});

router.get("/", (req, res) => {
  Word.find({}, (err, words) => {
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
          as: "event"
        }
      },
      {
        $addFields: {
          event: {
            $filter: {
              input: "$event",
              as: "event",
              cond: {
                $eq: ["$$event._id", "$_id"]
              }
            }
          }
        }
      },
      {
        $unwind: "$event"
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
