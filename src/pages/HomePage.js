import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Animal Rescue Management System</h1>
      <nav>
        <ul>
          <li><Link to="/animals">Animals</Link></li>
          <li><Link to="/adoptions">Adoptions</Link></li>
          <li><Link to="/volunteers">Volunteers</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/donors">Donors</Link></li>
          <li><Link to="/reports">Reports</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
