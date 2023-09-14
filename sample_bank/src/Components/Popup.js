// src/AccountNumberDialog.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function Popup({ show, handleClose, handleSave }) {
  const [accountNumber, setAccountNumber] = useState('');

  const handleInputChange = (e) => {
    setAccountNumber(e.target.value);
  };

  const handleSaveClick = () => {
    handleSave(accountNumber);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Enter Account Number</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="accountNumber">
            <Form.Control
              type="text"
              placeholder="Account Number"
              value={accountNumber}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={handleSaveClick}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;
