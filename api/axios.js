import axios from 'axios';

const ApiAxios = axios.create({
    baseURL: 'http://localhost:8080/',
    
    },

);

ApiAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

export default ApiAxios;