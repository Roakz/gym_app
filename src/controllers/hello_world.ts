import {Request, Response} from 'express';

const test = (req: Request, res: Response): any => {
  res.status(418).json({message: "Hello world"});
};

export default test;