import {Request, Response} from 'express';
import WorkoutModel from '../models/workout';
import CommonCrud from '../controllers/commonCrud';
import {IWorkoutController} from '../models/interfaces';

export default class WorkoutController extends CommonCrud implements IWorkoutController {

  // index
  workoutIndex = (req: Request, res: Response):void => {
    this.Index(req, res, {model: WorkoutModel});
  }

  // show
  getWorkout = (req: Request, res: Response):void => {
    this.Show(req, res, {model: WorkoutModel});
  }

  // create
  createWorkout = (req: Request, res: Response):void => {
    this.Create(req, res, {model: WorkoutModel});
  }

  // update
  updateWorkout = (req: Request, res: Response):void => {
    this.Update(req, res, {model: WorkoutModel});
  }

  // delete
  deleteWorkout = (req: Request, res: Response):void => {
    this.Delete(req, res, {model: WorkoutModel});
  }
}