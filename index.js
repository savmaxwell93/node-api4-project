require('dotenv').config()
const server = require('./api/server')

const PORT = process.env.PORT || 9001

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})