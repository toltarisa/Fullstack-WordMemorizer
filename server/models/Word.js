const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WordSchema = new Schema({
    word:{
        type:String,
    },
    translate: {
        type:String,
    },
    kind:{
        type:String,
    },
    exampleSentence: {
        type:String,     
    },
    createdAt: {
        type:Date,
        default:Date.now()
    },
    isCorrect: {
        type:Boolean
    }
});

module.exports = mongoose.model("Word",WordSchema);