const express = require('express')

const router = express.Router()

const users = [
    {
        username: 'Audrey',
        passowrd: 'dogo'
    },
    {
        username: 'Einstein',
        passowrd: 'floofer'
    },
    {
        username: 'Mew Foster',
        passowrd: 'hero'
    },
    {
        username: 'Marvin The Martian',
        passowrd: 'lilthief'
    },
]

router.get('/', (req, res) => {
    res.json(users)
})

module.exports = router;