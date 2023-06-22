import mongoose from 'mongoose'
const linkSchema=new mongoose.Schema({
    originalUrl:{
        type: String,
        required: true
    },
    customUrl:{
        type: String,
        required: true
    }
})

export default mongoose.model('links', linkSchema)