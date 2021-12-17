import { gql } from "@apollo/client";

export const POSTS = gql`
  query Posts {
    posts {
      id
      title
      datePublished
      author
      blurb
      comments {
        id
      }
    }
  }
`;

export const POST = gql`
  query Post($postId: ID) {
    post(id: $postId){
      id
      title
      datePublished
      author
      url
      comments {
        author
        datePublished
        text
        id
      }
      topics {
        name
      }
    }
  }
`;