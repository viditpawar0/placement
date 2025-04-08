import React, { useState } from 'react';
import axios from 'axios';
import config from '../../config';
import '../user/FormStyles.css';

function UpdatePlacement() {
  const [formData, setFormData] = useState({ id: '', company: '', package: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${config.BASE_URL}/api/placement/edit/${formData.id}/`, formData);
      console.log('Placement updated successfully:', response.data);
      alert('Placement updated successfully!');
    } catch (error) {
      console.error('Error updating placement:', error);
      alert('Failed to update placement. Please try again.');
    }
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
