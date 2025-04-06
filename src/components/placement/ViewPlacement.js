import React, { useState } from 'react';
import '../user/FormStyles.css';

function ViewPlacement() {
  const [placementId, setPlacementId] = useState('');
  const [placementData, setPlacementData] = useState(null);

  const handleChange = (e) => {
    setPlacementId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to fetch placement data
    console.log('Fetching placement with ID:', placementId);
    // Mock response
    setPlacementData({ id: placementId, student: 'John Doe', company: 'Tech Corp', job_role: 'Engineer', package: '10 LPA' });
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
