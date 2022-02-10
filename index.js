require('dotenv').config()

const express = require('express')
const cors = require('cors')

const server = express()

const PORT = process.env.PORT || 9001

server.use(express.json())
server.use(cors())

server.get('/hello', (req, res) => {
    res.send(`
    <h1>Hello! API is working</h1>
    `)
})

server.use('*', (res, req) => {
    res.send(`<h1>Web50 Deployment Project</h1>`)
})

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
})



server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})