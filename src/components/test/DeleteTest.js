import React, { useState } from 'react';
import '../user/FormStyles.css';

function DeleteTest() {
  const [testId, setTestId] = useState('');

  const handleChange = (e) => {
    setTestId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to delete test
    console.log('Deleting test with ID:', testId);
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
