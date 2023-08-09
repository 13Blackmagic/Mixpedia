import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!, $username: String!) {
    addThought(thoughtText: $thoughtText, username: $username) {
      _id
      thoughtText
      username
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment(
    $thoughtId: ID!
    $commentText: String!
    $commentAuthor: String!
  ) {
    addComment(
      thoughtId: $thoughtId
      commentText: $commentText
      commentAuthor: $commentAuthor
    ) {
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

export const CREATE_DRINK = gql`  
mutation CreateDrink($idDrink: String!, $name: String!, $category: String!, $instructions: String!) {
  createDrink(idDrink: $idDrink, name: $name, category: $category, instructions: $instructions) {
    _id
    email
    username
  }
}
`;

export const DELETE_DRINK = gql`
mutation DeleteDrink($idDrink: String!) {
  deleteDrink(idDrink: $idDrink) {
    _id
    email
    username
  }
}
`;
