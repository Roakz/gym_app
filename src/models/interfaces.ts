import {Document} from 'mongoose';

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