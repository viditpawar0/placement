import React, { useState } from 'react';
import axios from 'axios';
import config from '../../config';
import '../user/FormStyles.css';

function ViewTest() {
  const [testId, setTestId] = useState('');
  const [testData, setTestData] = useState(null);

  const handleChange = (e) => {
    setTestId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${config.BASE_URL}/api/test/${testId}/`);
      setTestData(response.data);
      console.log('Test fetched successfully:', response.data);
    } catch (error) {
      console.error('Error fetching test:', error);
      alert('Failed to fetch test. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>View Test</h2>
        <div className="form-group">
          <label>Test ID:</label>
          <input
            type="text"
            value={testId}
            onChange={handleChange}
            placeholder="Enter test ID"
            required
          />
        </div>
        <button className="form-button" type="submit">View Test</button>
      </form>
      {testData && (
        <div className="user-details">
          <h3>Test Details</h3>
          <p><strong>Name:</strong> {testData.name}</p>
          <p><strong>Description:</strong> {testData.description}</p>
          <p><strong>Test Type:</strong> {testData.test_type}</p>
          <p><strong>Date:</strong> {testData.date}</p>
        </div>
      )}
    </div>
  );
}

export default ViewTest;
