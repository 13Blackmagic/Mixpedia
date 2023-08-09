import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';






const GetUserDrinks = () => {
    
    const { loading } = useQuery(QUERY_USER)
    
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (

        <h3>Something cool</h3>


    );      
  };
  
  export default GetUserDrinks;