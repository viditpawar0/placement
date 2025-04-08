import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';
import './TestResultForm.css'; // Import the CSS file for styling

function EditTestResult() {
  const { id } = useParams();
  const [formData, setFormData] = useState({ id, score: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${config.BASE_URL}/api/testresult/edit/${formData.id}/`, formData);
      console.log('Test result updated successfully:', response.data);
      alert('Test result updated successfully!');
    } catch (error) {
      console.error('Error updating test result:', error);
      alert('Failed to update test result. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form className="test-result-form" onSubmit={handleSubmit}>
      <label>
        New Score:
        <input
          type="number"
          name="score"
          placeholder="New Score"
          value={formData.score}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Update Score</button>
    </form>
  );
}

export default EditTestResult;
