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
    isCorrect: {
        type:Boolean
    },
    eventId: {
        type:Schema.Types.ObjectId,
        ref: 'Test'
    }
});

module.exports = mongoose.model("Word",WordSchema);