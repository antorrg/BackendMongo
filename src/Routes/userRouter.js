import {Router} from 'express';
import {userHandler, userCreate, userLogin }from '../Handlers/users/userHandlers.js'
import {middleCreate, middleLogin} from '../Utils/middleLogin.js';
import { verifyToken } from '../Utils/encryptation.js';

const userRouter = Router();

userRouter.get('/user', verifyToken, userHandler)


//Creación y autenticacion usuario
userRouter.post('/user/create', middleCreate, userCreate)
userRouter.post('/user/login', middleLogin, userLogin)

export default userRouter;