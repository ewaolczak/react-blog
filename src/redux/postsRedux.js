//selectors

// actions
// eslint-disable-next-line no-unused-vars
const createActionName = (actionName) => `app/posts/${actionName}`;

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default postsReducer;
