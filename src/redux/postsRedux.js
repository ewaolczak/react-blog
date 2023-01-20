import shortid from 'shortid';

//selectors
export const getAllPosts = (state) => state.posts;
export const getPostById = ({ posts }, postId) =>
  posts.find((post) => (post.id = postId));

// actions
const createActionName = (actionName) => `app/posts/${actionName}`;
const GET_ALL_POSTS = createActionName('GET_ALL_POSTS');

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

export default postsReducer;
