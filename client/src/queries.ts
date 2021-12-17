import { gql } from "@apollo/client";

export  const POSTS = gql`
query Posts {
  posts {
    title,
    datePublished,
    author
    comments {
      id
    }
  }
}
`;