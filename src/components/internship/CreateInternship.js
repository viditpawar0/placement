import React, { useState } from 'react';
import axios from 'axios';
import config from '../../config';
import '../user/FormStyles.css';

function CreateInternship() {
  const [formData, setFormData] = useState({
    student: '',
    company_name: '',
    role: '',
    start_date: '',
    end_date: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.BASE_URL}/api/internship/add/`, formData);
      console.log('Internship created successfully:', response.data);
      alert('Internship created successfully!');
    } catch (error) {
      console.error('Error creating internship:', error);
      alert('Failed to create internship. Please try again.');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Create Internship</h2>
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
        <label>Company Name:</label>
        <input
          type="text"
          name="company_name"
          value={formData.company_name}
          onChange={handleChange}
          placeholder="Enter company name"
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
          placeholder="Enter role"
          required
        />
      </div>
      <div className="form-group">
        <label>Start Date:</label>
        <input
          type="date"
          name="start_date"
          value={formData.start_date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>End Date:</label>
        <input
          type="date"
          name="end_date"
          value={formData.end_date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter description"
          required
        />
      </div>
      <button className="form-button" type="submit">Create Internship</button>
    </form>
  );
}

export default CreateInternship;
