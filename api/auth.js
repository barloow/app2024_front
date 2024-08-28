import ApiAxios from "./axios";

export const RegisterUser = async (userData) => {
    try{
        const response = await ApiAxios.post('/users/register', userData);
        return response.data;
    }catch(e){
        console.log('Error with registration!!!!!!')
    }
};

export const LoginUser = async (userData) =>{
    try{
        const response = await ApiAxios.post('/users/login', userData);
        return response.data;
    }catch (e) {
        console.log('Error with login!!!!!!')
    }
};

export const LogoutUser = () => {
    localStorage.removeItem('token');
};

