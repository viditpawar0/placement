import React, { useState } from 'react';
import '../user/FormStyles.css';

function DeletePlacement() {
  const [placementId, setPlacementId] = useState('');

  const handleChange = (e) => {
    setPlacementId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to delete placement
    console.log('Deleting placement with ID:', placementId);
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
