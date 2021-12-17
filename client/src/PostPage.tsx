import { useQuery } from "@apollo/client";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Post, Comment, Topic } from "./models";
import { POST } from "./queries";

const PostPage = () => {

  const { id } = useParams();

  const { loading, error, data } = useQuery<{ post: Post }>(POST, {
    variables: { postId: id }
  });

  // console.log("id: " + id)
  // return <div>id: {id}</div>

  if(loading){
    return <div>Loading...</div>
  }

  if(!data || error){
    return <div>Error :-(</div>
  }

  const { title, blurb, url, comments, topics } = data?.post || {};

  return (
    <div className="postPage">
      <h1>{title}</h1>
      <p>{blurb}</p>
      <iframe
        className="video"
        title={title}
        src={url}
        frameBorder="0"
        allow="autoplay"
        allowFullScreen
      />
      <p>Topics: {topics?.map(topic => <span>{topic.name}</span>)}</p>
      {comments?.map((comment: Comment) => (
        <Fragment key={comment.id}>
          <p>{comment.text}</p>
          <p>by: {comment.author}, {comment.datePublished}</p>
        </Fragment>
      ))}
    </div>
  )
}

export default PostPage;
