import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import { getCategories } from '../../../redux/categoryRedux';
import { useSelector } from 'react-redux';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [category, setCategory] = useState(props.category || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const categories = useSelector(getCategories);

  const {
    register,
    handleSubmit: validate,
    formState: { errors }
  } = useForm();

  const handleSubmit = () => {
    setContentError(!content);
    setDateError(!publishedDate);
    if (content && publishedDate)
      action({
        title,
        author,
        publishedDate,
        shortDescription,
        content
      });
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Row xs={4} className='d-flex flex-wrap justify-content'>
        <Col xs lg='2'></Col>
        <Col xs={12} lg='8'>
          <Row md='2'>
            <Form.Group className='mb-3' controlId='postTitle'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                {...register('title', { required: true, minLength: 4 })}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type='text'
                placeholder='Enter title'
              />
              {errors.title && (
                <small className='d-block form-text text-danger mt-2'>
                  This field is required and must have more than 3 characters
                </small>
              )}
            </Form.Group>
          </Row>
          <Row md='2'>
            <Form.Group className='mb-3' controlId='postAuthor'>
              <Form.Label>Author</Form.Label>
              <Form.Control
                {...register('author', { required: true, minLength: 4 })}
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                type='text'
                placeholder='Enter author'
              />
              {errors.author && (
                <small className='d-block form-text text-danger mt-2'>
                  This field is required and must have more than 3 characters
                </small>
              )}
            </Form.Group>
          </Row>
          <Form.Group className='mb-3' controlId='postPublishedDate'>
            <Form.Label>Published</Form.Label>
            <DatePicker
              selected={publishedDate}
              onChange={(date) => setPublishedDate(date)}
            />
            {dateError && (
              <small className='d-block form-text text-danger mt-2'>
                Date can't be empty
              </small>
            )}
            <Form.Group className='mt-3' controlId='postCategory'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                aria-label='Default select example'
                {...register('category', { required: true })}
                as='select'
                onChange={(e) => setCategory(e.target.value)}
                value={category ? category : 1}>
                <option plaintext>Select post category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form.Group>
          <Form.Group className='mb-3' controlId='postShortDescription'>
            <Form.Label>Short Description</Form.Label>
            <Form.Control
              {...register('shortDescription', {
                required: true,
                minLength: 20
              })}
              as='textarea'
              rows={3}
              placeholder='Leave a comment here'
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
            />
            {errors.shortDescription && (
              <small className='d-block form-text text-danger mt-2'>
                This field is required and must have at least 20 characters
              </small>
            )}
          </Form.Group>
          <Form.Group className='mb-3' controlId='content'>
            <Form.Label>Main content</Form.Label>
            <ReactQuill theme='snow' value={content} onChange={setContent} />
            {contentError && (
              <small className='d-block form-text text-danger mt-2'>
                Content can't be empty
              </small>
            )}
          </Form.Group>
          <Button type='submit'>{actionText}</Button>
        </Col>
        <Col xs lg='2'></Col>
      </Row>
    </Form>
  );
};

export default PostForm;
