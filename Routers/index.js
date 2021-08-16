import express from 'express';
import { User, register, UserInfo } from '../Controller/Auth.js';
const router = express.Router();

router.post('/register', register);
router.get('/user', User);
router.get('/info/:id',UserInfo)
export default router;
