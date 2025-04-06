import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import AddTestResult from './testresult/AddTestResult';
import ViewStudentResults from './testresult/ViewStudentResults';
import ViewTestResults from './testresult/ViewTestResults';
import EditTestResult from './testresult/EditTestResult';
import ViewTopResults from './testresult/ViewTopResults';

function TestResultModule() {
  return (
    <div>
      <Routes>
        <Route path="add" element={<AddTestResult />} />
        <Route path="student/:username" element={<ViewStudentResults />} />
        <Route path="test/:testId" element={<ViewTestResults />} />
        <Route path="edit/:id" element={<EditTestResult />} />
        <Route path="top/:testId" element={<ViewTopResults />} />
      </Routes>
      <nav>
        <NavLink to="/testresult/add" className={({ isActive }) => (isActive ? 'active-link' : '')}>Add Test Result</NavLink>
        <NavLink to="/testresult/student/awryan" className={({ isActive }) => (isActive ? 'active-link' : '')}>View Student Results</NavLink>
        <NavLink to="/testresult/test/1" className={({ isActive }) => (isActive ? 'active-link' : '')}>View Test Results</NavLink>
        <NavLink to="/testresult/edit/1" className={({ isActive }) => (isActive ? 'active-link' : '')}>Edit Test Result</NavLink>
        <NavLink to="/testresult/top/1" className={({ isActive }) => (isActive ? 'active-link' : '')}>View Top Results</NavLink>
      </nav>
    </div>
  );
}

export default TestResultModule;
