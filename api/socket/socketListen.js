const socketListen = (io) => {
    let users = []
    console.log('socket listen started running')
    console.log('heres io')
    console.log(io)

    const addUser = (userId, socketId) => {
        !users.some(user => user.userId === userId) &&
            users.push({ userId, socketId })
    }

    const removeUser = (socketId) => {
        users = users.filter(user => user.socketId !== socketId)
    }

    const getUser = (userId) => {
        return users.find(user => user.userId === userId)
    }

    io.on('connection', (socket) => {
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
            io.to(user.socketId).emit('getMessage', {
                senderId,
                text,
            })
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
