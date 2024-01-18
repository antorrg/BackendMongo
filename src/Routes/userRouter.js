import {Router} from 'express';
import userHandler from '../Handlers/userHandlers.js'

const userRouter = Router();

userRouter.get('/user', userHandler)


export default userRouter;