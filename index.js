require('dotenv').config()

const express = require('express')
const server = express()

server.get('/', (req, res) => {
    res.send(`
    <h1>Web50 Deployment Project</h1>
    `)
})

const PORT = process.env.PORT || 9001;
server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})