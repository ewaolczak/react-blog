import shortid from 'shortid';

//selectors
export const getAllPosts = (state) => state.posts;
export const getPostById = ({ posts }, id) =>
  posts.find((post) => (post.id = id));

// actions
const createActionName = (actionName) => `app/posts/${actionName}`;
const GET_ALL_POSTS = createActionName('GET_ALL_POSTS');
const REMOVE_POST = createActionName('REMOVE_POST');

// action creators
export const removePost = (id) => ({ type: REMOVE_POST, id });

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return [...statePart, { ...action.payload, id: shortid() }];
    case REMOVE_POST:
      return statePart.filter((post) => post.id !== action.payload);
    default:
      return statePart;
  }
};

export default postsReducer;
