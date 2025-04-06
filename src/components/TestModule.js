import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import CreateTest from './test/CreateTest';
import UpdateTest from './test/UpdateTest';
import DeleteTest from './test/DeleteTest';
import ViewTest from './test/ViewTest';

function TestModule() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ViewTest />} />
        <Route path="create" element={<CreateTest />} />
        <Route path="update" element={<UpdateTest />} />
        <Route path="delete" element={<DeleteTest />} />
        <Route path="view" element={<ViewTest />} />
      </Routes>
      <nav>
        <NavLink to="/test/create" className={({ isActive }) => (isActive ? 'active-link' : '')}>Create Test</NavLink>
        <NavLink to="/test/update" className={({ isActive }) => (isActive ? 'active-link' : '')}>Update Test</NavLink>
        <NavLink to="/test/delete" className={({ isActive }) => (isActive ? 'active-link' : '')}>Delete Test</NavLink>
        <NavLink to="/test/view" className={({ isActive }) => (isActive ? 'active-link' : '')}>View Test</NavLink>
        <NavLink to="/testresult" className={({ isActive }) => (isActive ? 'active-link' : '')}>Test Results</NavLink>
      </nav>
    </div>
  );
}

export default TestModule;
