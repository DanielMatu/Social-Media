const router = require("express").Router()
const Conversation = require('../models/Conversation')

// new conv

router.post('/', async (req, res) => {
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId]
    })

    try{
        const savedConversation = await newConversation.save()
        res.status(200).json(savedConversation)
    } catch(err){
        res.status(500).json(err)
    }
})
// get conv of a user

router.get("/:userId", async (req, res) => {
    try {
        const conversation = await Conversation.find({
            members: { $in: [req.params.userId] }
        })
        res.status(200).json(conversation)
    } catch (err) {
        res.status(500).json(err)
    }
})

//get a conversation including two userId

router.get('/find/:firstUserId/:secondUserId', async (req,res) => {
    console.log('heres first user')
    console.log(req.params.firstUserId)
    console.log('heres second user')
    console.log(req.params.secondUserId)
    try {

        const conversation = await Conversation.findOne(({
            members: { $all: [req.params.firstUserId, req.params.secondUserId] }
        }))
        res.status(200).json(conversation)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router