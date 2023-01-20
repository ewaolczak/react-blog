import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalDeletePost = (props) => {
  return (
    <Modal show={props.showModal} hide={props.closeModal}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            This operation will completely remove this post from the app. Are
            you sure you want to do that?
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='secondary' onClick={props.closeModal}>
            Cancel
          </Button>{' '}
          <Button variant='danger' onClick={props.removePost}>
            Remove
          </Button>{' '}
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default ModalDeletePost;
