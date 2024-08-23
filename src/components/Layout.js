import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <h1>Animal Rescue Management</h1>
      </header>
      <aside className="sidebar left">
        <nav>
          <ul>
            <li>Home</li>
            <li>Animals</li>
            <li>Adoptions</li>
            <li>Volunteers</li>
            <li>Events</li>
            <li>Donors</li>
            <li>Reports</li>
          </ul>
        </nav>
      </aside>
      <main className="content">
        {children}
      </main>
      <aside className="sidebar right">
        <p>Additional Info</p>
      </aside>
      <footer className="footer">
        <p>© 2024 Animal Rescue</p>
      </footer>
    </div>
  );
};

export default Layout;
