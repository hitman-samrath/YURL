import express from 'express'
import bcrypt from 'bcryptjs'
import user from '../../Model/UserSchema.js'

const router = express.Router()

router.post('/login', (req, res) => {
    const { email, password } = req.body
    if (!email || !password)
        return res.status(400).json({ "message": "Please fill in all the fields" })
    user.findOne({ email: email })
        .then(foundUser => {
            if (!foundUser)
                return res.status(400).json({ "message": "User with this email does not exist. Please signup first" })
            bcrypt.compare(password, foundUser.password)
                .then((correctPassword) => {
                    if (!correctPassword)
                        return res.status(400).json({ "message": "Incorrect Password. Try Again..." })
                    return res.status(200).json({ "message": "Success" })
                })
                .catch((err) => {
                    console.log(err)
                    res.status(500).json({ "message": err })
                })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({ "message": err })
        })
})