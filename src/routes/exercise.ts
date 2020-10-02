import express, {Router}from 'express';

import {
  exerciseIndex,
  getExercise,
  createExercise,
  updateExercise,
  deleteExercise
} from '../controllers/exercise';

const router: Router = express.Router();

router.get('/', exerciseIndex);
router.get('/:userId', getExercise);
router.post('/', createExercise);
router.put('/:userId', updateExercise);
router.delete('/:userId', deleteExercise);

export default router;