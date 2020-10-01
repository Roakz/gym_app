import {Request, Response} from 'express';

export const userIndex = (req: Request, res: Response):void => {
    res.status(200).json({message: "userIndex"});
};

export const getUser = (req: Request, res: Response):void => {
    res.status(200).json({message: "getUser"});
};

export const createUser = (req: Request, res: Response):void => {
    res.status(200).json({message: "createUser"});
};

export const updateUser = (req: Request, res: Response):void => {
    res.status(200).json({message: "updateUser"});
};

export const deleteUser = (req: Request, res: Response):void => {
    res.status(200).json({message: "deleteUser"});
};
