import ApiAxios from "../api/axios";

export const getAllRestaurants = async () => {
  try {
    const response = await ApiAxios.get('/restaurants');
    return response.data;
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    throw error;
  }
};

export const getRestaurantById = async (id) => {
  try {
    const response = await ApiAxios.get(`/restaurants/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching restaurant with id ${id}:`, error);
    throw error;
  }
};
