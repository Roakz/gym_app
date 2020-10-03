import {Request, Response} from 'express';
import ExerciseModel from '../models/exercise';
import CommonCrud from './commonCrud';
import {IExerciseController} from '../models/interfaces';

export default class ExerciseController extends CommonCrud implements IExerciseController{
  // index
  exerciseIndex = (req: Request, res: Response):void => {
    this.Index(req, res, {model: ExerciseModel});
  }

  // show
  getExercise = (req: Request, res: Response):void => {
    this.Show(req, res, {model: ExerciseModel});
  }

  // create
  createExercise = (req: Request, res: Response):void => {
    this.Create(req, res, {model: ExerciseModel});
  }

  // update
  updateExercise = (req: Request, res: Response):void => {
    this.Update(req, res, {model: ExerciseModel});
  }

  // delete
  deleteExercise = (req: Request, res: Response):void => {
    this.Delete(req, res, {model: ExerciseModel});
  }
}