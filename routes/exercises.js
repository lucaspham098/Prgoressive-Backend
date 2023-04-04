const express = require('express')
const { authenticateToken } = require('../controllers/authenticateToken')
const { addExercise, getExercises, addToWorkout } = require('../controllers/exercisesController')
const router = express.Router()

router
    .route('/')
    .post(authenticateToken, addExercise)
    .get(authenticateToken, getExercises)
    .patch(authenticateToken, addToWorkout)

module.exports = router