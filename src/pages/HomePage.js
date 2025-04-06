import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Placement Predictor</h1>
        <p>Your one-stop solution for managing placements, internships, tests, and courses.</p>
      </header>
      <section className="home-content">
        <NavLink to="/user" className="home-card">
          <h2>User Management</h2>
          <p>Manage user profiles, update details, and view user information with ease.</p>
        </NavLink>
        <NavLink to="/placement" className="home-card">
          <h2>Placement Tracking</h2>
          <p>Track student placements, manage company details, and analyze placement trends.</p>
        </NavLink>
        <NavLink to="/internship" className="home-card">
          <h2>Internship Opportunities</h2>
          <p>Manage internship records, update roles, and view internship details.</p>
        </NavLink>
        <NavLink to="/test" className="home-card">
          <h2>Test Management</h2>
          <p>Create, update, and manage tests for students across various courses.</p>
        </NavLink>
        <NavLink to="/courses" className="home-card">
          <h2>Courses</h2>
          <p>View, create, and manage courses to enhance student learning and skills.</p>
        </NavLink>
        <NavLink to="/predictor" className="home-card">
          <h2>Predictor</h2>
          <p>Use our advanced predictor to analyze and forecast placement outcomes.</p>
        </NavLink>
      </section>
      <footer className="home-footer">
        <p>&copy; 2023 Placement Predictor. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
