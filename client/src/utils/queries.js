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
query GetDrinks {
  getDrinks {
    name
    instructions
    image
    idDrink
    glass
    category
  }
}`;

export const GET_ME = gql`
  query Me {
    me {
      _id
      email
      savedDrinks {
        name
        instructions
        glass
        image
        idDrink
        category
      }
      username
    }
  }
`;