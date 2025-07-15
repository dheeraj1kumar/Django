import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/login');
  };

  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/register">Register</Link> | 
      <Link to="/login">Login</Link> | 
      <Link to="/profile">Profile</Link> | 
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;
