import React, { useState } from 'react';
import '../user/FormStyles.css';

function CreateCourse() {
  const [formData, setFormData] = useState({ name: '', description: '', duration: '', fee: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to create course
    console.log('Creating course:', formData);
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
