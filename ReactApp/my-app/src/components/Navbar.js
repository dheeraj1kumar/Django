import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken');

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">E-Learning</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Courses">Courses</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">About</Link>
          </li>
          {token && (
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
          )}
        </ul>
        <div>
          {!token ? (
            <>
              <Link className="btn btn-outline-light me-2" to="/login">Login</Link>
              <Link className="btn btn-light" to="/register">Register</Link>
            </>
          ) : (
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
