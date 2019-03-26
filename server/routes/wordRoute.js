const express = require('express');
const router = express.Router;
const Word = require('../models/Word');

// add a word
router.post('/', (req,res)=> {
    let newWord = new Word(req.body);

    newWord.save()
            .then(data => {
                res.json(data);
            })
            .catch(err=> {
                res.json(err);
            });

});
//get all words
router.get('/', (req,res)=> {
    newWord.find({})
            .then(data=> {
                res.json(data);
            })
            .catch(err=> {
                res.json(err);
            })
});

//get a word by id
router.get('/:id',(req,res) =>{
    let query = {_id : req.params.id};
    Word.findById(query)
        .then(data =>{
            res.status(200).json(data);
        })
        .catch(err=> {
            res.status(404).json(err);
        })
});

//update a word
router.put('/update/:id', (req,res)=> {
    let query = {_id: req.params.id};
    Word.findByIdAndUpdate(query, req.body)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        })
});


//delete a word
router.delete('/delete/:id', (req,res)=> {
    let query = {_id : req.params.id};
    Word.findByIdAndRemove(query)
        .then((data)=>{
            res.json(data);
        })
        .catch(err =>{
            res.json(err);
        })
})






module.exports = router;