const router = require('express').Router()
const Comment = require('../models/Comment')
const Post = require('../models/Post')

// purge comments 
// Comment.deleteMany({}).then(() => {
//     console.log('comments deleted')
// })

// post a comment 
router.post('/:postId', async (req, res) => {
    const comment = new Comment({
        postId: req.body.postId,
        sender: req.body.sender,
        text: req.body.text
    })
    try {
        const post = await Post.findById(req.params.postId)
        await comment.save()
        await post.updateOne( { $push: {comments: comment} })
        res.status(200).json(comment)
    } catch (err) {
        res.status(500).json(err)
    }
})

// get all comments from a post
router.get('/:postId', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId)
        const comments = post.comments
        res.status(200).json(comments)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router