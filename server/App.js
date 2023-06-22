import express from 'express'
import './database.js'
const app = express()
const port=process.env.PORT || 3001

app.listen(port, ()=>{
  console.log('Server is running on port 3001')
})