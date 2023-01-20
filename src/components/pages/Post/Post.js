import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getPostById } from '../../../redux/postsRedux';
import { Row, Col, Card, Button } from 'react-bootstrap';

const Post = () => {
  const postId = useParams();
  const post = useSelector((state) => getPostById(state, postId));

  return (
    <section>
      <Row xs={4} className='d-flex flex-wrap justify-content'>
        <Col xs lg='3'></Col>
        <Col xs={12} lg='6'>
          <Card style={{ border: 'none' }}>
            <Card.Body className='d-flex flex-wrap justify-content-between align-items-center p-0 mt-2'>
              <Card.Title className='fs-1'>{post.title}</Card.Title>
              <div>
                <Link to={`/post/edit/${post.postId}`}>
                  <Button variant='outline-info' className='ms-2'>
                    Edit
                  </Button>
                </Link>
                <Link to={`/post/${post.postId}`}>
                  <Button variant='outline-danger' className='ms-2'>
                    Delete
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs lg='3'></Col>
      </Row>
      <Row xs={4}>
        <Col xs lg='3'></Col>
        <Col xs={12} lg='6'>
          <Card style={{ border: 'none' }}>
            <Card.Body className='p-0 mt-2'>
              <Card.Subtitle className='fw-bold mt-3'>
                Author: <span className='fw-normal'>{post.author}</span>
              </Card.Subtitle>
              <Card.Subtitle className='fw-bold mt-2'>
                Published:{' '}
                <span className='fw-normal'>{post.publishedDate}</span>
              </Card.Subtitle>
              <Card.Text className='mt-3'>{post.content}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs lg='3'></Col>
      </Row>
    </section>
  );
};

export default Post;
