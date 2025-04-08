import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import config from '../../config';
import './FormStyles.css';

function ViewUser() {
  const { user } = useContext(AppContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user.username) {
      // Fetch user data for the logged-in user
      fetch(`${config.BASE_URL}/api/user/view/${user.username}/`)
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => console.error('Error fetching user data:', error));
    }
  }, [user.username]);

  return (
    <div className="form-container">
      <h2>View User</h2>
      {userData ? (
        <div className="user-details">
          <h3>User Details</h3>
          <p><strong>Username:</strong> {userData.username}</p>
          <p><strong>Name:</strong> {userData.first_name} {userData.last_name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Course Pursuing:</strong> {userData.course_pursuing}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default ViewUser;
