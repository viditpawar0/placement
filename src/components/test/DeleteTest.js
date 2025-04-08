import React, { useState } from 'react';
import axios from 'axios';
import config from '../../config';
import '../user/FormStyles.css';

function DeleteTest() {
  const [testId, setTestId] = useState('');

  const handleChange = (e) => {
    setTestId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`${config.BASE_URL}/api/test/delete/${testId}/`);
      console.log('Test deleted successfully:', response.data);
      alert('Test deleted successfully!');
    } catch (error) {
      console.error('Error deleting test:', error);
      alert('Failed to delete test. Please try again.');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Delete Test</h2>
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
      <button className="form-button" type="submit">Delete Test</button>
    </form>
  );
}

export default DeleteTest;
