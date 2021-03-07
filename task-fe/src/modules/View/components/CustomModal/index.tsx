import React from 'react'
import { Modal, Button } from "react-bootstrap"
import { CustomModalProps } from './types';

const CustomModal: React.FC<CustomModalProps> = ({ show, handleClose, body, error, buttons, errors }) => (
    <Modal show={show} onHide={handleClose}>
    <Modal.Body className={error ? 'text-danger' : ''}>{body}</Modal.Body>
    {errors && (
      <ul>
        {errors.map(err => <li key={err.message} className="text-danger">{err.message}</li>)}
      </ul>
    )
    }
    <Modal.Footer>
      {buttons ? buttons : (
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      )}
    </Modal.Footer>
  </Modal>
);

export default CustomModal
