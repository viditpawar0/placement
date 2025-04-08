import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import CreatePlacement from './placement/CreatePlacement';
import UpdatePlacement from './placement/UpdatePlacement';
import DeletePlacement from './placement/DeletePlacement';
import ViewPlacement from './placement/ViewPlacement';

function PlacementModule({ role }) {
  return (
    <div>
      <h1>Placement Module</h1>
      {role === 'admin' ? (
        <div>
          <Routes>
            <Route path="/" element={<ViewPlacement />} />
            <Route path="create" element={<CreatePlacement />} />
            <Route path="update" element={<UpdatePlacement />} />
            <Route path="delete" element={<DeletePlacement />} />
            <Route path="view" element={<ViewPlacement />} />
          </Routes>
          <nav>
            <NavLink to="/placement/create" className={({ isActive }) => (isActive ? 'active-link' : '')}>Create Placement</NavLink>
            <NavLink to="/placement/update" className={({ isActive }) => (isActive ? 'active-link' : '')}>Update Placement</NavLink>
            <NavLink to="/placement/delete" className={({ isActive }) => (isActive ? 'active-link' : '')}>Delete Placement</NavLink>
            <NavLink to="/placement/view" className={({ isActive }) => (isActive ? 'active-link' : '')}>View Placement</NavLink>
          </nav>
        </div>
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<ViewPlacement />} />
            <Route path="view" element={<ViewPlacement />} />
          </Routes>
          <nav>
            <NavLink to="/placement/view" className={({ isActive }) => (isActive ? 'active-link' : '')}>View Placement</NavLink>
          </nav>
        </div>
      )}
    </div>
  );
}

export default PlacementModule;
