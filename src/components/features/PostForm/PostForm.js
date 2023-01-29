import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill-2';
import 'react-quill/dist/quill.snow.css';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    action({
      title,
      author,
      publishedDate,
      shortDescription,
      content
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row xs={4} className='d-flex flex-wrap justify-content'>
        <Col xs lg='2'></Col>
        <Col xs={12} lg='8'>
          <Row md='2'>
            <Form.Group className='mb-3' controlId='postTitle'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row md='2'>
            <Form.Group className='mb-3' controlId='postAuthor'>
              <Form.Label>Author</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter author'
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Form.Group className='mb-3' controlId='postPublishedDate'>
            <Form.Label>Published</Form.Label>
            <Form.Control
              type='text'
              placeholder='dd-mm-rrrr'
              value={publishedDate}
              onChange={(e) => setPublishedDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='postShortDescription'>
            <Form.Label>Short Description</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              placeholder='Leave a comment here'
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='content'>
            <Form.Label>Main content</Form.Label>
            <ReactQuill theme='snow' value={content} onChange={setContent} />
          </Form.Group>
          <Button type='submit'>{actionText}</Button>
        </Col>
        <Col xs lg='2'></Col>
      </Row>
    </Form>
  );
};

export default PostForm;
