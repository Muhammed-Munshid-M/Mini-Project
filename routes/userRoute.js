const express = require('express')
const router = express.Router()
const User = require('../models/userModel')
const bcrypt = require("bcryptjs")

router.post('/register', async (req, res) => {
    try {
        const userExist = await User.findOne({ email: req.body.email })
        if (userExist) {
            return res.status(200).send({ message: "User already exist", success: false })
        }
        const password = req.body.password
        const salt = await bcrypt.genSalt(10)
        const handledPassword = await bcrypt.hash(password, salt)
        req.body.password = handledPassword
        const newUser = new User(req.body)
        await newUser.save()
        res.status(200).send({ message: "user created successfully", success: true })
    } catch (error) {
        res.status(500).send({ message: "Error creating user", success: false, error })
    }
})

router.post('/login', async (req, res) => {
    try {

    } catch {

    }
})

module.exports = router