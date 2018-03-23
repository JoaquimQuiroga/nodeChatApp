const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '..','public')
const port = process.env.PORT || 3000
let app = express()
let server = http.createServer(app)
let io = socketIO(server)


app.use(express.static(publicPath))


//(register event listener
io.on('connection', (socket) =>{
  console.log('New user connected to socket')


  socket.on('disconnect', ()=>{
    console.log('User disconnected from socket')
  })
})














server.listen(port, () => {
  console.log(`Server is up on : ${port}`)
})