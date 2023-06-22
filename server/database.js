import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.mongoURL)
    .then(console.log("Connected to MongoDB Atlas Database"))
    .catch(err=>console.log(err))