import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      savedDrinks
    }
  }
`;

export const QUERY_THOUGHTS = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      username
      createdAt
    }
  }
`;

export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const QUERY_SINGLE_drink = gql`
  query getSingleDrink($drinkId: ID!) {
    drink(drinkId: $drinkId) {
      _id
      drinkText
      drinkAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const QUERY_ALL_DRINKS = gql`
query Query {
  getDrinks {
    idDrink
    strDrink
    strGlass
    strInstructions
    strIngredients1
    strIngredients2
    strIngredients3
    strIngredients4
    strIngredients5
    strIngredients6
    strIngredients7
    strMeasure1
    strMeasure2
    strMeasure3
    strMeasure4
    strMeasure5
    strMeasure6
    strMeasure7
    strDrinkThumb
    strCategory
  }
}`;

