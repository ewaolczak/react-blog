import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalDeletePost = (post) => {
  return (
    <Modal show={post.showModal} onHide={post.closeModal} >
      <Modal.Dialog className="m-0">
        <Modal.Header style={{border: 'none'}}>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            This operation will completely remove this post from the app. Are
            you sure you want to do that?
          </p>
        </Modal.Body>

        <Modal.Footer style={{border: 'none'}}>
          <Button variant='secondary' onClick={post.closeModal}>
            Cancel
          </Button>{' '}
          <Button variant='danger' onClick={post.deletePost}>
            Remove
          </Button>{' '}
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default ModalDeletePost;
