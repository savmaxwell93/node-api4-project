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

router.get('/users', (req, res) => {
    res.json(users)
})

router.post('/register', async (req, res) => {
    const newUser = req.body
    try {
        if (!req.body.username || !req.body.password) {
            res.status(400).json({
                message: "username and password required"
            })
        } else {
            users.push(newUser)
            res.status(201).json(newUser)
        }
    } catch (err) {
        res.status(500).json({
            message: "unable to add new user"
        })
    }
})

module.exports = router;