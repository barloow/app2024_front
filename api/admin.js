import ApiAxios from "./axios";

// Ottieni tutte le prenotazioni (admin)
export const getAllReservations = async () => {
    try {
        const response = await ApiAxios.get('/admin/reservations');
        return response.data;
    } catch (error) {
        console.error('Errore nel recupero delle prenotazioni per l\'admin:', error.response.data);
        throw error.response.data;
    }
};

// Ottieni tutti i ristoranti (admin)
export const getAllRestaurants = async () => {
    try {
        const response = await ApiAxios.get('/admin/restaurants');
        return response.data;
    } catch (error) {
        console.error('Errore nel recupero dei ristoranti per l\'admin:', error.response.data);
        throw error.response.data;
    }
};

// Aggiungi un nuovo ristorante (admin)
export const addRestaurantAdmin = async (restaurantData) => {
    try {
        const response = await ApiAxios.post('/admin/restaurants', restaurantData);
        return response.data;
    } catch (error) {
        console.error('Errore durante l\'aggiunta di un ristorante per l\'admin:', error.response.data);
        throw error.response.data;
    }
};

// Modifica un ristorante (admin)
export const updateRestaurantAdmin = async (restaurantId, restaurantData) => {
    try {
        const response = await ApiAxios.put(`/admin/restaurants/${restaurantId}`, restaurantData);
        return response.data;
    } catch (error) {
        console.error('Errore durante l\'aggiornamento del ristorante per l\'admin:', error.response.data);
        throw error.response.data;
    }
};

// Cancella un ristorante (admin)
export const deleteRestaurantAdmin = async (restaurantId) => {
    try {
        const response = await ApiAxios.delete(`/admin/restaurants/${restaurantId}`);
        return response.data;
    } catch (error) {
        console.error('Errore durante la cancellazione del ristorante per l\'admin:', error.response.data);
        throw error.response.data;
    }
};
