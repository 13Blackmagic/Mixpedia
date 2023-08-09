import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Mixpedia Home Page</h1>
          </Link>
          <Link className="text-light" to="/drinks">
            <h1 className="m-0">Show all drinks</h1>
          </Link>

        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <span>Hey there, {Auth.getProfile().data.username}!</span>
              <button className="logoutButton" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>

            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;