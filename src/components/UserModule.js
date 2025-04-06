import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import CreateUser from './user/CreateUser';
import UpdateUser from './user/UpdateUser';
import DeleteUser from './user/DeleteUser';
import ViewUser from './user/ViewUser';

function UserModule() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ViewUser />} />
        <Route path="create" element={<CreateUser />} />
        <Route path="update" element={<UpdateUser />} />
        <Route path="delete" element={<DeleteUser />} />
        <Route path="view" element={<ViewUser />} />
      </Routes>
      <nav>
        <NavLink to="/user/create" className={({ isActive }) => (isActive ? 'active-link' : '')}>Create User</NavLink>
        <NavLink to="/user/update" className={({ isActive }) => (isActive ? 'active-link' : '')}>Update User</NavLink>
        <NavLink to="/user/delete" className={({ isActive }) => (isActive ? 'active-link' : '')}>Delete User</NavLink>
        <NavLink to="/user/view" className={({ isActive }) => (isActive ? 'active-link' : '')}>View User</NavLink>
      </nav>
    </div>
  );
}

export default UserModule;
