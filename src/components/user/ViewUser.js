import React, { useState } from 'react';
import './FormStyles.css';

function ViewUser() {
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState(null);

  const handleChange = (e) => {
    setUserId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to fetch user data
    console.log('Fetching user with ID:', userId);
    // Mock response
    setUserData({ id: userId, name: 'John Doe', email: 'john.doe@example.com' });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>View User</h2>
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
        <button className="form-button" type="submit">View User</button>
      </form>
      {userData && (
        <div className="user-details">
          <h3>User Details</h3>
          <p><strong>ID:</strong> {userData.id}</p>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
        </div>
      )}
    </div>
  );
}

export default ViewUser;
