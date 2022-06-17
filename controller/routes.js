const express = require('express')
const router = express.Router()

// Index
app.get('/', async (req, res) => {
    try {
      const workouts = await Workout.find({})
    } catch (error) {
        console.log(`Error: ${error}`)
        res.json({error: 'something went wrong - check console'})
    }
  })
  
  // Create
  app.post('/new', async (req, res) => {
    try {
      const workout = await Workout.create(req.body)
      res.json(workout)
    } catch (error) {
      console.log(`Error: ${error}`)
        res.json({error: 'something went wrong - check console'})
    }
  })
  
  // Update
  app.put('/:id', async (req, res) => {
    try {
      const workout = await Workout.findByIdAndUpdate(req.params.id, req.body)
      res.json(workout)
    } catch (error) {
      console.log(`Error: ${error}`)
        res.json({error: 'something went wrong - check console'})
    }
  })
  
  // Delete
  app.delete('/:id', async (req, res) => {
    try {
      const workout = await Workout.findByIdAndDelete(req.params.id, req.body)
      res.json(workout)
    } catch (error) {
      console.log(`Error: ${error}`)
        res.json({error: 'something went wrong - check console'})
    }
  })