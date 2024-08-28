import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRestaurantById } from '../services/RestaurantService';
import Menu from './Menu';
import ReviewList from './ReviewList';
import ReservationForm from './Reservation';

function RestaurantDetail() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      const data = await getRestaurantById(id);
      setRestaurant(data);
    };
    fetchRestaurant();
  }, [id]);

  if (!restaurant) return <p>Loading...</p>;

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.description}</p>
      <Menu restaurantId={restaurant._id} />
      <ReviewList restaurantId={restaurant._id} />
      <ReservationForm restaurantId={restaurant._id} />
    </div>
  );
}

export default RestaurantDetail;
