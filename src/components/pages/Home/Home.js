import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import PostsContainer from '../../features/PostsContainer/PostsContainer';

const Home = () => {
  return (
    <>
      <div className='d-sm-flex justify-content-sm-between'>
        <h1>All posts</h1>
        <Link to='/post/add'>
          <Button variant='outline-info' className='m-2 me-0'>
            Add post
          </Button>
        </Link>
      </div>
      <PostsContainer />
    </>
  );
};

export default Home;
