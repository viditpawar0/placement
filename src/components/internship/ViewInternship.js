import React, { useState } from 'react';
import '../user/FormStyles.css';

function ViewInternship() {
  const [internshipId, setInternshipId] = useState('');
  const [internshipData, setInternshipData] = useState(null);

  const handleChange = (e) => {
    setInternshipId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to fetch internship data
    console.log('Fetching internship with ID:', internshipId);
    // Mock response
    setInternshipData({ id: internshipId, student: 'Jane Doe', company: 'Tech Corp', role: 'Intern', stipend: '5000' });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>View Internship</h2>
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
        <button className="form-button" type="submit">View Internship</button>
      </form>
      {internshipData && (
        <div className="user-details">
          <h3>Internship Details</h3>
          <p><strong>Student:</strong> {internshipData.student}</p>
          <p><strong>Company:</strong> {internshipData.company}</p>
          <p><strong>Role:</strong> {internshipData.role}</p>
          <p><strong>Stipend:</strong> {internshipData.stipend}</p>
        </div>
      )}
    </div>
  );
}

export default ViewInternship;
