import React, {useState} from "react";
import { Form, Col, Button,Alert } from "react-bootstrap";
import config from "../../config"
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import { signin, authenticate, isAuthenticated } from "../../auth/authHelper"
function FormExample(props) {
  const api_url = config.API_URL
  const [validated, setValidated] = useState(false);
  
  const initialData ={
    name:"",
    rollno:"",
    email : "",
    password : "",
    contact:"",
    Success: true
}
  const [state , setState] = useState(initialData)
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    sendDetailsToServer();
    
  };

   const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
        
    }
    
  


    const sendDetailsToServer = () => {
      if(state.email.length && state.password.length) {
          
          const payload={
            "username":state.email,
            "roll":state.rollno,
              "name":state.username,
              "password":state.password,
              "contact":state.contact
          }
          axios.post(api_url + "user/register", payload)
              .then(function (response) {
                  console.log("register success")
                  redirectToHome()
              })
              .catch(function (error) {
                  setState({...state, Success:false})
                  console.log(error)
              });    
      } else {
        setState({...state, Success:false})
        
      }
      
  }

  const redirectToHome = () => {
    props.close()
    return <Redirect to='/home' />
}
const errorMsg = ()=>{
  if (state.Success)
  return <div></div>;
  return <Alert variant = "danger">Register Failed!</Alert>
}
  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      action="/register"
      method="post"
    >
      {errorMsg()}
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom01">
        
          <Form.Label>Full name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Full name"
            name="name"
            id="name"
            value={state.name}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Roll Number</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Roll Number"
            id="rollno"
            name="roll"
            value={state.rollno}
            onChange={handleChange}
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
            id="email"
            value={state.email}
            onChange={handleChange}
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
            id="password"
            required
            value={state.password}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a password.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>Contact number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter Contact Number"
            name="contact"
            required
            id="contact"
            value={state.contact}
            onChange={handleChange}
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
