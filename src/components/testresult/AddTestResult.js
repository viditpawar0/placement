import React, { useState } from 'react';
import axios from 'axios';
import config from '../../config';
import './TestResultForm.css'; // Import the CSS file for styling

function AddTestResult() {
  const [formData, setFormData] = useState({
    student_username: '',
    test: '',
    score: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.BASE_URL}/api/testresult/add/`, formData);
      console.log('Test result added successfully:', response.data);
      alert('Test result added successfully!');
    } catch (error) {
      console.error('Error adding test result:', error);
      alert('Failed to add test result. Please try again.');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Add Test Result</h2>
      <div className="form-group">
        <label>Student Username:</label>
        <input
          type="text"
          name="student_username"
          value={formData.student_username}
          onChange={handleChange}
          placeholder="Enter student username"
          required
        />
      </div>
      <div className="form-group">
        <label>Test ID:</label>
        <input
          type="number"
          name="test"
          value={formData.test}
          onChange={handleChange}
          placeholder="Enter test ID"
          required
        />
      </div>
      <div className="form-group">
        <label>Score:</label>
        <input
          type="number"
          name="score"
          value={formData.score}
          onChange={handleChange}
          placeholder="Enter score"
          required
        />
      </div>
      <button className="form-button" type="submit">Add Test Result</button>
    </form>
  );
}

export default AddTestResult;
