import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import CreateCourse from './courses/CreateCourse';
import UpdateCourse from './courses/UpdateCourse';
import DeleteCourse from './courses/DeleteCourse';
import ViewCourse from './courses/ViewCourse';

function CoursesModule({ role }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ViewCourse />} />
        {role === 'admin' && <Route path="create" element={<CreateCourse />} />}
        {role === 'admin' && <Route path="update" element={<UpdateCourse />} />}
        {role === 'admin' && <Route path="delete" element={<DeleteCourse />} />}
        <Route path="view" element={<ViewCourse />} />
      </Routes>
      <nav>
        {role === 'admin' && (
          <>
            <NavLink to="/courses/create" className={({ isActive }) => (isActive ? 'active-link' : '')}>Create Course</NavLink>
            <NavLink to="/courses/update" className={({ isActive }) => (isActive ? 'active-link' : '')}>Update Course</NavLink>
            <NavLink to="/courses/delete" className={({ isActive }) => (isActive ? 'active-link' : '')}>Delete Course</NavLink>
          </>
        )}
        <NavLink to="/courses/view" className={({ isActive }) => (isActive ? 'active-link' : '')}>View Course</NavLink>
      </nav>
    </div>
  );
}

export default CoursesModule;
