import React from 'react';
import { Link } from 'react-router-dom';
// import './index.css'
import Auth from '../../utils/auth';
import './index.css'


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
          <Link className="text-light" to="/search">
            <h1 className="m-0">Search for a Drink</h1>
          </Link>
          
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <span>Hey there, {Auth.getProfile().data.username}!</span>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
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
