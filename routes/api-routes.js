const db = require("../models");

module.exports = function (app) {
    
  // GET ROUTES
  // GET all the exercises
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  });
};
