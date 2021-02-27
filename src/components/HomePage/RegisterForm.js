import React, {useEffect,useState} from "react";
import { Form, Col, Button } from "react-bootstrap";

import axios from 'axios';
function FormExample(props) {
  const [validated, setValidated] = useState(false);
  const [toggleDisplay] = useState('none');
    const openModal = () => {
        toggleDisplay('block');     
    }
  const [state , setState] = useState({
    name:"",
    rollno:"",
    email : "",
    password : "",
    contact:""
})
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    sendDetailsToServer();
    closeModal();
  };

   const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
        
    }
    const closeModal = () => {
      toggleDisplay('none'); 
      
  }
  useEffect(() => {
      if(props.errorMessage !== null) {
          openModal()
      } else {
          closeModal()
      }
  });


    const sendDetailsToServer = () => {
      if(state.email.length && state.password.length) {
          
          const payload={
            "name":state.name,
            "rollNmuber":state.rollno,
              "email":state.email,
              "password":state.password,
              "contact":state.contact
          }
          axios.post("http://localhost:3000/home", payload)
              .then(function (response) {
                  if(response.status === 200){
                      setState(prevState => ({
                          ...prevState,
                          'successMessage' : 'Registration successful. Redirecting to home page..'
                      }))
                      
                      redirectToHome();
                      props.showError(null)
                  } else{
                      props.showError("Some error ocurred");
                  }
              })
              .catch(function (error) {
                  console.log(error);
              });    
      } else {
          props.showError('Please enter valid details')    
      }
      
  }

  const redirectToHome = () => {
    props.updateTitle('Home')
    props.history.push('/home');
}

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
