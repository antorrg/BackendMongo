import {getItems, getItemsById} from '../Controllers/getControllers';

const getHandler = async(req, res)=>{
    try {
        const response = await getItems(req,res);
        res.status(200).json(response)
    } catch (error) {
        console.error('el error esta en el handler')
        res.status(400).json({error: error.message})
    }
};

const getHandlerId = async(req, res)=>{
    const {id} = req.params;
    try {
        const response = await getItemsById(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};


export {
    getHandler,
    getHandlerId
    
};