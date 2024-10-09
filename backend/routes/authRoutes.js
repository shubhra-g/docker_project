import express from 'express';
import { verifyEmail } from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.get('/verify/:uniqueString', verifyEmail)


export default authRouter;