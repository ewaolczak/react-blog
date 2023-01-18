import React from 'react';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import { Container, Row } from 'react-bootstrap';
import PostSingle from '../../views/PostSingle/PostSingle';

const PostsContainer = () => {
  const posts = useSelector(getAllPosts);

  return (
    <Container className='d-flex justify-content-center flex-column'>
      <Row>
        {posts.map((post) => (
          <PostSingle key={post.id} {...post} />
        ))}
      </Row>
    </Container>
  );
};

export default PostsContainer;
