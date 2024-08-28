import ApiAxios from "../api/axios";

export const addReservation = async (reservationData) => {
  try {
    const response = await ApiAxios.post('/reservations', reservationData);
    return response.data;
  } catch (error) {
    console.error('Error adding reservation:', error);
    throw error;
  }
};

export const getReservationsByUser = async (userId) => {
  try {
    const response = await ApiAxios.get(`/reservations/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching reservations for user ${userId}:`, error);
    throw error;
  }
};
