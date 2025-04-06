import React, { useState } from 'react';
import '../user/FormStyles.css';

function ViewTest() {
  const [testId, setTestId] = useState('');
  const [testData, setTestData] = useState(null);

  const handleChange = (e) => {
    setTestId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to fetch test data
    console.log('Fetching test with ID:', testId);
    // Mock response
    setTestData({ id: testId, name: 'Sample Test', description: 'Sample Description', test_type: 'MCQ', date: '2023-10-01' });
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
