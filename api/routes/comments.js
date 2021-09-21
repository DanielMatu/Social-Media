const router = require('express').Router()
const Comment = require('../models/Comment')
const Post = require('../models/Post')

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


// router.put("/:id/follow", async (req, res) => {
//     if (req.body.userId !== req.params.id) {
//         try {
//             const user = await User.findById(req.params.id)
//             const currentUser = await User.findById(req.body.userId)
//             if (!user.followers.includes(req.body.userId)) {
//                 await user.updateOne({ $push: { followers: req.body.userId } })
//                 await currentUser.updateOne({ $push: { followings: req.params.id } })
//                 res.status(200).json('user has been followed')
//             } else {
//                 res.status(403).json('you already follow this user')
//             }
//         } catch (e) {
//             res.status(500).json(e)
//         }
//     } else {
//         res.status(403).json("you cant follow yourself")
//     }
// })

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