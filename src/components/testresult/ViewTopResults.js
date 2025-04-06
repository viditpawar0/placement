import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ViewTopResults() {
  const { testId } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`/api/testresult/top/${testId}/`)
      .then((response) => response.json())
      .then((data) => setResults(data));
  }, [testId]);

  return (
    <div>
      <h2>Top Results for Test {testId}</h2>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            Student: {result.student_username}, Score: {result.score}, Rank: {result.rank}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewTopResults;
