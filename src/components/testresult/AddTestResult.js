import React, { useState } from 'react';
import './TestResultForm.css'; // Import the CSS file for styling

function AddTestResult() {
  const [formData, setFormData] = useState({ student_username: '', test: '', score: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/testresult/add/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form className="test-result-form" onSubmit={handleSubmit}>
      <label>
        Student Username:
        <input type="text" name="student_username" placeholder="Student Username" onChange={handleChange} />
      </label>
      <label>
        Test ID:
        <input type="number" name="test" placeholder="Test ID" onChange={handleChange} />
      </label>
      <label>
        Score:
        <input type="number" name="score" placeholder="Score" onChange={handleChange} />
      </label>
      <button type="submit">Add Test Result</button>
    </form>
  );
}

export default AddTestResult;
