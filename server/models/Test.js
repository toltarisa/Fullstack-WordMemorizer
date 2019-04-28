const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const TestSchema = new Schema({
    createdAt: {
        type:Date,
        default:Date.now()
    },
    TenMinutesLater: {
        type:Date,
        default: new Date(+new Date() + 10*60*1000) // createdAt set edildiginde bu obje 10 dakika sonrasına set edilir
    },
    OneWeekLater: {
        type:Date,
        default: new Date(+new Date() + 7*24*60*60*1000) // 1 hafta sonrası
    },
    OneMonthLater: {
        type:Date,
        default: new Date(+new Date() + 30*24*60*60*1000) // 1 ay sonrası
    },
    FourMonthLater: {
        type:Date,
        default: new Date(+new Date() + 122*24*60*60*1000) // 4 ay sonrası 
    },
    eventId : {
        type:mongoose.Types.ObjectId,
        ref: 'Word'
    }

});

module.exports = mongoose.model('Test',TestSchema);