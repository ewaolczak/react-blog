import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalDeletePost = () => {
  return (
    <div
      className='modal show'
      style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            This operation will completely remove this post from the app. Are
            you sure you want to do that?
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='secondary'>Cancel</Button>{' '}
          <Button variant='danger'>Remove</Button>{' '}
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ModalDeletePost;
