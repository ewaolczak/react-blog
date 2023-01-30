import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getPostById, removePost } from '../../../redux/postsRedux';
import { Row, Col, Card, Button } from 'react-bootstrap';
import ModalDeletePost from '../../features/ModalDeletePost/ModalDeletePost';
import dateToStr from '../../../utils/dateToStr';

const Post = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const post = useSelector((state) => getPostById(state, id));

  const [modal, setModal] = useState(false);
  const closeModal = () => setModal(false);
  const openModal = () => setModal(true);

  const deletePost = (e) => {
    e.preventDefault();
    dispatch(removePost(post.id));
    closeModal();
  };

  if (modal) {
    return (
      <ModalDeletePost
        showModal={modal}
        closeModal={closeModal}
        deletePost={deletePost}
      />
    );
  }

  if (!post) return <Navigate to='/' />;
  else
    return (
      <section>
        <Row xs={4} className='d-flex flex-wrap justify-content'>
          <Col xs lg='3'></Col>
          <Col xs={12} lg='6'>
            <Card style={{ border: 'none' }}>
              <Card.Body className='d-flex flex-wrap justify-content-between align-items-center p-0 mt-2'>
                <Card.Title className='fs-1'>{post.title}</Card.Title>
                <div>
                  <Link to={`/post/edit/${post.id}`}>
                    <Button variant='outline-info' className='ms-2'>
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant='outline-danger'
                    className='ms-2'
                    onClick={openModal}>
                    Delete
                  </Button>
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
                  Published: <span className='fw-normal'>{dateToStr(post.publishedDate)}</span>
                </Card.Subtitle>
                <Card.Text className='mt-3'>
                  <p dangerouslySetInnerHTML={{ __html: post.content }} />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs lg='3'></Col>
        </Row>
      </section>
    );
};

export default Post;
