import React from 'react';
import './Navigation.css';

function Navigation({ currentPage, onPageChange }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-icon">💰</span>
          Budget App
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <button
              className={`nav-link ${currentPage === 'summary' ? 'active' : ''}`}
              onClick={() => onPageChange('summary')}
            >
              📊 Dashboard
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${currentPage === 'income' ? 'active' : ''}`}
              onClick={() => onPageChange('income')}
            >
              💵 Income Statement
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${currentPage === 'balance' ? 'active' : ''}`}
              onClick={() => onPageChange('balance')}
            >
              📈 Balance Sheet
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;