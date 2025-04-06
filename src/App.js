import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserModule from './components/UserModule';
import PlacementModule from './components/PlacementModule';
import TestModule from './components/TestModule';
import TestResultModule from './components/TestResultModule';
import InternshipModule from './components/InternshipModule';
import CoursesModule from './components/CoursesModule';
import PredictorModule from './components/PredictorModule';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink>
        <NavLink to="/user" className={({ isActive }) => (isActive ? 'active-link' : '')}>User Module</NavLink>
        <NavLink to="/placement" className={({ isActive }) => (isActive ? 'active-link' : '')}>Placement Module</NavLink>
        <NavLink to="/test" className={({ isActive }) => (isActive ? 'active-link' : '')}>Test Module</NavLink>
        <NavLink to="/internship" className={({ isActive }) => (isActive ? 'active-link' : '')}>Internship Module</NavLink>
        <NavLink to="/courses" className={({ isActive }) => (isActive ? 'active-link' : '')}>Courses Module</NavLink>
        <NavLink to="/predictor" className={({ isActive }) => (isActive ? 'active-link' : '')}>Predictor</NavLink>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/*" element={<UserModule />} />
          <Route path="/placement/*" element={<PlacementModule />} />
          <Route path="/test/*" element={<TestModule />} />
          <Route path="/testresult/*" element={<TestResultModule />} />
          <Route path="/internship/*" element={<InternshipModule />} />
          <Route path="/courses/*" element={<CoursesModule />} />
          <Route path="/predictor/*" element={<PredictorModule />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
