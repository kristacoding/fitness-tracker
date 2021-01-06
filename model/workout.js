const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true
            },
            name: {
                type: String,
                trim: true,
                required: "Name is Required"
            },
            duration: {
                type: Number,
                required: "Duration is Required"
            },
            weight: {
                type: Number,
                default: 0
            },
            reps: {
                type: String,
                default: 0
            },
            sets: {
                type: Number,
                default: 0,
            },
            distance: {
                type: Number,

            }
        }
    ],
    totalDuration: {
        type: Number,
        default: 0,
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout; 