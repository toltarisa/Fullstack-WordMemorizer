const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WordSchema = new Schema({
    pointer: {
        type:Schema.Types.ObjectId
    },
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
    isCorrect: {
        type:Boolean
    }
});

module.exports = mongoose.model("Word",WordSchema);