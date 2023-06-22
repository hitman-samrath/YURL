import express from 'express'
import cors from 'cors'
import './database.js'
import Signup from './Routes/Auth/Signup.js'
import Login from './Routes/Auth/Login.js'
const app = express()
const port=process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(Signup)
app.use(Login)

app.listen(port, ()=>{
  console.log('Server is running on port 3001')
})