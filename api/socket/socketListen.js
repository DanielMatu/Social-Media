const socketListen = (io) => {
    let users = []

    const addUser = (userId, socketId) => {
        !users.some(user => user.userId === userId) &&
            users.push({ userId, socketId })
    }

    const removeUser = (socketId) => {
        users = users.filter(user => user.socketId !== socketId)
    }

    const getUser = (userId) => {
        let foundUser = users.find(user => user.userId === userId)
        return foundUser
    }


    // can also be io.on
    io.sockets.on('connection', (socket) => {
        //when connect
        console.log('a user connected')
        // take userId and socketId from user
        socket.on('addUser', (userId) => {
            addUser(userId, socket.id)
            io.emit("getUsers", users)
        })

        //send and get message
        socket.on("sendMessage", ({ senderId, receiverId, text }) => {
            const user = getUser(receiverId)
            console.log('all users')
            console.log(users)
            console.log('and receiver')
            console.log(receiverId)
            console.log('and sender')
            console.log(senderId)
            if (user) {
                io.to(user.socketId).emit('getMessage', {
                    senderId,
                    text,
                })
            }
        })

        //when disconnect
        socket.on('disconnect', () => {
            console.log("a user disconnected!")
            removeUser(socket.id)
            io.emit("getUsers", users)
        })
    })

}

module.exports = socketListen
