import express from 'express';
import test from '../controllers/hello_world';

const router: any = express.Router();

router.get("/",test);

export default router;