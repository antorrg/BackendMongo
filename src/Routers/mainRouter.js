import {Router} from 'express'
import getRouter from './getRouter'

const mainRouter = Router();

mainRouter.use(getRouter);


export default mainRouter;