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

}




// // create
// export const createExercise = (req: Request, res: Response):void => {
//   const {firstName, lastName, email, mobilePhone} = req.body;
//   const newUser = new ExerciseModel({firstName, lastName, email, mobilePhone});
//   newUser.save((err: any) => {
//    if (err) {
//     res.status(500).json({message: "Sorry! we had something go wrong!"});
//    } else {
//     res.status(200).json({message: "Exercise created"});
//    }
//   });
// };

// // update
// export const updateExercise = (req: Request, res: Response):void => {
//   ExerciseModel.updateOne({_id: req.params.userId}, req.body, (err: any, doc: any) => {
//     if (err) {
//       res.status(500).json({message: "Sorry! we had something go wrong! update declined!"});
//      } else {
//       res.status(200).json({message: `User updated: ${doc}`});
//      }
//   });
// };

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