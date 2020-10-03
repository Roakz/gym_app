import express, {Router}from 'express';

import WorkoutController from '../controllers/workout';
import {IWorkoutController} from '../models/interfaces';

const router: Router = express.Router();

const Workout: IWorkoutController = new WorkoutController();

router.get('/', Workout.workoutIndex);
router.get('/:docId', Workout.getWorkout);
router.post('/', Workout.createWorkout);
router.put('/:docId', Workout.updateWorkout);
router.delete('/:docId', Workout.deleteWorkout);

export default router;