import express, {Router}from 'express';

import {
  userIndex,
  getUser,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/user';

const router: Router = express.Router();

router.get('/', userIndex);
router.get('/:userId', getUser);
router.post('/', createUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);

export default router;