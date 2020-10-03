import {Request, Response} from 'express';
import UserModel from '../models/user';
import CommonCrud from '../controllers/commonCrud';
import {IUserController} from '../models/interfaces';

export default class UserController extends CommonCrud implements IUserController {

  // index
  userIndex = (req: Request, res: Response):void => {
    this.Index(req, res, {model: UserModel});
  }

  // show
  getUser = (req: Request, res: Response):void => {
    this.Show(req, res, {model: UserModel});
  }

  // create
  createUser = (req: Request, res: Response):void => {
    this.Create(req, res, {model: UserModel});
  }

  // update
  updateUser = (req: Request, res: Response):void => {
    this.Update(req, res, {model: UserModel});
  }

  // delete
  deleteUser = (req: Request, res: Response):void => {
    this.Delete(req, res, {model: UserModel});
  }
}