import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_drink, QUERY_ALL_DRINKS } from '../utils/queries';
import './Drink.css';

/* <main>
        <div className="flex-row justify-center">
            <div className="col-12 col-md-8 mb-3">
                <CommentList comments={drink.comments} />
                <img className="Drinkin" src="/images/Drinkin.jpg" alt="" ></img>
            </div>
        </div>
</main> */

const GetAllDrinks = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { drinkId } = useParams();
  const { loading, data } = useQuery(QUERY_ALL_DRINKS)
  // const { loading, data } = useQuery(QUERY_SINGLE_drink, {
  //   // pass URL parameter
  //   variables: { drinkId: drinkId },
  // });

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
      <div className="bg-light py-4"></div>
      <div className="my-5">
        <CommentList comments={drink.comments} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm drinkId={drink.idDrink} />
      </div>
    </div>
  );      
};

export default GetAllDrinks;
