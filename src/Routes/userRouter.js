import {Router} from 'express';
import {userHandler, userCreate }from '../Handlers/userHandlers.js'

const userRouter = Router();

userRouter.get('/user', userHandler)
userRouter.post('/user/create', userCreate)


export default userRouter;