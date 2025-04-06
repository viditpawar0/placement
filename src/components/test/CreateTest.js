import React, { useState } from 'react';
import '../user/FormStyles.css';

function CreateTest() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    syllabus: '',
    test_type: '',
    duration: '',
    total_marks: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to create test
    console.log('Creating test:', formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Create Test</h2>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter test name"
          required
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter description"
          required
        />
      </div>
      <div className="form-group">
        <label>Syllabus:</label>
        <input
          type="text"
          name="syllabus"
          value={formData.syllabus}
          onChange={handleChange}
          placeholder="Enter syllabus"
          required
        />
      </div>
      <div className="form-group">
        <label>Test Type:</label>
        <input
          type="text"
          name="test_type"
          value={formData.test_type}
          onChange={handleChange}
          placeholder="Enter test type"
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
        <label>Total Marks:</label>
        <input
          type="number"
          name="total_marks"
          value={formData.total_marks}
          onChange={handleChange}
          placeholder="Enter total marks"
          required
        />
      </div>
      <div className="form-group">
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <button className="form-button" type="submit">Create Test</button>
    </form>
  );
}

export default CreateTest;
