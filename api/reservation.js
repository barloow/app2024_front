import ApiAxios from "./axios";

export const getReservations = async () => {
    try {
        const response = await ApiAxios.get('/reservations');
        return response.data;
    } catch (error) {
        console.error('Errore nel recupero delle prenotazioni:', error.response.data);
        throw error.response.data;
    }
};

export const addReservation = async (reservationData) => {
    try {
        const response = await ApiAxios.post('/reservations', reservationData);
        return response.data;
    } catch (error) {
        console.error('Errore durante l\'aggiunta di una prenotazione:', error.response.data);
        throw error.response.data;
    }
};

export const deleteReservation = async (reservationId) => {
    try {
        const response = await ApiAxios.delete(`/reservations/${reservationId}`);
        return response.data;
    } catch (error) {
        console.error('Errore durante la cancellazione della prenotazione:', error.response.data);
        throw error.response.data;
    }
};
