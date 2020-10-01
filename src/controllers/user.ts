import {Request, Response} from 'express';
import {UserModel as User} from '../models/user';

export const userIndex = (req: Request, res: Response):void => {
    res.status(200).json({message: "userIndex"});
};

export const getUser = (req: Request, res: Response):void => {
    res.status(200).json({message: "getUser"});
};

export const createUser = (req: Request, res: Response):void => {
  const {firstName, lastName, email, mobilePhone} = req.body;
  const newUser = new User({firstName, lastName, email, mobilePhone});
  newUser.save((err: any) => {
   if (err) {
    res.status(500).json({message: "Sorry! we had something go wrong!"});
   } else {
    res.status(200).json({message: "User created"});
   }
  });
};

export const updateUser = (req: Request, res: Response):void => {
    res.status(200).json({message: "updateUser"});
};

export const deleteUser = (req: Request, res: Response):void => {
    res.status(200).json({message: "deleteUser"});
};
