import React, { useState } from 'react';
import '../user/FormStyles.css';

function UpdatePlacement() {
  const [formData, setFormData] = useState({ id: '', company: '', package: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to update placement
    console.log('Updating placement:', formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Update Placement</h2>
      <div className="form-group">
        <label>Placement ID:</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="Enter placement ID"
          required
        />
      </div>
      <div className="form-group">
        <label>Company:</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Enter new company name"
        />
      </div>
      <div className="form-group">
        <label>Package:</label>
        <input
          type="number"
          name="package"
          value={formData.package}
          onChange={handleChange}
          placeholder="Enter new package"
        />
      </div>
      <button className="form-button" type="submit">Update Placement</button>
    </form>
  );
}

export default UpdatePlacement;
