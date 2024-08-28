import ApiAxios from "../api/axios";

export const getMenuByRestaurant = async (restaurantId) => {
  try {
    const response = await ApiAxios.get(`/menus/restaurant/${restaurantId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching menu for restaurant ${restaurantId}:`, error);
    throw error;
  }
};
