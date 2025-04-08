import React, { useState } from 'react';
import '../user/FormStyles.css';
import axios from 'axios';
import config from '../../config';

function UpdateInternship() {
  const [formData, setFormData] = useState({
    id: '',
    role: '',
    company_name: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${config.BASE_URL}/api/internship/edit/${formData.id}/`, formData);
      console.log('Internship updated successfully:', response.data);
      alert('Internship updated successfully!');
    } catch (error) {
      console.error('Error updating internship:', error);
      alert('Failed to update internship. Please try again.');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Update Internship</h2>
      <div className="form-group">
        <label>Internship ID:</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="Enter internship ID"
          required
        />
      </div>
      <div className="form-group">
        <label>Role:</label>
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="Enter new role"
          required
        />
      </div>
      <div className="form-group">
        <label>Company Name:</label>
        <input
          type="text"
          name="company_name"
          value={formData.company_name}
          onChange={handleChange}
          placeholder="Enter new company name"
          required
        />
      </div>
      <button className="form-button" type="submit">Update Internship</button>
    </form>
  );
}

export default UpdateInternship;
