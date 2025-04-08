import React, { useState } from 'react';
import axios from 'axios';
import config from '../../config';
import '../user/FormStyles.css';

function DeleteInternship() {
  const [internshipId, setInternshipId] = useState('');

  const handleChange = (e) => {
    setInternshipId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`${config.BASE_URL}/api/internship/delete/${internshipId}/`);
      console.log('Internship deleted successfully:', response.data);
      alert('Internship deleted successfully!');
    } catch (error) {
      console.error('Error deleting internship:', error);
      alert('Failed to delete internship. Please try again.');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Delete Internship</h2>
      <div className="form-group">
        <label>Internship ID:</label>
        <input
          type="text"
          value={internshipId}
          onChange={handleChange}
          placeholder="Enter internship ID"
          required
        />
      </div>
      <button className="form-button" type="submit">Delete Internship</button>
    </form>
  );
}

export default DeleteInternship;
