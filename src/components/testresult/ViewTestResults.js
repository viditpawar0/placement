import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import config from '../../config';

function ViewTestResults() {
  const { testId } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`${config.BASE_URL}/api/testresult/test/${testId}/`)
      .then((response) => response.json())
      .then((data) => setResults(data))
      .catch((error) => console.error('Error fetching test results:', error));
  }, [testId]);

  return (
    <div>
      <h2>Results for Test {testId}</h2>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            Student: {result.student_username}, Score: {result.score}, Status: {result.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewTestResults;
