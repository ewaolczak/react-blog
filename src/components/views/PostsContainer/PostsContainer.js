import React from 'react';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import { Row } from 'react-bootstrap';
import PostSingle from '../../features/PostSingle/PostSingle';
import dateToStr from '../../../utils/dateToStr';

const PostsContainer = () => {
  const postsList = useSelector(getAllPosts);

  return (
    <Row>
      {postsList.map((post, id) => (
        <PostSingle
          key={id}
          id={post.id}
          title={post.title}
          shortDescription={post.shortDescription}
          content={post.content}
          publishedDate={dateToStr(post.publishedDate)}
          author={post.author}
        />
      ))}
    </Row>
  );
};

export default PostsContainer;
