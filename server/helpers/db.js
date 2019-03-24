const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = ()=>{
    mongoose.connect('',{useNewUrlParser:true})
    .then(()=>{
        console.log('MongoDB Connected...');
    })
    .catch(err=>console.log(err));
}
