import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { AppProvider, AppContext } from './context/AppContext';
import AuthPage from './components/AuthPage';
import HomePage from './pages/HomePage';
import UserModule from './components/UserModule';
import PlacementModule from './components/PlacementModule';
import TestModule from './components/TestModule';
import TestResultModule from './components/TestResultModule';
import InternshipModule from './components/InternshipModule';
import CoursesModule from './components/CoursesModule';
import PredictorModule from './components/PredictorModule';
import Analysis from './components/analysis/Analysis';
import './App.css';

function AppContent() {
  const { user } = useContext(AppContext);

  if (!user.username) {
    return <AuthPage />;
  }

  return (
    <div className={user.role === 'admin' ? 'admin-theme' : 'user-theme'}>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink>
        <NavLink to="/user" className={({ isActive }) => (isActive ? 'active-link' : '')}>User Module</NavLink>
        <NavLink to="/placement" className={({ isActive }) => (isActive ? 'active-link' : '')}>Placement Module</NavLink>
        <NavLink to="/test" className={({ isActive }) => (isActive ? 'active-link' : '')}>Test Module</NavLink>
        <NavLink to="/internship" className={({ isActive }) => (isActive ? 'active-link' : '')}>Internship Module</NavLink>
        <NavLink to="/courses" className={({ isActive }) => (isActive ? 'active-link' : '')}>Courses Module</NavLink>
        <NavLink to="/predictor" className={({ isActive }) => (isActive ? 'active-link' : '')}>Predictor</NavLink>
        <NavLink to="/analysis" className={({ isActive }) => (isActive ? 'active-link' : '')}>Analysis</NavLink>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/*" element={<UserModule role={user.role} />} />
          <Route path="/placement/*" element={<PlacementModule role={user.role} />} />
          <Route path="/test/*" element={<TestModule role={user.role} />} />
          <Route path="/testresult/*" element={<TestResultModule role={user.role} />} />
          <Route path="/internship/*" element={<InternshipModule role={user.role} />} />
          <Route path="/courses/*" element={<CoursesModule role={user.role} />} />
          <Route path="/predictor/*" element={<PredictorModule role={user.role} />} />
          <Route path="/analysis" element={<Analysis role={user.role} />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <Router>
        <AppContent />
      </Router>
    </AppProvider>
  );
}

export default App;
