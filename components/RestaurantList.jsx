import React, { useEffect, useState } from "react";
import {getAllRestaurants} from '../services/RestaurantService';
import { Link } from 'react-router-dom';


const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect (() =>{
        const fetchRestaurants = async () => {
            const data = await getAllRestaurants();
            setRestaurants(data);
        };
        fetchRestaurants();
    }, []);

    return <div>
        <h2>Restaurants</h2>
        <ul>
            {restaurants.map((restaurant) => (
                <li key={restaurant._id}>
                    <Link to={`/restaurant/${restaurant._id}`}>{restaurant.name}</Link>
                </li>
            ))};
        </ul>
    </div>
};

export default RestaurantList;