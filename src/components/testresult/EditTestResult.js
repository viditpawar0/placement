import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './TestResultForm.css'; // Import the CSS file for styling

function EditTestResult() {
  const { id } = useParams();
  const [score, setScore] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/testresult/edit/${id}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ score }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form className="test-result-form" onSubmit={handleSubmit}>
      <label>
        New Score:
        <input type="number" placeholder="New Score" value={score} onChange={(e) => setScore(e.target.value)} />
      </label>
      <button type="submit">Update Score</button>
    </form>
  );
}

export default EditTestResult;
