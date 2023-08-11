const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
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
    name: String!
    glass: String!
    image: String
    category: String!
    instructions: String!  
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
    me: User
    users: [User]
    ## user(username: String!): User
    ## thoughts(username: String): [Thought]
    ## thought(thoughtId: ID!): Thought
    getDrinks: [Drink]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createDrink(idDrink: String!, name: String!, glass: String!, image: String, category: String!, instructions: String!): User
    deleteDrink(idDrink: String!): User
    ## addThought(thoughtText: String!, username: String!): Thought
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
