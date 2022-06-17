const express = require('express')
const router = express.Router()
const Workout = require('../models/workout')

// Index
router.get('/', async (req, res) => {
    console.log('you made it here')
    try {
      const workouts = await Workout.find({})
      res.json(workouts)
    } catch (error) {
        console.log(`Error: ${error}`)
        res.json({error: 'something went wrong - check console'})
    }
  })
  
  // Create
  router.post('/new', async (req, res) => {
    try {
      const workout = await Workout.create(req.body)
      res.json(workout)
    } catch (error) {
      console.log(`Error: ${error}`)
        res.json({error: 'something went wrong - check console'})
    }
  })
  
  // Update
  router.put('/:id', async (req, res) => {
    try {
      const workout = await Workout.findByIdAndUpdate(req.params.id, req.body)
      res.json(workout)
    } catch (error) {
      console.log(`Error: ${error}`)
        res.json({error: 'something went wrong - check console'})
    }
  })
  
  // Delete
  router.delete('/:id', async (req, res) => {
    try {
      const workout = await Workout.findByIdAndDelete(req.params.id, req.body)
      res.json(workout)
    } catch (error) {
      console.log(`Error: ${error}`)
        res.json({error: 'something went wrong - check console'})
    }
  })

  module.exports = router