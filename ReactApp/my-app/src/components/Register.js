import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

function Register() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    role: 'student',
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/api/register/', form);
      alert('Registered successfully!');
      navigate('/login');
    } catch (err) {
      alert('Registration failed');
      console.error(err);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card shadow p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <div className="mb-4 text-center">
          <h2 className="fw-bold">Register</h2>
          <p className="text-muted">Create your E-Learning account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter username"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="password2"
              className="form-control"
              placeholder="Re-enter password"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Select Role</label>
            <select name="role" className="form-select" onChange={handleChange}>
              <option value="student">Student</option>
              <option value="mentor">Mentor</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit" className="btn btn-success w-100">
            Register
          </button>
        </form>

        <div className="text-center mt-3">
          <p>Already have an account?</p>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => navigate('/login')}
          >
            Go to Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
