import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';

const PredictorModule = () => {
  const [formData, setFormData] = useState({
    cgpa: '',
    internships: '',
    projects: '',
    workshops_certifications: '',
    aptitude_test_score: '',
    soft_skills: '',
    technical_skills: '',
  });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const predictPlacement = async () => {
    const { cgpa, internships, projects, workshops_certifications, aptitude_test_score, soft_skills, technical_skills } = formData;

    if (!cgpa || !internships || !projects || !workshops_certifications || !aptitude_test_score || !soft_skills || !technical_skills) {
      alert('Please fill in all the required fields.');
      return;
    }

    try {
      const res = await axios.post(`${config.BASE_URL}/api/predict/`, formData);
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Placement Predictor</h1>
      <div className="input-group">
        <label>
          CGPA:
          <input
            type="number"
            name="cgpa"
            placeholder="Enter CGPA"
            value={formData.cgpa}
            onChange={handleChange}
          />
        </label>
        <label>
          Internships:
          <input
            type="number"
            name="internships"
            placeholder="Enter number of internships"
            value={formData.internships}
            onChange={handleChange}
          />
        </label>
        <label>
          Projects:
          <input
            type="number"
            name="projects"
            placeholder="Enter number of projects"
            value={formData.projects}
            onChange={handleChange}
          />
        </label>
        <label>
          Workshops/Certifications:
          <input
            type="number"
            name="workshops_certifications"
            placeholder="Enter number of workshops/certifications"
            value={formData.workshops_certifications}
            onChange={handleChange}
          />
        </label>
        <label>
          Aptitude Test Score:
          <input
            type="number"
            name="aptitude_test_score"
            placeholder="Enter aptitude test score"
            value={formData.aptitude_test_score}
            onChange={handleChange}
          />
        </label>
        <label>
          Soft Skills (1-5):
          <input
            type="number"
            name="soft_skills"
            placeholder="Rate soft skills (1-5)"
            value={formData.soft_skills}
            onChange={handleChange}
          />
        </label>
        <label>
          Technical Skills (1-5):
          <input
            type="number"
            name="technical_skills"
            placeholder="Rate technical skills (1-5)"
            value={formData.technical_skills}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="button-group">
        <button onClick={predictPlacement}>Predict Placement</button>
      </div>
      {response && (
        <div className="card">
          <h2>Prediction Results</h2>
          <p><strong>Predicted Class:</strong> {response.predicted_class === 1 ? 'Placed' : 'Not Placed'}</p>
          <p><strong>Placement Probability:</strong> {(response.placement_probability * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default PredictorModule;
