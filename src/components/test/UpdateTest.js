import React, { useState } from 'react';
import '../user/FormStyles.css';

function UpdateTest() {
  const [formData, setFormData] = useState({ id: '', name: '', description: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to update test
    console.log('Updating test:', formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Update Test</h2>
      <div className="form-group">
        <label>Test ID:</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="Enter test ID"
          required
        />
      </div>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter new name"
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter new description"
        />
      </div>
      <button className="form-button" type="submit">Update Test</button>
    </form>
  );
}

export default UpdateTest;
