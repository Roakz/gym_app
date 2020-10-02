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
    UserModel.find({_id: req.params.userId}, (err: any, result: any) => {
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
    res.status(200).json({message: "updateUser"});
};

// delete
export const deleteUser = (req: Request, res: Response):void => {
    res.status(200).json({message: "deleteUser"});
};
