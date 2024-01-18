import axios from 'axios'

const userController = async ()=>{
    try {
        const response = await axios(`https://jsonplaceholder.typicode.com/users`);
        const data =response.data;
        if(!data){throw new Error('Error fetching data')}
        return data;
    } catch (error) {
        throw error;
    }
}

export default userController;