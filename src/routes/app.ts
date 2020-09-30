import express, {Router}from 'express';
import test from '../controllers/hello_world';

const router: Router = express.Router();

router.get("/",test);

export default router;