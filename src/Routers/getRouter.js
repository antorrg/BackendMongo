import {Router} from 'express';
import {getHandler, getHandlerId} from '../Handlers/getHandler';



const getRouter = Router();

getRouter.get('/', getHandler);

getRouter.get('/:id', getHandlerId)

export default getRouter;