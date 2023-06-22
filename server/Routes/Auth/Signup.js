import express from 'express'
import user from '../../Model/UserSchema.js'
import validator from 'email-validator'
import bcrypt from 'bcryptjs'

const router = express.Router()

router.post('/signup', (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password)
        return res.status(400).json({ "message": "Please fill in all the fields" })
    if (!validator.validate(email))
        return res.status(400).json({ "message": "Please enter a valid email" })
    if (password.length < 6)
        return res.status(400).json({ "message": "Password must be atleast 6 characters long" })
    user.findOne({ email: email })
        .then(foundUser => {
            if (foundUser)
                return res.status(400).json({ "message": "User with this email already exists." })
            bcrypt.hash(password, 11)
                .then((hashedPassword) => {
                    const newUser = new user({
                        name: name.trim(),
                        email: email.toLowerCase().trim(),
                        password: hashedPassword
                    })
                    newUser.save()
                        .then(() => {
                            console.log("User added successfully")
                            res.status(200).json({ "message": "User added successfully" })
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
        .catch((err) => {
            console.log(err)
            res.status(500).json({ "message": err })
        })
})

export default router