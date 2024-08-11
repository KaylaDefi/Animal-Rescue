import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AnimalsPage from './pages/AnimalsPage';
import AdoptionsPage from './pages/AdoptionsPage';
import VolunteersPage from './pages/VolunteersPage';
import EventsPage from './pages/EventsPage';
import DonorsPage from './pages/DonorsPage';
import ReportsPage from './pages/ReportsPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/animals" element={<AnimalsPage />} />
          <Route path="/adoptions" element={<AdoptionsPage />} />
          <Route path="/volunteers" element={<VolunteersPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/donors" element={<DonorsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
