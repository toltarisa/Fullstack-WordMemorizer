const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WordSchema = new Schema({
  word: {
    type: String
  },
  translate: {
    type: String
  },
  kind: {
    type: String
  },
  exampleSentence: {
    type: String
  },
  level: {
    type: Number,
    default: 0
  },
  date:{
    type:Date
  }
});

module.exports = mongoose.model("Word", WordSchema);
