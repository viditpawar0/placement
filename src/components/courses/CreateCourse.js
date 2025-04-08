import React, { useState } from 'react';
import '../user/FormStyles.css';
import axios from 'axios';
import config from '../../config';

function CreateCourse() {
  const [formData, setFormData] = useState({ name: '', description: '', duration: '', fee: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.BASE_URL}/api/course/add/`, formData);
      console.log('Course created successfully:', response.data);
      alert('Course created successfully!');
    } catch (error) {
      console.error('Error creating course:', error);
      alert('Failed to create course. Please try again.');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Create Course</h2>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter course name"
          required
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter description"
          required
        />
      </div>
      <div className="form-group">
        <label>Duration:</label>
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          placeholder="Enter duration"
          required
        />
      </div>
      <div className="form-group">
        <label>Fee:</label>
        <input
          type="number"
          name="fee"
          value={formData.fee}
          onChange={handleChange}
          placeholder="Enter fee"
          required
        />
      </div>
      <button className="form-button" type="submit">Create Course</button>
    </form>
  );
}

export default CreateCourse;
