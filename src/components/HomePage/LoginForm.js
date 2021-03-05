import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import config from "../../config"
import { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signin, authenticate, isAuthenticated } from "../../auth/authHelper"

function LoginForm(props) {
  const api_url = config.API_URL
  const initialData = {
    "email": "",
    "password": "",
    "didRedirect": false
  }
  const [validated, setValidated] = useState(false); 
  const [loginSuccess, setLoginSuccess] = useState(true); 
  const [loginData, setLogin] = useState(initialData);

  const handleOnChange = (event) => {
    const {name, value} = event.target;
    setLogin({...loginData, [name]:value})
  }
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault()
    setValidated(true);
    const logindata ={
      "username": loginData.email,
      "password": loginData.password
    }
    signin(logindata).then((data)=>{
      authenticate(data, () => {
        setLogin({
          ...loginData,
          didRedirect: true
        })
      })
    }).catch((err)=>{
      console.log(err)
      setLoginSuccess(false)
    })
  };
  const performRedirect = () => {
    if (loginData.didRedirect || isAuthenticated()) {
      props.close()
      return <Redirect to='/home' />
    }
  }
  return (
    <Form
      noValidate
      validated={validated}
      method="post"
    >
      <Form.Row>
        <Form.Group as={Col} md="8" controlId="validationCustom03">
        <Form.Control.Feedback type="invalid" isValid={loginSuccess}>
            Wrong email or password.
          </Form.Control.Feedback>
          <Form.Label>Institute email address</Form.Label>
          <Form.Control
            type="email" 
            placeholder="Enter email"
            name="email"
            required
            onChange = {handleOnChange}
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
            onChange = {handleOnChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a password.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Button type="submit" onClick={handleSubmit}>
        Login
      </Button>
      {performRedirect()}
    </Form>
  );
}

export default LoginForm;
