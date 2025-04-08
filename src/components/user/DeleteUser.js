import React, { useState } from 'react';
import axios from 'axios';
import config from '../../config';
import './FormStyles.css';

function DeleteUser() {
  const [userId, setUserId] = useState('');

  const handleChange = (e) => {
    setUserId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`${config.BASE_URL}/api/user/delete/${userId}/`);
      console.log('User deleted successfully:', response.data);
      alert('User deleted successfully!');
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user. Please try again.');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Delete User</h2>
      <div className="form-group">
        <label>User ID:</label>
        <input
          type="text"
          value={userId}
          onChange={handleChange}
          placeholder="Enter user ID"
          required
        />
      </div>
      <button className="form-button" type="submit">Delete User</button>
    </form>
  );
}

export default DeleteUser;
