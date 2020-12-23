const db = require('../model')
module.exports = (app) => {

    //Workout Route

    //get all
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (err, workouts) => {
            if (err) {
                console.log(err);
            } else {
                res.json(workouts)
            }
        });
    });

    //add excerise
    app.put("/api/workouts/:id", ({ params, body }, res) => {
        console.log(body); 
        db.Workout.findOneAndUpdate({ _id: params.id },
            { $push: { excercises: body } },
            { new: true, runValidators: true }
        ).then(dbWorkout => {res.json(dbWorkout)})
    });

    
    //create new workout
    app.post('/api/workouts', (req, res) => {
        db.Workout.create({}).then(newWorkout => {
            res.json(newWorkout);
        });
    });

    //stats
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(data => {
                console.log(data)
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    });


    app.post("/api/workouts/range", (req, res) => {
        db.Workout.create({})
            .then(data => res.json(data))
            console.log(data)
            .catch(err => {
                res.json(err)
            })
    });

}