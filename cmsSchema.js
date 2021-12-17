const { gql } = require('apollo-server');

const schema = gql`
  type Post implements Byline {
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
    text: String
    author: String
    datePublished: String
  }

  interface Byline {
    author: String
    datePublished: String
  }

  type Query {
    posts: [Post]
    topics: [Topic]
    topic(id: ID): Topic
    post(id: ID): Post
  }
`;

module.exports = schema;