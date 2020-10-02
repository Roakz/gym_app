import {Request, Response} from 'express';

// This will be the parent class that hold common crud functionality.

// index
export const Index = (req: Request, res: Response, arg: any):void => {
  if (! arg.model) {
    process.stderr.write('No Model Provided to commonCrud');
    res.status(500).json({error: "No model provided for CRUD function."});
  } else {
    arg.model.find({}, (err:any, result: any) => {
      if (err) {
        res.status(500).json({message: "Sorry! we had something go wrong server side!"});
      } else {
        res.status(200).json({users: result});
      }
    });
  }
};


// // show
// export const getExercise = (req: Request, res: Response):void => {
//     ExerciseModel.findOne({_id: req.params.userId}, (err: any, result: any) => {
//       if (err) {
//           res.status(500).json({message: "Sorry! we had something go wrong!"});
//         } else {
//           res.status(200).json({user: result});
//         }
//     });
// };

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