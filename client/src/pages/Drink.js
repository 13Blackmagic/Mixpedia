import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import Button from 'react-bootstrap/Button';
import { QUERY_ALL_DRINKS } from '../utils/queries';
import { CREATE_DRINK } from '../utils/mutations';
import { SAVE_DRINK } from '../utils/localStorage';
import { addDrinkIds } from '../utils/localStorage';



const GetAllDrinks = () => {
  
  const { idDrink } = useParams();
  const { loading, data } = useQuery(QUERY_ALL_DRINKS)
  const [createDrink] = useMutation(CREATE_DRINK);
  
  console.log(data)
  const drinks = data?.getDrinks || [];

  // async function SAVE_DRINK(drinkId){
  //   try {
  //     const { data } = await SAVE_DRINK({
  //       variables: {
  //         drinkId
  //       },
  //     });
  //     console.log(data)
  //   } catch(err){
  //     console.log(err)
  //   }
  // }



  async function addDrink(event){
    try {
      const newDrink = event.target.dataset;
      const { data } = await createDrink({
        variables: {
          ...newDrink
        },
      });
      console.log(data)
    } catch(err){
      console.log(err)
    }
  }


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-3">
      <div className="card-header bg-dark text-light p-2 m-0">
      {drinks?.map((drink, i) => {
        return <div key={i}>
          {console.log(drink)}
          <img className="drinkImage" src={drink.image}></img> <br />
          <span>Name: </span>{drink.name} <br />
  
          <span style={{ fontSize: '1rem' }}>
            Category: {drink.category}
          </span> <br />
  
          <span style={{ fontSize: '1rem' }}>
            Glass: {drink.glass}
          </span> <br />

  
          <span style={{ fontSize: '1rem' }}>
            Instructions: {drink.instructions}
          </span>
          
          <button 
            data-drinkid={drink.idDrink} 
            data-name={drink.strDrink}  
            data-category={drink.strCategory}
            data-glass={drink.strGlass}
            data-instructions={drink.strInstructions}
            data-image={drink.strDrinkThumb}
            onClick={addDrinkIds}>Create Drink</button>
            <button onClick={SAVE_DRINK}>Save Drink</button>
        </div>
        })}
      </div>
    </div>
  );
};

export default GetAllDrinks;
