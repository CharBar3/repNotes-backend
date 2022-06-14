const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()

require('dotenv').config()
const {PORT, MONGODB_URL} = process.env

// connect Mongoose
mongoose.connect(MONGODB_URL)

mongoose.connection
.on('connected', () => console.log("MongoDB connected"))
.on('error', (error) => console.log(`error connecting to MongoDB: ${error}`))


// Index
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Create
app.post('/workout', async (req, res) => {
  try {
    
  } catch (error) {
    
  }
})

// Update

// Delete

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})