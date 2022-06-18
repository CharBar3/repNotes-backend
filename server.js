const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()
const Workout = require('./models/workout')
const cors = require('cors')


require('dotenv').config()
const {PORT, MONGODB_URL} = process.env

// connect Mongoose
mongoose.connect(MONGODB_URL)

mongoose.connection
.on('connected', () => console.log("MongoDB connected"))
.on('error', (error) => console.log(`error connecting to MongoDB: ${error}`))


// Mount Middleware 
app.use(cors())
app.use(morgan('dev'))
app.use(express.json()) 

// Routes
const repnotes = require('./controller/routes')
app.use('/repnotes', repnotes)

// Seed Route

const seedData = require('./models/seedData')
app.get('/seed', (req, res) => {
  Workout.deleteMany({}, (error, allWorkouts) => {})
  Workout.create(seedData, (error, data) => {
    res.redirect('/')
  })
})

app.get('/', (req, res) => {
  // res.send('home')
  res.redirect('/repnotes')
})

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})