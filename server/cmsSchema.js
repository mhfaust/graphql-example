const { gql } = require('apollo-server');

const schema = gql`
  type Post implements Byline {
    id: ID!
    title: String!
    url: String!
    blurb: String
    topics: [Topic!]
    author: String
    datePublished: String
    comments: [Comment!]
  }

  type Topic {
    id: ID!
    name: String
    description: String
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

  input CommentInput {
    text: String
    author: String
    datePublished: String
  }

  type Mutation {
    createComment(input: CommentInput): Comment
  }
`;

module.exports = schema;