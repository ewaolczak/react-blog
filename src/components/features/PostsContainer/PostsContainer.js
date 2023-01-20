import React from 'react';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import { Row } from 'react-bootstrap';
import PostSingle from '../../views/PostSingle/PostSingle';

const PostsContainer = () => {
  const posts = useSelector(getAllPosts);

  return (
    <Row>
      {posts.map((post) => (
        <PostSingle key={post.id} {...post} />
      ))}
    </Row>
  );
};

export default PostsContainer;
