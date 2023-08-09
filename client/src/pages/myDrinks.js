import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';






const MyDrinks = () => {

    const { loading, data } = useQuery(QUERY_USER)

    const myDrinks = data.user.savedDrinks

    return (

        <span>Something cool is {myDrinks}</span>


    );      
  };
  
  export default MyDrinks;