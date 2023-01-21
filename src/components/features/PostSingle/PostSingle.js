import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const postSingle = ({title, author, publishedDate, shortDescription, id}) => {
  return (
    <Col xs='12' md='6' lg='4' className='mt-4'>
      <Card className='mt=5 h-100'>
        <Card.Body className='d-flex flex-column'>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className='fw-bold mt-3'>
            Author: <span className='fw-normal'>{author}</span>
          </Card.Subtitle>
          <Card.Subtitle className='fw-bold mt-2'>
            Published: <span className='fw-normal'>{publishedDate}</span>
          </Card.Subtitle>
          <Card.Text className='mt-3'>{shortDescription}</Card.Text>
          <div className='mt-auto'>
            <Link to={`/post/${id}`}>
              <Button variant='primary'>Read more</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default postSingle;
