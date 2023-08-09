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

export const ADD_DRINK = gql`  
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

export const DELETE_DRINK = gql`  mutation addComment(
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

export const SAVE_DRINK = gql`  mutation addComment(
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

export const REMOVE_DRINK = gql`  mutation addComment(
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

export const createDrink = gql`
  mutation createDrink($drink: DrinkInput!) {
    createDrink(drink: $drink) {
      idDrink
      strDrink
      strDrinkThumb
      strInstructions
      strGlass
      strIngredient1
      strIngredient2
      strIngredient3
      strIngredient4
      strIngredient5
      strIngredient6
      strIngredient7
      strIngredient8
      strIngredient9
      strIngredient10
      strIngredient11
      strIngredient12
      strIngredient13
      strIngredient14
      strIngredient15
      strMeasure1
      strMeasure2
      strMeasure3
      strMeasure4
      strMeasure5
      strMeasure6
      strMeasure7
      strMeasure8
      strMeasure9
      strMeasure10
      strMeasure11
      strMeasure12
      strMeasure13
      strMeasure14
      strMeasure15
    }
  }
`;


export const QUERY_THOUGHTS = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;




