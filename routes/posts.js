const express = require('express');

const router = express.Router();

const Post = require('../models/post');

//GET BACK ALL THE POST
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

//SUBMIT A POST
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }

    // post.save()
    // .then(data => {
    //     res.json(data);
    // })
    // .catch(err => {
    //     res.json({ message: err });
    // });
});

//SPECIFIC POST
router.get('/:postID', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postID);
        res.json(post);
    } catch (err) {
        res.json({ message: err })
    }
    // console.log(req.params.postID);
});

//REMOVE POST
router.delete('/:postID', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postID });
        res.json(removedPost);
    } catch (err) {
        res.json({ message: err })
    }
    // console.log(req.params.postID);
});

//UPDATE POST
router.patch('/:postID', async (req, res) => {
    try{
        const updatedPost = await Post.updateOne(
            { _id: req.params.postID }, 
            { $set: { description: req.body.description } });
        res.json(updatedPost);    
    }catch(err){
        res.json({ message: err });
    }
    
});

module.exports = router;