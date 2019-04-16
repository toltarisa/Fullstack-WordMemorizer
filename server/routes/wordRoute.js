const express = require('express');
const router = express.Router();
const Word = require('../models/Word');

// add a word
router.post('/',  async (req,res)=> {
    let newWord = new Word(req.body);
    
    try {
        await newWord.save();
        res.status(201).send({response: 'Object Created'})

    } catch (err) {
        res.status(500).send(err);
    }

});
//get all words
router.get('/', async (req,res)=> {
    try {
       let words = await Word.find({});
        res.status(200).send(words);
    } catch (err) {
        res.status(500).send(err);
    }
});

//get a word by id
router.get('/:id',async (req,res) =>{
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
router.delete('/delete/:id', async (req,res)=> {
    let query = {_id : req.params.id};
    
    try {
        await Word.findByIdAndRemove(query);
        res.status(200).send({response:'object deleted'});

    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;