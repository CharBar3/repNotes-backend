const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const workoutSchema = new Schema({
//     title: {type: String, required: true},
//     // exercises: [exerciseSchema],
//     exercises: [],
//     date: {type: Date}
// })

const workoutSchema = new Schema ({
    title: String,
    exercises: [{
        exerciseName: String,
        sets: [{
            reps: Number,
            weight: Number,
            setComments: String
        }],
        exerciseComments: String
    }],
    workoutComments: String,
    date: Date
})





const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout