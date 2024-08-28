import React from 'react';
import ReservationForm from '../components/Reservation';

const ProfilePage =()=> {
  return (
    <div>
      <h1>Your Profile</h1>
      <p>Here you can see and manage your reservations.</p>
      <ReservationForm />
    </div>
  );
}

export default ProfilePage;
