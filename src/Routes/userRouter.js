import {Router} from 'express';
import {userHandler, userCreate, userLogin, userUpdHandler }from '../Handlers/users/userHandlers.js'
import {middleCreate, middleLogin, verifyToken} from '../Utils/index.js';

const userRouter = Router();

userRouter.get('/user', verifyToken, userHandler)


// Creación y autenticacion usuario >>>>>>>>>>>>>>>>>>>>>>

userRouter.post('/user/create', middleCreate, userCreate)
userRouter.post('/user/login', middleLogin, userLogin)

// Actualizacion usuario ====================================

userRouter.put('/user/:id', verifyToken, userUpdHandler)

export default userRouter;