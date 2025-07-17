import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';
// import './Login.css'; // Optional for extra styling

function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/api/login/', form);
      localStorage.setItem('accessToken', res.data.access);
      localStorage.setItem('refreshToken', res.data.refresh);
      alert('Login successful');
      navigate('/');
    } catch (err) {
      alert('Login failed');
      console.error(err);
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
      <div className="card p-4 shadow-lg login-card animate__animated animate__fadeIn" style={{ width: '100%', maxWidth: '420px' }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold">Welcome Back</h2>
          <p className="text-muted">Please login to continue</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" className="form-control" placeholder="Enter username" onChange={handleChange} required />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="form-control" placeholder="Enter password" onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-2">Login</button>
        </form>
        <div className="text-center mt-3">
          <p>Don't have an account?</p>
          <button className="btn btn-outline-light btn-sm" onClick={handleRegister}>Register Now</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
