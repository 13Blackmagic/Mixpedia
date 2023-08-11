import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';
import { GET_ME } from '../utils/queries';
import { DELETE_DRINK, CREATE_DRINK } from '../utils/mutations';
import Auth from '../utils/auth';
import { useQuery, useMutation } from '@apollo/client';
import { saveDrinkIds, getSavedDrinkIds } from '../utils/localStorage';
const SavedDrinks = () => {
  // const [userData, setUserData] = useState({});

const { loading, data } = useQuery(GET_ME);
const [deleteDrink, { error }] = useMutation(DELETE_DRINK);
const userData = data?.me || {};
console.log(userData)

const [createDrink] = useMutation(CREATE_DRINK);

const [savedDrinkIds, setSavedDrinkIds] = useState(getSavedDrinkIds());



  // create function that accepts the drink's mongo _id value as param and deletes the drink from the database
  const handleDeleteDrink = async (drinkId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const {data} = await deleteDrink({
        variables: {drinkId}
      });
      console.log(data);
      // upon success, remove drink's id from localStorage
      //removeDrinkId(drinkId);
    } catch (err) {
      console.error(err);
    }
  };
  console.log('userData.savedDrinks',userData.savedDrinks)
  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div fluid className="text-light bg-dark p-5">
        <Container>
          <h1>Viewing saved drinks!</h1>
        </Container>
      </div>
      <Container>
        <Row>
          {userData?.savedDrinks?.map((drink) => {
            return (
              <Col md="4">
                <Card key={drink.drinkId} border='dark'>
                  {drink.image ? <Card.Img src={drink.image} alt={`The cover for ${drink.title}`} variant='top' /> : null} 
                  <Card.Body>
                    <Card.Title>{drink.name}</Card.Title>
                    <p className='small'>Category: {drink.category}</p>
                    <p className='small'>Glass: {drink.glass}</p>
                    <Card.Text>{drink.instructions}</Card.Text>
                    <Button className='btn-block btn-danger' onClick={() => handleDeleteDrink(drink.drinkId)}>
                      Delete this drink!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

  
  export default SavedDrinks;