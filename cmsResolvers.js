const posts = require("./store/posts");
const topics = require("./store/topics");
const comments = require("./store/comments");
const topicsPosts = require("./store/topicsPosts");

const resolvers = {
  Query: {
    posts: () => posts,
    topics: () => topics,
    topic: (_root, {id}) => topics.find(t => t.id === id),
    post: (_root, {id}) => posts.find(p => p.id === id)
  },
  Post: {
    comments: (parent) => {
      return comments.filter(comment => parent.comments?.includes(comment.id));
    },
  }
};

module.exports = resolvers;