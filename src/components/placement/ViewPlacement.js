import React, { useState } from 'react';
import axios from 'axios';
import config from '../../config';
import '../user/FormStyles.css';

function ViewPlacement() {
  const [placementId, setPlacementId] = useState('');
  const [placementData, setPlacementData] = useState(null);

  const handleChange = (e) => {
    setPlacementId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${config.BASE_URL}/api/placement/${placementId}/`);
      setPlacementData(response.data);
      console.log('Placement fetched successfully:', response.data);
    } catch (error) {
      console.error('Error fetching placement:', error);
      alert('Failed to fetch placement. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>View Placement</h2>
        <div className="form-group">
          <label>Placement ID:</label>
          <input
            type="text"
            value={placementId}
            onChange={handleChange}
            placeholder="Enter placement ID"
            required
          />
        </div>
        <button className="form-button" type="submit">View Placement</button>
      </form>
      {placementData && (
        <div className="user-details">
          <h3>Placement Details</h3>
          <p><strong>Student:</strong> {placementData.student}</p>
          <p><strong>Company:</strong> {placementData.company}</p>
          <p><strong>Job Role:</strong> {placementData.job_role}</p>
          <p><strong>Package:</strong> {placementData.package}</p>
        </div>
      )}
    </div>
  );
}

export default ViewPlacement;
