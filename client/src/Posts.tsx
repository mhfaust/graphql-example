
import { useQuery } from "@apollo/client";
import { Post } from "./models";
import { POSTS } from "./queries";

const Posts = () => {

  const { loading, error, data } = useQuery(POSTS);

  if(loading){
    return <div>Loading...</div>
  }

  if(error){
    return <div>Error :-(</div>
  }

  return (
    <div>
      <h1>Posts</h1>
      {data.posts.map((post: Post) => (
        <div>
          <h3>{post.title}</h3>
          <div>{post.author}</div>
          <div>{post.text}</div>
        </div>
      ))}
    </div>
  );
}

export default Posts;