const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const multer = require('multer')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
const conversationRoute = require('./routes/conversations')
const messageRoute = require('./routes/messages')
const path = require('path')
const cors = require('cors')
const http = require('http')
const socketio = require('socket.io')
const socketListen = require('./socket/socketListen.js')

dotenv.config()

mongoose.connect(
    process.env.MONGO_URL, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
    console.log('Connected to Mongodb')
});

const hostname = process.env.NODE_ENV === 'production' ? 'dmatu-social-media.herokuapp.com' : 'localhost:3000'
const helmetDefaultDirectives = helmet.contentSecurityPolicy.getDefaultDirectives()

app.use('/images', express.static(path.join(__dirname, 'public/images')))

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
app.use(cors())

console.log('helmet directives before set')
console.log(helmetDefaultDirectives)

const newHelmetDirectives = {
    ...helmetDefaultDirectives,
    connectSrc: [
        "'self'",
        "ws://" + hostname
    ]
}

const outputHelmetDirectives = () => {
    console.log('helmet directives after set')
    console.log(newHelmetDirectives)
}
setTimeout(outputHelmetDirectives, 10000)

//security with helmet for socketio
app.use(helmet.contentSecurityPolicy({
    directives: newHelmetDirectives
}))


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images")
    },
    filename: (req,file,cb)=>{
        cb(null, req.body.name)
    }
})

const upload = multer({storage})
app.post("/api/upload", upload.single("file"), (req, res) => {
    console.log('upload route')
    console.log(req.body.file)
    try {
        return res.status(200).json('File uploaded successfully')
    } catch (err) {
        console.log(err)
    }
})

app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)
app.use('/api/conversations', conversationRoute)
app.use('/api/messages', messageRoute)

// app.use(express.static(path.join(__dirname, '/client/build', 'index.html')))

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '/client/build', 'index.html'))
// })

app.use(express.static(path.join(__dirname, '/client/build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'))
})

// socket io listen
const io = socketio(8900, 
    {
    cors: {
        origin: process.env.NODE_ENV === 'production' ? "*" : "http://localhost:3000"
    }
})
socketListen(io)





app.listen(process.env.PORT || 8800, () => {
    console.log("Backend server is running!")
})

console.log('test lmaaooo trieee')




// const io = require('socket.io')(8900, {
//     cors: {
//         origin: process.env.NODE_ENV === 'production' ? "http://dmatu-social-media.herokuapp.com" : "http://localhost:3000"
//     }
// })

// let users = []

// const addUser = (userId, socketId) => {
//     !users.some(user => user.userId === userId) &&
//         users.push({ userId, socketId })
// }

// const removeUser = (socketId) => {
//     users = users.filter(user => user.socketId !== socketId)
// }

// const getUser = (userId) => {
//     return users.find(user => user.userId === userId)
// }

// io.on('connection', (socket) => {
//     //when connect
//     console.log('a user connected')
//     // take userId and socketId from user
//     socket.on('addUser', (userId) => {
//         addUser(userId, socket.id)
//         io.emit("getUsers", users)
//     })

//     //send and get message
//     socket.on("sendMessage", ({ senderId, receiverId, text }) => {
//         const user = getUser(receiverId)
//         io.to(user.socketId).emit('getMessage', {
//             senderId, 
//             text,
//         })
//     })

//     //when disconnect
//     socket.on('disconnect', () => {
//         console.log("a user disconnected!")
//         removeUser(socket.id)
//         io.emit("getUsers", users)
//     })
// })
