const axios =require ('axios');
require ('dotenv').config();

const {URL}=process.env;

const getItems = async()=>{
    try {
        const response = await axios(`${URL}/users`);
        if(!response){throw new Error('Data not found')}
        const data = response.data;
        return data;
    } catch (error) {
        throw error;
    }
};

const getItemsById = async (id)=>{
    try {
        const response = await axios(`${URL}/users/${id}`);
        if(!response){throw new Error('Data not found')}
        const data = response.data;
        return data;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getItems,
    getItemsById
};