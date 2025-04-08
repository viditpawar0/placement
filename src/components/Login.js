import React, { useState, useContext } from 'react';
import axios from 'axios';
import config from '../config';
import { AppContext } from '../context/AppContext';
import './FormStyles.css';

function Login({ onSignUpClick }) {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const { setUser } = useContext(AppContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.BASE_URL}/api/user/login/`, formData);
      console.log('Login successful:', response.data);
      setUser({ username: response.data.username, role: response.data.role });
      alert(`Welcome, ${response.data.username}!`);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || err.response?.data?.message || 'An unexpected error occurred. Please try again.');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p className="error-message error-top">{error}</p>}
      <div className="form-group">
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your username"
          required
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
      </div>
      <button className="form-button" type="submit">Login</button>
      <p>
        Don't have an account? <button type="button" className="link-button" onClick={onSignUpClick}>Sign Up</button>
      </p>
    </form>
  );
}

export default Login;
