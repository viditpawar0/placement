import React, { useState } from 'react';
import axios from 'axios';
import config from '../../config';
import '../user/FormStyles.css';

function CreateTest() {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    description: '',
    syllabus: '',
    test_type: '',
    duration: '',
    total_marks: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.BASE_URL}/api/test/create/`, formData);
      console.log('Test created successfully:', response.data);
      alert('Test created successfully!');
    } catch (error) {
      console.error('Error creating test:', error);
      alert('Failed to create test. Please try again.');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Create Test</h2>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter test name"
          required
        />
      </div>
      <div className="form-group">
        <label>Course:</label>
        <input
          type="text"
          name="course"
          value={formData.course}
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
        <label>Syllabus:</label>
        <input
          type="text"
          name="syllabus"
          value={formData.syllabus}
          onChange={handleChange}
          placeholder="Enter syllabus"
          required
        />
      </div>
      <div className="form-group">
        <label>Test Type:</label>
        <input
          type="text"
          name="test_type"
          value={formData.test_type}
          onChange={handleChange}
          placeholder="Enter test type"
          required
        />
      </div>
      <div className="form-group">
        <label>Duration:</label>
        <input
          type="number"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          placeholder="Enter duration (in minutes)"
          required
        />
      </div>
      <div className="form-group">
        <label>Total Marks:</label>
        <input
          type="number"
          name="total_marks"
          value={formData.total_marks}
          onChange={handleChange}
          placeholder="Enter total marks"
          required
        />
      </div>
      <div className="form-group">
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <button className="form-button" type="submit">Create Test</button>
    </form>
  );
}

export default CreateTest;
