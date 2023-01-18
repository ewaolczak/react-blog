import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const PostSingle = (props) => {
  return (
    <Col xs='12' md='6' lg='4' className="mt-4">
      <Card className='mt=5'>
        <Card.Body >
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className='fw-bold'>
            Author: <span className='fw-normal'>{props.author}</span>
          </Card.Subtitle>
          <Card.Subtitle className='fw-bold'>
            Published:{' '}
            <span className='fw-normal'>{props.publishedDate}</span>
          </Card.Subtitle>
          <Card.Text>{props.shortDescription}</Card.Text>
          <Button variant='primary'>Read more</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PostSingle;
