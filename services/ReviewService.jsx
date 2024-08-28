import ApiAxios from "../api/axios";

export const getReviewsByRestaurant = async (restaurantId) => {
  try {
    const response = await ApiAxios.get(`/reviews/restaurant/${restaurantId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching reviews for restaurant ${restaurantId}:`, error);
    throw error;
  }
};

export const addReview = async (reviewData) => {
  try {
    const response = await ApiAxios.post('/reviews', reviewData);
    return response.data;
  } catch (error) {
    console.error('Error adding review:', error);
    throw error;
  }
};
