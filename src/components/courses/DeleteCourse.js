import React, { useState } from 'react';
import '../user/FormStyles.css';
import axios from 'axios';
import config from '../../config';

function DeleteCourse() {
  const [courseId, setCourseId] = useState('');

  const handleChange = (e) => {
    setCourseId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`${config.BASE_URL}/api/course/delete/${courseId}/`);
      console.log('Course deleted successfully:', response.data);
      alert('Course deleted successfully!');
    } catch (error) {
      console.error('Error deleting course:', error);
      alert('Failed to delete course. Please try again.');
    }
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
