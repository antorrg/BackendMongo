import {Router} from 'express';
import {userHandler, userCreate }from '../Handlers/userHandlers.js'
import middleLogin from '../Utils/middleLogin.js';
import { verifyToken } from '../Utils/encryptation.js';

const userRouter = Router();

userRouter.get('/user', verifyToken, userHandler)
userRouter.post('/user/create', middleLogin, userCreate)


export default userRouter;