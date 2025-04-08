import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';
import './FormStyles.css';

function SignUp({ onLoginClick }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: '',
    course_pursuing: 'computer_science',
    role: 'student',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.BASE_URL}/api/user/createuser/`, formData);
      console.log('Sign-up successful:', response.data);
      alert('Account created successfully! Please log in.');
      onLoginClick();
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || err.response?.data?.message || 'An unexpected error occurred. Please try again.');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
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
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="form-group">
        <label>First Name:</label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          placeholder="Enter your first name"
          required
        />
      </div>
      <div className="form-group">
        <label>Last Name:</label>
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          placeholder="Enter your last name"
          required
        />
      </div>
      <div className="form-group">
        <label>Role:</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div className="form-group">
        <label>Course Pursuing:</label>
        <select
          name="course_pursuing"
          value={formData.course_pursuing}
          onChange={handleChange}
          required
        >
          <option value="computer_science">Computer Science</option>
          <option value="data_science">Data Science</option>
          <option value="business_management">Business Management</option>
          <option value="mechanical_engineering">Mechanical Engineering</option>
          <option value="electrical_engineering">Electrical Engineering</option>
          <option value="civil_engineering">Civil Engineering</option>
          <option value="biotechnology">Biotechnology</option>
          <option value="economics">Economics</option>
        </select>
      </div>
      <button className="form-button" type="submit">Sign Up</button>
      <p>
        Already have an account? <button type="button" className="link-button" onClick={onLoginClick}>Login</button>
      </p>
    </form>
  );
}

export default SignUp;
