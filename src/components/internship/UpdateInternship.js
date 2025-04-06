import React, { useState } from 'react';
import '../user/FormStyles.css';

function UpdateInternship() {
  const [formData, setFormData] = useState({ id: '', company: '', role: '', stipend: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to update internship
    console.log('Updating internship:', formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Update Internship</h2>
      <div className="form-group">
        <label>Internship ID:</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="Enter internship ID"
          required
        />
      </div>
      <div className="form-group">
        <label>Company:</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Enter new company name"
        />
      </div>
      <div className="form-group">
        <label>Role:</label>
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="Enter new role"
        />
      </div>
      <div className="form-group">
        <label>Stipend:</label>
        <input
          type="number"
          name="stipend"
          value={formData.stipend}
          onChange={handleChange}
          placeholder="Enter new stipend"
        />
      </div>
      <button className="form-button" type="submit">Update Internship</button>
    </form>
  );
}

export default UpdateInternship;
