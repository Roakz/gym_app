import {Request, Response} from 'express';
import UserModel from '../models/user';

// index
export const userIndex = (req: Request, res: Response):void => {
  UserModel.find({}, (err:any, result: any) => {
    if (err) {
      res.status(500).json({message: "Sorry! we had something go wrong!"});
    } else {
        res.status(200).json({users: result});
    }
  });
};

// show
export const getUser = (req: Request, res: Response):void => {
    UserModel.findOne({_id: req.params.userId}, (err: any, result: any) => {
      if (err) {
          res.status(500).json({message: "Sorry! we had something go wrong!"});
        } else {
          res.status(200).json({user: result});
        }
    });
};

// create
export const createUser = (req: Request, res: Response):void => {
  const {firstName, lastName, email, mobilePhone} = req.body;
  const newUser = new UserModel({firstName, lastName, email, mobilePhone});
  newUser.save((err: any) => {
   if (err) {
    res.status(500).json({message: "Sorry! we had something go wrong!"});
   } else {
    res.status(200).json({message: "User created"});
   }
  });
};

// update
export const updateUser = (req: Request, res: Response):void => {
  UserModel.updateOne({_id: req.params.userId}, req.body, (err: any, doc: any) => {
    if (err) {
      res.status(500).json({message: "Sorry! we had something go wrong! update declined!"});
     } else {
      res.status(200).json({message: `User updated: ${doc}`});
     }
  });
};

// delete
export const deleteUser = (req: Request, res: Response):void => {
  UserModel.findOne({_id: req.params.userId}, (err: any, doc: any) => {
    if (err) {
      res.status(500).json({message: "Uh Oh! that document doesnt exist!"});
    } else {
      doc.remove((error: any) => {
        if (error) {
          res.status(500).json({message: "Uh Oh! something went wrong!"});
        } else {
          res.status(200).json({message: "user destroyed!"});
        }
      });
    }
  });
};
