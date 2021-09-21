const router = require('express').Router()
const Comment = require('../models/Comment')

// post a comment 
router.post('/', async (req, res) => {
    const comment = new Comment({
        postId: req.body.postId,
        sender: req.body.sender,
        text: req.body.text
    })
    try {
        await comment.save()
        res.status(200).json(comment)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router