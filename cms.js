const { ApolloServer, gql } = require('apollo-server');

const schema = gql`
  type Post implements HasByline {
    id: ID!
    title: String!
    text: String!
    blurb: String
    topics: [Topic!]
    author: String
    datePublished: String
    comments: [Comment!]
  }
  type Topic {
    id: ID!
    name: String
    posts: [Post]
  }
  type Comment {
    id: ID!
    text: String,
    author: String
    datePublished: String
  }
  interface Byline {
    author: String
    datePublished: String
  }
`;
