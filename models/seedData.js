// const workoutSchema = new Schema ({
//     title: String,
//     exercises: [{
//         exerciseName: String,
//         sets: [{
//             reps: Number,
//             weight: Number,
//             setNotes: String
//         }],
//         exerciseNotes: String
//     }],
//     workoutNotes: String,
//     date: Date
// })

module.exports = [
    {
        title: 'Leg Day',
        exercises: [{
            name: 'Leg Press',
            sets: [{reps: 20, weight: 200, comments: "yeet!"}, {reps: 20, weight: 200}, {reps: 20, weight: 200}],
            notes: 'Feeling strong on leg press definitely should go up in weight next week.'
        },
        {
            name: 'Walking Lunges',
            sets: [{reps: 26, weight: 50}, {reps: 26, weight: 50}, {reps: 26, weight: 50}],
            notes: 'lunges are the worst exercise known to man'
        }
        ],
        date: '6/6/2022'
    }
]