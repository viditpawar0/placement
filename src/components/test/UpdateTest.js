import React, { useState } from 'react';
import axios from 'axios';
import config from '../../config';
import '../user/FormStyles.css';

function UpdateTest() {
  const [formData, setFormData] = useState({ id: '', name: '', description: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${config.BASE_URL}/api/test/edit/${formData.id}/`, formData);
      console.log('Test updated successfully:', response.data);
      alert('Test updated successfully!');
    } catch (error) {
      console.error('Error updating test:', error);
      alert('Failed to update test. Please try again.');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Update Test</h2>
      <div className="form-group">
        <label>Test ID:</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="Enter test ID"
          required
        />
      </div>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter new name"
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter new description"
        />
      </div>
      <button className="form-button" type="submit">Update Test</button>
    </form>
  );
}

export default UpdateTest;
