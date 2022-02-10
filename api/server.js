const express = require('express')
const cors = require('cors')

const server = express()

const usersRouter = require('./users/users-router')

server.use(express.json())
server.use(cors())

server.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello! API is working!'})
})

server.use('/api', usersRouter)

server.use('*', (req, res) => {
    res.send(`<h1>Web50 Deployment Project</h1>`)
})

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
})

module.exports = server;