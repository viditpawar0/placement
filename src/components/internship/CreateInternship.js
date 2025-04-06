import React, { useState } from 'react';
import '../user/FormStyles.css';

function CreateInternship() {
  const [formData, setFormData] = useState({ student: '', company: '', role: '', duration: '', stipend: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to create internship
    console.log('Creating internship:', formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Create Internship</h2>
      <div className="form-group">
        <label>Student:</label>
        <input
          type="text"
          name="student"
          value={formData.student}
          onChange={handleChange}
          placeholder="Enter student name"
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
          placeholder="Enter company name"
          required
        />
      </div>
      <div className="form-group">
        <label>Role:</label>
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="Enter role"
          required
        />
      </div>
      <div className="form-group">
        <label>Duration:</label>
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          placeholder="Enter duration"
          required
        />
      </div>
      <div className="form-group">
        <label>Stipend:</label>
        <input
          type="number"
          name="stipend"
          value={formData.stipend}
          onChange={handleChange}
          placeholder="Enter stipend"
          required
        />
      </div>
      <button className="form-button" type="submit">Create Internship</button>
    </form>
  );
}

export default CreateInternship;
