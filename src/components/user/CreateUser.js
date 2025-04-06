import React, { useState } from 'react';
import './FormStyles.css'; // Add a CSS file for consistent form styling

function CreateUser() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to create user
    console.log('Creating user:', formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Create User</h2>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>
      <button className="form-button" type="submit">Create User</button>
    </form>
  );
}

export default CreateUser;
