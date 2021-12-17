
export type Post = {
  id: string;
  title: string;
  text: string;
  blurb: string;
  topics?: Topic[];
  author: string;
  datePublished: string;
  comments?: Comment[];
}

export type Topic = {
  id: string;
  name: string;
  description: string;
  posts?: Post[];
}

export type Comment = {
  id: string;
  text: string;
  author: string;
  datePublished: string;
}


// export type Query {  
//   posts: [Post];
//   topics: [Topic];
//   topic(id: string: Topic;
//   post(id: string: Post;
// }

// input CommentInput {
//   text: string;
//   author: string;
//   datePublished: string;
// }

// export type Mutation {
//   createComment(input: CommentInput): Comment
// }