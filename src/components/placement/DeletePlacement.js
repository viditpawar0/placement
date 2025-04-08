import React, { useState } from 'react';
import axios from 'axios';
import config from '../../config';
import '../user/FormStyles.css';

function DeletePlacement() {
  const [placementId, setPlacementId] = useState('');

  const handleChange = (e) => {
    setPlacementId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`${config.BASE_URL}/api/placement/delete/${placementId}/`);
      console.log('Placement deleted successfully:', response.data);
      alert('Placement deleted successfully!');
    } catch (error) {
      console.error('Error deleting placement:', error);
      alert('Failed to delete placement. Please try again.');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Delete Placement</h2>
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
      <button className="form-button" type="submit">Delete Placement</button>
    </form>
  );
}

export default DeletePlacement;
