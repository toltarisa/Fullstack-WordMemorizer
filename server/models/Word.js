const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WordSchema = new Schema({
    word:{
        type:String,
        required: true
    },
    translate: {
        type:String,
        required:true
    },
    kind:{
        type:String,
        required:true
    },
    exampleSentence: {
        type:String
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