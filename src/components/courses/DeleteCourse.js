import React, { useState } from 'react';
import '../user/FormStyles.css';

function DeleteCourse() {
  const [courseId, setCourseId] = useState('');

  const handleChange = (e) => {
    setCourseId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to delete course
    console.log('Deleting course with ID:', courseId);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Delete Course</h2>
      <div className="form-group">
        <label>Course ID:</label>
        <input
          type="text"
          value={courseId}
          onChange={handleChange}
          placeholder="Enter course ID"
          required
        />
      </div>
      <button className="form-button" type="submit">Delete Course</button>
    </form>
  );
}

export default DeleteCourse;
