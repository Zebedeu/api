const express = require('express');
const router = express.Router();
const Post = require('../app/models/Post');
const verify = require('./verifytoken');
// Get back all the posts

router.get('/', verify, async (req, res) =>{
        try {
            const posts = await Post.find();
            res.json(posts);
        } catch (err) {
            res.json({message: err})
        }
})

const submitPost = async (req, res) => {
    // console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });
    try{
    const savePost = await post.save();
    res.json(savePost);
    }catch( err) {
        res.json({message: err});
    }
}
// Submit a post
router.post('/',verify, submitPost);

const getPostById = async (req, res)=> {
    try{
     const post = await Post.findById(req.params.postId);
     res.json(post);
    }catch(err ) {
        res.json({message: err});
    }
 }
// especific post

router.get('/:postId', verify, getPostById);

const deletePostById =  async (req, res)=> {
    try {
        const removePost = await Post.remove({_id: req.params.postId});
        res.json(removePost);
    
    } catch (err) {
        res.json({message: err});
    }
}
// delete post by id
router.delete('/:postId', verify, deletePostById);

const updatePostById = async (req, res)=> {
    try {
        const updatePost = await Post.updateOne({_id: req.params.postId}, { $set: {title: req.body.title}});
        res.json(updatePost);
    } catch (err) {
        res.json({message: err});
    }
}
// Update a post by id
router.patch('/:postId', verify, updatePostById);

module.exports = router;
