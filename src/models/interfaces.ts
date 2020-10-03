import {Document} from 'mongoose';

// models
export interface IUser extends Document{
  firstName: string;
  lastName: string;
  email: string;
  mobilePhone: string;
  authorisationRefs: [string];
}

export interface IExercise extends Document{
  name: string;
  description: string;
  muscleRefs: [string];
}

// controller
export interface ICommonCrudController {
  Index(req: Express.Request, res: Express.Response, arg: any): void;
  Show(req: Express.Request, res: Express. Request, arg: any): void;
  Create(req: Express.Request, res: Express. Request, arg: any): void;
  Update(req: Express.Request, res: Express. Request, arg: any): void;
  Delete(req: Express.Request, res: Express. Request, arg: any): void;
}

export interface IExerciseController {
  exerciseIndex(req: Express.Request, res: Express.Response): void;
  getExercise(req: Express.Request, res: Express.Response): void;
  createExercise(req: Express.Request, res: Express.Response): void;
  updateExercise(req: Express.Request, res: Express.Response): void;
  deleteExercise(req: Express.Request, res: Express.Response): void;
}

export interface IUserController {
  userIndex(req: Express.Request, res: Express.Response): void;
  getUser(req: Express.Request, res: Express.Response): void;
  createUser(req: Express.Request, res: Express.Response): void;
  updateUser(req: Express.Request, res: Express.Response): void;
  deleteUser(req: Express.Request, res: Express.Response): void;
}