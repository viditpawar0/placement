import React, { useState } from 'react';
import axios from 'axios';
import config from '../../config';
import './FormStyles.css';

function UpdateUser() {
  const [formData, setFormData] = useState({ id: '', name: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${config.BASE_URL}/api/user/edit/${formData.username}/`, formData);
      console.log('User updated successfully:', response.data);
      alert('User updated successfully!');
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Failed to update user. Please try again.');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Update User</h2>
      <div className="form-group">
        <label>User ID:</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="Enter user ID"
          required
        />
      </div>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter new name"
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter new email"
        />
      </div>
      <button className="form-button" type="submit">Update User</button>
    </form>
  );
}

export default UpdateUser;
