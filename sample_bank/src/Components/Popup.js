// src/AccountNumberDialog.js
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUser,
  syncWithLocalStorage,
} from "../features/register/registerSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Popup({ show, handleClose, handleSave }) {
  let userArray = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(userArray);
    if (localStorage.getItem("users")) {
      dispatch(syncWithLocalStorage(JSON.parse(localStorage.getItem("users"))));
    }
  }, []);

  const [accountNumber, setAccountNumber] = useState("");
  let navigate = useNavigate();
  const handleInputChange = (e) => {
    setAccountNumber(e.target.value);
  };

  let account_no = [];
  userArray.map((eachuser) => {
    account_no.push(eachuser.accountNumber);
  });

  const handleSaveClick = () => {
    if (account_no.includes(accountNumber)) {
      alert("Navigating to service page");
      navigate("/service");
      axios.get("http://localhost:3500/users").then((response) => {
        const users = response.data;
        const matchingUser = users.find(
          (user) => user.accountNumber === accountNumber
        );
        if (matchingUser) {
          sessionStorage.setItem("username", matchingUser.firstName);
        }
      });
    } else {
      alert("User is not registered yet!");
      navigate("/");
      handleClose();
    }
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
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveClick}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;
