import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import './app.css'
const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
       
        <h4>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="beer"
            aria-hidden="false"
          >
            🍺
          </span>{' '}
          by Jonathan, Anthony, Bronson, and Luc!
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
