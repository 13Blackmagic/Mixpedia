const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedDrinks: [Drink]
  }

  type Thought {
    _id: ID
    thoughtText: String
    username: String
    createdAt: String
    comments: [Comment]
  }

  type Drink {
    idDrink: String!
    strDrink: String!
    strGlass: String!
    strInstructions: String!
    strIngredients1: String
    strIngredients2: String
    strIngredients3: String
    strIngredients4: String
    strIngredients5: String
    strIngredients6: String
    strIngredients7: String
    strMeasure1: String
    strMeasure2: String
    strMeasure3: String
    strMeasure4: String
    strMeasure5: String
    strMeasure6: String
    strMeasure7: String
    strDrinkThumb: String!
    strCategory: String!    
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    ## user(username: String!): User
    ## thoughts(username: String): [Thought]
    ## thought(thoughtId: ID!): Thought
    getDrinks: [Drink]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!, username: String!): Thought
    ## addComment(
      ## thoughtId: ID!
      ## commentText: String!
      ## commentAuthor: String!
      ## ): Thought
      ## removeThought(thoughtId: ID!): Thought
      ## removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
