import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import { useState } from "react";
function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      action="/register"
      method="post"
    >
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Full name"
            name="name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Roll Number</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Roll Number"
            name="roll"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="8" controlId="validationCustom03">
          <Form.Label>Institute email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="username"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email id.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a password.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Contact number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter Contact Number"
            name="contact"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Mobile number.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Button type="submit" onClick={handleSubmit}>
        Register
      </Button>
    </Form>
  );
}

export default FormExample;
