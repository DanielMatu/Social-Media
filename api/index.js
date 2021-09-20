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
// const https = require('https')
// const { Server } = require('socket.io')
const socketIO = require('socket.io')
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
const isProduction = process.env.NODE_ENV === 'production'

app.use('/images', express.static(path.join(__dirname, 'public/images')))

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
app.use(cors())

// finish notes - remove the * eventually
const newHelmetDirectives = {
    ...helmetDefaultDirectives,
    connectSrc: [
        "'self'",
        "wss://" + hostname,
        "https://" + hostname,
        '*'
    ]
}

// const outputHelmetDirectives = () => {
//     console.log('helmet directives after set')
//     console.log(newHelmetDirectives)
// }
// setTimeout(outputHelmetDirectives, 10000)

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

app.use(express.static(path.join(__dirname, '/client/build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'))
})

const PORT = process.env.PORT || 8800

const server = require('http').createServer(app)
origin = isProduction ? 'https://dmatu-social-media.herokuapp.com' : 'http://localhost:3000'
const io = require('socket.io')(server, {
    cors: {
        origin
    }
})

console.log('sockets before listen')
console.log(io.sockets._events)
socketListen(io)
console.log('sockets after listen ')
console.log(io.sockets._events)

server.listen(PORT, () => {
    console.log('server up on port ' + PORT)
})