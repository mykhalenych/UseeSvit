import express from 'express';

import {catchError} from '../utils/catchError.js';
import userController from '../controllers/userController.js';

export const userRouter = new express.Router();

userRouter.get('/', catchError(userController.getAll));
userRouter.post('/me', catchError(userController.getMe));
