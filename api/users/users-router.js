const express = require('express')

const router = express.Router()

const users = [
    {
        username: 'Audrey',
        password: 'dogo'
    },
    {
        username: 'Einstein',
        password: 'floofer'
    },
    {
        username: 'Mew Foster',
        password: 'hero'
    },
    {
        username: 'Marvin The Martian',
        password: 'lilthief'
    },
]

const findByPassword = password => {
    const user = users.find(p => p.password === password)
    return user
}

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

router.post('/login', async (req, res) => {
    const user = await findByPassword(req.body.password)
    try {
        if (!user) {
            res.status(404).json({
                message: "user not found, unable to login"
            })
        } else {
            res.json({
                message: `Welcome ${user.username}`,
                displayMessage: `<h1>Welcome ${user.username}</h1>`
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "unable to login"
        })
    }
})

module.exports = router;