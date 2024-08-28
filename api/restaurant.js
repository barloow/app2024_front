import ApiAxios from "./axios";

export const getRestaurants = async () => {
    try {
        const response = await ApiAxios.get('/restaurants');
        return response.data;
    } catch (error) {
        console.error('Errore nel recupero dei ristoranti:', error.response.data);
        throw error.response.data;
    }
};

export const addRestaurant = async (restaurantData) => {
    try {
        const response = await ApiAxios.post('/restaurants', restaurantData);
        return response.data;
    } catch (error) {
        console.error('Errore durante l\'aggiunta di un ristorante:', error.response.data);
        throw error.response.data;
    }
};

export const updateRestaurant = async (restaurantId, restaurantData) => {
    try {
        const response = await ApiAxios.put(`/restaurants/${restaurantId}`, restaurantData);
        return response.data;
    } catch (error) {
        console.error('Errore durante l\'aggiornamento del ristorante:', error.response.data);
        throw error.response.data;
    }
};

export const deleteRestaurant = async (restaurantId) => {
    try {
        const response = await ApiAxios.delete(`/restaurants/${restaurantId}`);
        return response.data;
    } catch (error) {
        console.error('Errore durante la cancellazione del ristorante:', error.response.data);
        throw error.response.data;
    }
};
