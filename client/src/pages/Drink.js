import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_drink, QUERY_ALL_DRINKS } from '../utils/queries';

const GetAllDrinks = () => {
  
  const { drinkId } = useParams();
  const { loading, data } = useQuery(QUERY_ALL_DRINKS)
  

  const drink = data?.getDrinks || {};
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-3">
      <div className="card-header bg-dark text-light p-2 m-0">
      {drink.map((drink, i) => {
        return <div key={i}>
          {console.log(drink)}
          <img className="drinkImage" src={drink.strDrinkThumb}></img> <br />
          <span>Name: </span>{drink.strDrink} <br />
  
          <span style={{ fontSize: '1rem' }}>
            Category: {drink.strCategory}
          </span> <br />
  
          <span style={{ fontSize: '1rem' }}>
            Glass: {drink.strGlass}
          </span> <br />
  
          <span style={{ fontSize: '1rem' }}>
            Instructions: {drink.strInstructions}
          </span>
          

        </div>
        })}
      </div>
    </div>
  );
};

export default GetAllDrinks;
