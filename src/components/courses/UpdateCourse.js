import React, { useState } from 'react';
import '../user/FormStyles.css';
import axios from 'axios';
import config from '../../config';

function UpdateCourse() {
  const [formData, setFormData] = useState({ id: '', name: '', description: '', fee: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${config.BASE_URL}/api/course/edit/${formData.id}/`, formData);
      console.log('Course updated successfully:', response.data);
      alert('Course updated successfully!');
    } catch (error) {
      console.error('Error updating course:', error);
      alert('Failed to update course. Please try again.');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Update Course</h2>
      <div className="form-group">
        <label>Course ID:</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="Enter course ID"
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
      <div className="form-group">
        <label>Fee:</label>
        <input
          type="number"
          name="fee"
          value={formData.fee}
          onChange={handleChange}
          placeholder="Enter new fee"
        />
      </div>
      <button className="form-button" type="submit">Update Course</button>
    </form>
  );
}

export default UpdateCourse;
