import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';
import { GET_ME } from '../utils/queries';
import { DELETE_DRINK } from '../utils/mutations';
import Auth from '../utils/auth';
import { useQuery, useMutation } from '@apollo/client';

const SavedDrinks = () => {
  // const [userData, setUserData] = useState({});

// const { loading, data } = useQuery(GET_ME);
const [deleteDrink, { error }] = useMutation(DELETE_DRINK);
// const userData = data?.me || {};
var userData={};
  // use this to determine if `useEffect()` hook needs to run again
  const userDataLength = Object.keys(userData).length;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }

        // const response = await getMe(token);

        // if (!response.ok) {
        //   throw new Error('something went wrong!');
        // }

        // const user = await response.json();
        // setUserData(user);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [userDataLength]);

  // create function that accepts the drink's mongo _id value as param and deletes the drink from the database
  const handleDeletedrink = async (drinkId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await deleteDrink(drinkId, token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const updatedUser = await response.json();
      // setUserData(updatedUser);
      // upon success, remove drink's id from localStorage
      // removeDrinkId(drinkId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (!userDataLength) {
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
        <h2 className='pt-5'>
          {userData.SavedDrinks.length
            ? `Viewing ${userData.SavedDrinks.length} saved ${userData.SavedDrinks.length === 1 ? 'drink' : 'drinks'}:`
            : 'You have no saved drinks!'}
        </h2>
        <Row>
          {userData.SavedDrinks.map((drink) => {
            return (
              <Col md="4">
                <Card key={drink.drinkId} border='dark'>
                  {drink.image ? <Card.Img src={drink.image} alt={`The cover for ${drink.title}`} variant='top' /> : null}
                  <Card.Body>
                    <Card.Title>{drink.title}</Card.Title>
                    <p className='small'>Authors: {drink.authors}</p>
                    <Card.Text>{drink.description}</Card.Text>
                    <Button className='btn-block btn-danger' onClick={() => handleDeletedrink(drink.drinkId)}>
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