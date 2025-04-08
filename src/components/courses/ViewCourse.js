import React, { useState } from 'react';
import axios from 'axios';
import config from '../../config';
import '../user/FormStyles.css';

function ViewCourse() {
  const [courseId, setCourseId] = useState('');
  const [courseData, setCourseData] = useState(null);

  const handleChange = (e) => {
    setCourseId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${config.BASE_URL}/api/course/${courseId}/`);
      setCourseData(response.data);
      console.log('Course fetched successfully:', response.data);
    } catch (error) {
      console.error('Error fetching course:', error);
      alert('Failed to fetch course. Please try again.');
    }
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
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
        <div className="course-details">
          <h3>Course Details</h3>
          <p><strong>Name:</strong> {courseData.name}</p>
          <p><strong>Description:</strong> {courseData.description}</p>
          <p><strong>Duration:</strong> {courseData.duration}</p>
          <p><strong>Certification:</strong> {courseData.certification ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
}

export default ViewCourse;
