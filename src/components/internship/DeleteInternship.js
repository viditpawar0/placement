import React, { useState } from 'react';
import '../user/FormStyles.css';

function DeleteInternship() {
  const [internshipId, setInternshipId] = useState('');

  const handleChange = (e) => {
    setInternshipId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to delete internship
    console.log('Deleting internship with ID:', internshipId);
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
