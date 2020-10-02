import express, {Router}from 'express';
import ExerciseController  from '../controllers/exercise';
import {IExerciseController} from '../models/interfaces';

const router: Router = express.Router();

const Exercise: IExerciseController = new ExerciseController();

router.get('/', Exercise.exerciseIndex);
router.get('/:userId', Exercise.getExercise);
// router.post('/', createExercise);
// router.put('/:userId', updateExercise);
// router.delete('/:userId', deleteExercise);

export default router;