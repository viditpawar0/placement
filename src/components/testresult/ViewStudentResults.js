import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import config from '../../config';

function ViewStudentResults() {
  const { user } = useContext(AppContext);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (user.username) {
      // Fetch test results for the logged-in user
      fetch(`${config.BASE_URL}/api/testresult/student/${user.username}/`)
        .then((response) => response.json())
        .then((data) => setResults(data))
        .catch((error) => console.error('Error fetching test results:', error));
    }
  }, [user.username]);

  return (
    <div>
      <h2>Results for {user.username}</h2>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            Test: {result.test_name}, Score: {result.score}, Status: {result.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewStudentResults;
