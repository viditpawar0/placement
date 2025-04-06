import React, { useState } from 'react';
import '../user/FormStyles.css';

function ViewCourse() {
  const [courseId, setCourseId] = useState('');
  const [courseData, setCourseData] = useState(null);

  const handleChange = (e) => {
    setCourseId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to fetch course data
    console.log('Fetching course with ID:', courseId);
    // Mock response
    setCourseData({ id: courseId, name: 'Sample Course', description: 'Sample Description', duration: '3 months', fee: '5000' });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>View Course</h2>
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
        <button className="form-button" type="submit">View Course</button>
      </form>
      {courseData && (
        <div className="user-details">
          <h3>Course Details</h3>
          <p><strong>Name:</strong> {courseData.name}</p>
          <p><strong>Description:</strong> {courseData.description}</p>
          <p><strong>Duration:</strong> {courseData.duration}</p>
          <p><strong>Fee:</strong> {courseData.fee}</p>
        </div>
      )}
    </div>
  );
}

export default ViewCourse;
