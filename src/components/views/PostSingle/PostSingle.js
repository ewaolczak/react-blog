import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostSingle = (props) => {
  return (
    <Col xs='12' md='6' lg='4' className='mt-4'>
      <Card className='mt=5 h-100'>
        <Card.Body className='d-flex flex-column'>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className='fw-bold mt-3'>
            Author: <span className='fw-normal'>{props.author}</span>
          </Card.Subtitle>
          <Card.Subtitle className='fw-bold mt-2'>
            Published: <span className='fw-normal'>{props.publishedDate}</span>
          </Card.Subtitle>
          <Card.Text className='mt-3'>{props.shortDescription}</Card.Text>
          <div className='mt-auto'>
            <Link to={`/post/${props.id}`}>
              <Button variant='primary'>Read more</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PostSingle;
