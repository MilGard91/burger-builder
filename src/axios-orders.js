import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-55ebf.firebaseio.com/'
});

export default instance;