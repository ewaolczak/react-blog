import React from 'react';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostByCategory } from '../../../redux/categoryRedux';
import PostSingle from '../Post/Post';

const CategoryPosts = () => {
  const { category } = useParams;
  const postsByCategory = useSelector((state) =>
    getPostByCategory(state, category)
  );
  console.log('postsByCategory', postsByCategory);

  return (
    <section>
      <Row>
        {postsByCategory.map((post) => (
          <PostSingle
            key={post.category}
            title={post.title}
            description={post.shortDescription}
            content={post.content}
            date={post.publishedDate}
            category={post.category}
            author={post.author}
            id={post.id}></PostSingle>
        ))}
      </Row>
    </section>
  );
};

export default CategoryPosts;
