import React from 'react';
import RegisterForm from '../components/Register';
import LoginForm from '../components/Login';


const HomePage =()=> {
  return (
    <div>
      <h1>Welcome to Restaurant Reservation App</h1>
      <LoginForm/>
      <RegisterForm/>
    </div>
  );
}

export default HomePage;
