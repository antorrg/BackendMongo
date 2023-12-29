const {Router} =require ('express');
const getRouter = Router();
const {getHandler, getHandlerId} =require ('../Handlers/getHandler');




getRouter.get('/', getHandler);

getRouter.get('/:id', getHandlerId)

module.exports = getRouter;