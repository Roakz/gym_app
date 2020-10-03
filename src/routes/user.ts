import express, {Router}from 'express';

import UserController from '../controllers/user';
import {IUserController} from '../models/interfaces';

const router: Router = express.Router();

const User: IUserController = new UserController();

router.get('/', User.userIndex);
router.get('/:docId', User.getUser);
router.post('/', User.createUser);
router.put('/:docId', User.updateUser);
router.delete('/:docId', User.deleteUser);

export default router;