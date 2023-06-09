const express = require('express')
const router = express.Router()
const { authenticateToken } = require('../controllers/authenticateToken')
const { postExerciseData, getExerciseByDate, getAllDataByWorkout, getWorkoutByDate, getDataByDate } = require('../controllers/workoutDataController')


router
    .route('/')
    .post(authenticateToken, postExerciseData)

router
    .route('/exercise/:id/:date')
    .get(authenticateToken, getExerciseByDate)

router
    .route('/dates/:id')
    .get(authenticateToken, getAllDataByWorkout)

router
    .route('/current-day/:date')
    .get(authenticateToken, getDataByDate)

router
    .route('/workouts/:id/:date')
    .get(authenticateToken, getWorkoutByDate)

module.exports = router
