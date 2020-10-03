import {Request, Response} from 'express';
import ExerciseModel from '../models/exercise';
import CommonCrud from './commonCrud';
import {IExerciseController} from '../models/interfaces';

// CHANGE TO CLASS THAT INHERITS FROM CRUD CONTROLLER.

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
}






// // delete
// export const deleteExercise = (req: Request, res: Response):void => {
//   ExerciseModel.findOne({_id: req.params.userId}, (err: any, doc: any) => {
//     if (err) {
//       res.status(500).json({message: "Uh Oh! that document doesnt exist!"});
//     } else {
//       doc.remove((error: any) => {
//         if (error) {
//           res.status(500).json({message: "Uh Oh! something went wrong!"});
//         } else {
//           res.status(200).json({message: "exercise destroyed!"});
//         }
//       });
//     }
//   });
// };