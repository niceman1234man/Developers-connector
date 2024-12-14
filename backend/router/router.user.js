import express from 'express'
import { getUser,registerUser } from '../controller/controller.user.js';
const router =express.Router();

router.get('test',getUser);
router.post('register',registerUser);


export default router;