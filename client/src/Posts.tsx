
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { Post } from "./models";
import { POSTS } from "./queries";

const Posts = () => {

  const { loading, error, data } = useQuery<{ posts: Post[] }>(POSTS);

  if(loading){
    return <div>Loading...</div>
  }

  if(error){
    return <div>Error :-(</div>
  }

  return (
    <div className="posts">
      <h1>Posts</h1>
      {data?.posts.map((post: Post) => (
        <div className="post">
          <h3><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
          <p>by: {post.author} - {post.datePublished}</p>
          <div>{post.blurb}</div>
          <p>Comments: {post.comments?.length || "0"}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;