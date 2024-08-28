import ApiAxios from '../api/axios';



export const login = async (email, password) => {
  try {
    const response = await ApiAxios.post('/users/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const register = async (name, email, password) => {
  try {
    const response = await ApiAxios.post('//users/register', { name, email, password });
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};


