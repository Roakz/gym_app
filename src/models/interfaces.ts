import {Document} from 'mongoose';

// models
export interface IUser extends Document{
  firstName: string;
  lastName: string;
  email: string;
  mobilePhone: string;
  workoutRefs: [string];
  password: string;
  username: String;
  role: string;
  passwordReset: boolean;
}

export interface IExercise extends Document{
  name: string;
  description: string;
  muscleRefs: [string];
}

interface IExerciseObj{
  exerciseRef: string;
  reps: string;
}

export interface IWorkout extends Document{
  title: string;
  description: string;
  exerciseObj: [IExerciseObj];
  imageSlug: string;
  startDate: Date;
  finishDate: Date;
  trainerNotes: string;
}

// controllers
export interface ICommonCrudController {
  Index(req: Express.Request, res: Express.Response, arg: any): void;
  Show(req: Express.Request, res: Express. Response, arg: any): void;
  Create(req: Express.Request, res: Express.Response, arg: any): void;
  Update(req: Express.Request, res: Express.Response, arg: any): void;
  Delete(req: Express.Request, res: Express.Response, arg: any): void;
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

export interface IWorkoutController {
  workoutIndex(req: Express.Request, res: Express.Response): void;
  getWorkout(req: Express.Request, res: Express.Response): void;
  createWorkout(req: Express.Request, res: Express.Response): void;
  updateWorkout(req: Express.Request, res: Express.Response): void;
  deleteWorkout(req: Express.Request, res: Express.Response): void;
}
