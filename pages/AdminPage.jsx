import React, { useState, useEffect } from 'react';
import { getAllRestaurants, addRestaurantAdmin, updateRestaurantAdmin, deleteRestaurantAdmin } from '../api/admin';

const AdminPage = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [newRestaurant, setNewRestaurant] = useState({ name: '', location: '' });

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        try {
            const data = await getAllRestaurants();
            setRestaurants(data);
        } catch (error) {
            console.error('Errore nel recupero dei ristoranti:', error);
        }
    };

    const handleInputChange = (e) => {
        setNewRestaurant({ ...newRestaurant, [e.target.name]: e.target.value });
    };

    const handleAddRestaurant = async () => {
        try {
            await addRestaurantAdmin(newRestaurant);
            fetchRestaurants(); // Aggiorna la lista
        } catch (error) {
            console.error('Errore durante l\'aggiunta di un ristorante:', error);
        }
    };

    const handleUpdateRestaurant = async (id) => {
        const updatedData = { name: 'Nome aggiornato', location: 'Luogo aggiornato' };
        try {
            await updateRestaurantAdmin(id, updatedData);
            fetchRestaurants(); // Aggiorna la lista
        } catch (error) {
            console.error('Errore durante l\'aggiornamento del ristorante:', error);
        }
    };

    const handleDeleteRestaurant = async (id) => {
        try {
            await deleteRestaurantAdmin(id);
            fetchRestaurants(); // Aggiorna la lista
        } catch (error) {
            console.error('Errore durante la cancellazione del ristorante:', error);
        }
    };

    return (
        <div>
            <h1>Gestione Ristoranti</h1>
            <ul>
                {restaurants.map((restaurant) => (
                    <li key={restaurant._id}>
                        {restaurant.name} - {restaurant.location}
                        <button onClick={() => handleUpdateRestaurant(restaurant._id)}>Aggiorna</button>
                        <button onClick={() => handleDeleteRestaurant(restaurant._id)}>Elimina</button>
                    </li>
                ))}
            </ul>
            <div>
                <input type="text" name="name" placeholder="Nome Ristorante" onChange={handleInputChange} />
                <input type="text" name="location" placeholder="Luogo Ristorante" onChange={handleInputChange} />
                <button onClick={handleAddRestaurant}>Aggiungi Ristorante</button>
            </div>
        </div>
    );
};

export default AdminPage;
