import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';

const AddPostForm = (props) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let newPostId = props.id;

  const handleAddPost = (e) => {
    e.preventDefault();
    dispatch(
      addPost({
        title,
        author,
        publishedDate,
        shortDescription,
        content,
        newPostId
      })
    );
    setTitle('');
    setAuthor('');
    setPublishedDate('');
    setShortDescription('');
    setContent('');
    navigate('/');
  };

  return (
    <Form onSubmit={handleAddPost}>
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
            <Form.Control
              as='textarea'
              rows={6}
              placeholder='Leave a content here'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>
          <Button>Add post</Button>
        </Col>
        <Col xs lg='2'></Col>
      </Row>
    </Form>
  );
};

export default AddPostForm;
