import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import Auth from '../../utils/auth';

const DrinksPage = ({ isloggedin, children }) => {
  if (!isloggedin) {
    return <Navigate
      to="/"></Navigate>
  }
  return (
    <p> hello </p>);
};

export default DrinksPage;
