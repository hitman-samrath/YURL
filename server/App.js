import express from 'express'
const app = express()
const port=process.env.PORT || 3001

app.listen(port, ()=>{
  console.log('Server is running on port 3001')
})