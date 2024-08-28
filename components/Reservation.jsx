import React, { useState } from 'react';
import { addReservation } from '../services/ReservationService';

const ReservationForm =({ restaurantId })=> {
  const [reservation, setReservation] = useState({ date: '', time: '', guests: 1 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addReservation({ ...reservation, restaurant: restaurantId });
    alert('Reservation successful!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make a Reservation</h2>
      <input
        type="date"
        value={reservation.date}
        onChange={(e) => setReservation({ ...reservation, date: e.target.value })}
        required
      />
      <input
        type="time"
        value={reservation.time}
        onChange={(e) => setReservation({ ...reservation, time: e.target.value })}
        required
      />
      <input
        type="number"
        value={reservation.guests}
        onChange={(e) => setReservation({ ...reservation, guests: e.target.value })}
        min="1"
        required
      />
      <button type="submit">Reserve</button>
    </form>
  );
}

export default ReservationForm;
