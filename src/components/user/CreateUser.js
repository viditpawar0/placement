import React, { useState } from 'react';
import axios from 'axios';
import config from '../../config';
import './FormStyles.css'; // Add a CSS file for consistent form styling

function CreateUser() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    role: 'student',
    course_pursuing: 'computer_science',
    first_name: '',
    last_name: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.BASE_URL}/api/user/createuser/`, formData);
      console.log('User created successfully:', response.data);
      alert('User created successfully!');
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Failed to create user. Please try again.');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Create User</h2>
      <div className="form-group">
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter username"
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
          placeholder="Enter password"
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
          placeholder="Enter email"
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
      <div className="form-group">
        <label>First Name:</label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          placeholder="Enter first name"
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
          placeholder="Enter last name"
          required
        />
      </div>
      <button className="form-button" type="submit">Create User</button>
    </form>
  );
}

export default CreateUser;
