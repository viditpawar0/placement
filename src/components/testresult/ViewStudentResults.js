import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ViewStudentResults() {
  const { username } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`/api/testresult/student/${username}/`)
      .then((response) => response.json())
      .then((data) => setResults(data));
  }, [username]);

  return (
    <div>
      <h2>Results for {username}</h2>
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
