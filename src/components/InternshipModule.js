import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import CreateInternship from './internship/CreateInternship';
import UpdateInternship from './internship/UpdateInternship';
import DeleteInternship from './internship/DeleteInternship';
import ViewInternship from './internship/ViewInternship';

function InternshipModule({ role }) {
  return (
    <div>
      <h1>Internship Module</h1>
      {role === 'admin' ? (
        <div>
          <Routes>
            <Route path="/" element={<ViewInternship />} />
            <Route path="create" element={<CreateInternship />} />
            <Route path="update" element={<UpdateInternship />} />
            <Route path="delete" element={<DeleteInternship />} />
            <Route path="view" element={<ViewInternship />} />
          </Routes>
          <nav>
            <NavLink to="/internship/create" className={({ isActive }) => (isActive ? 'active-link' : '')}>Create Internship</NavLink>
            <NavLink to="/internship/update" className={({ isActive }) => (isActive ? 'active-link' : '')}>Update Internship</NavLink>
            <NavLink to="/internship/delete" className={({ isActive }) => (isActive ? 'active-link' : '')}>Delete Internship</NavLink>
            <NavLink to="/internship/view" className={({ isActive }) => (isActive ? 'active-link' : '')}>View Internship</NavLink>
          </nav>
        </div>
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<ViewInternship />} />
            <Route path="view" element={<ViewInternship />} />
          </Routes>
          <nav>
            <NavLink to="/internship/view" className={({ isActive }) => (isActive ? 'active-link' : '')}>View Internship</NavLink>
          </nav>
        </div>
      )}
    </div>
  );
}

export default InternshipModule;
