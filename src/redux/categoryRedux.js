export const getCategories = ({ categories }) => categories;
export const getPostByCategory = ({ posts }, category) =>
  posts.filter((post) => post.category === category);

const categoryReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default categoryReducer;
