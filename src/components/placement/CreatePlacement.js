import React, { useState } from 'react';
import axios from 'axios';
import config from '../../config';
import '../user/FormStyles.css';

function CreatePlacement() {
  const [formData, setFormData] = useState({
    student: '',
    company: '',
    package: '',
    job_role: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.BASE_URL}/api/placement/createplacements/`, formData);
      console.log('Placement created successfully:', response.data);
      alert('Placement created successfully!');
    } catch (error) {
      console.error('Error creating placement:', error);
      alert('Failed to create placement. Please try again.');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Create Placement</h2>
      <div className="form-group">
        <label>Student:</label>
        <input
          type="text"
          name="student"
          value={formData.student}
          onChange={handleChange}
          placeholder="Enter student username"
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
          placeholder="Enter company name"
          required
        />
      </div>
      <div className="form-group">
        <label>Package:</label>
        <input
          type="number"
          name="package"
          value={formData.package}
          onChange={handleChange}
          placeholder="Enter package"
          required
        />
      </div>
      <div className="form-group">
        <label>Job Role:</label>
        <input
          type="text"
          name="job_role"
          value={formData.job_role}
          onChange={handleChange}
          placeholder="Enter job role"
          required
        />
      </div>
      <button className="form-button" type="submit">Create Placement</button>
    </form>
  );
}

export default CreatePlacement;
