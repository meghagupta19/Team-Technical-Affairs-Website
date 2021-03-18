import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import RegisterForm from "./RegisterForm";
function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>Register</div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register Yourself</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegisterForm close ={handleClose}/>
        </Modal.Body>
        <Modal.Footer>
          Already Registered?
          <Button variant="secondary" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Register;
