import {Router} from 'express';
import {userHandler, userCreate }from '../Handlers/userHandlers.js'

const userRouter = Router();

userRouter.get('/user', userHandler)
userRouter.post('/create', userCreate)


export default userRouter;