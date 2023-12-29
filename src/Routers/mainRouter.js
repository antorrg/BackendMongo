const {Router} = require('express');
const mainRouter = Router();
const getRouter = require('./getRouter');


mainRouter.use(getRouter);


module.exports = mainRouter;