const db = require('../model')
module.exports = function (app) {

    // get all workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        })
            .catch(err => {
                res.status(400).json(err);
            });
    })

    // stats
    app.get("/api/workouts/range", ({ }, res) => {
        db.Workout.find({}).then((dbWorkout) => {
            res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
        });
    });

    // create new workout
    app.post("/api/workouts/", (req, res) => {
        db.Workout.create(req.body).then((dbWorkout) => {
            res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
        });
    });

    // update workout from an id and add exercise 
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(
            { _id: req.params.id }, { exercises: req.body },
            { new: true, runValidators: true }
        ).then((dbWorkout) => {
            res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
        });
    });
};