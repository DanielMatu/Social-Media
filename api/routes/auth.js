const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

router.post('/register', async (req, res) => {
    try{
        // generate new password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        // create new user
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password: hashedPassword
        })

        // save user and respond
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (err){
        res.status(500).json(err)
    }
})

//LOGIN
router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne({email: req.body.email})
        // !user && res.status(404).send("user not found")
        // const validPassword = await bcrypt.compare(req.body.password, user.password)
        // !validPassword && res.status(400).json("wrong password")
        // res.status(200).json(user)

    //     user = {
    //     "_id": "61255f908f1180332c2c23ec",
    //     "profilePic": "person/1.jpeg",
    //     "coverPicture": "",
    //     "followers": [],
    //     "isAdmin": false,
    //     "username": "jane",
    //     "email": "jane@gmail.com",
    //     "password": "$2b$10$6gP7EkLDBH2y4Dxl.phKHOVI6BVpiXH2DQZ14/AuTzY7IIkPNFHpC",

    //     "followings": [1,2,3]
    // }
        res.status(200).json('user')
    } catch (err){
        res.status(500).json(err)
        res.status(500).json(User)
        res.status(500).json(user)

    }

})



module.exports = router
