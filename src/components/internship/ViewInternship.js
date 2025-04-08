import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import config from '../../config';
import '../user/FormStyles.css';

function ViewInternship() {
  const { user } = useContext(AppContext);
  const [internshipData, setInternshipData] = useState([]);

  useEffect(() => {
    if (user.username) {
      // Fetch internships for the logged-in user
      fetch(`${config.BASE_URL}/api/internship/all/${user.username}/`)
        .then((response) => response.json())
        .then((data) => setInternshipData(data))
        .catch((error) => console.error('Error fetching internship data:', error));
    }
  }, [user.username]);

  return (
    <div className="form-container">
      <h2>My Internships</h2>
      {internshipData.length > 0 ? (
        internshipData.map((internship) => (
          <div key={internship.id} className="user-details">
            <h3>Internship Details</h3>
            <p><strong>Company Name:</strong> {internship.company_name}</p>
            <p><strong>Role:</strong> {internship.role}</p>
            <p><strong>Start Date:</strong> {internship.start_date}</p>
            <p><strong>End Date:</strong> {internship.end_date}</p>
            <p><strong>Description:</strong> {internship.description}</p>
            <p><strong>Stipend:</strong> {internship.stipend || 'Not Provided'}</p>
          </div>
        ))
      ) : (
        <p>No internships found.</p>
      )}
    </div>
  );
}

export default ViewInternship;
