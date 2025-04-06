import React, { useState } from 'react';
import './FormStyles.css';

function DeleteUser() {
  const [userId, setUserId] = useState('');

  const handleChange = (e) => {
    setUserId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to delete user
    console.log('Deleting user with ID:', userId);
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
