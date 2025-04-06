import React, { useState } from 'react';
import '../user/FormStyles.css';

function CreatePlacement() {
  const [formData, setFormData] = useState({ student: '', company: '', job_role: '', package: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to create placement
    console.log('Creating placement:', formData);
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
          placeholder="Enter student name"
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
      <button className="form-button" type="submit">Create Placement</button>
    </form>
  );
}

export default CreatePlacement;
