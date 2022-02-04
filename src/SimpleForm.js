import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {useState} from 'react';
import './index.css';
var data;

export default function SimpleForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [customerID, setCustomerID] = useState('');

    function handleNameChange(e) {
      setName(e.target.value);
    }
    
    function handleEmailChange(e){
      setEmail(e.target.value);
    }

    function handleCompanyChange(e){
      setCompany(e.target.value);
    }

    function handleIdentifierChange(e){
      setCustomerID(e.target.value);
    }
  
    async function handleSubmit(e) {
        const HTTP = new XMLHttpRequest();
        const url = 'https://wbk9ju48uh.execute-api.us-east-1.amazonaws.com/default/SESLambda';

        HTTP.open("POST", url);

        HTTP.onreadystatechange = function () {
            if (HTTP.readyState === 4) {
                console.log(HTTP.status);
                console.log(HTTP.responseText);
            }
        };

        data = {
            name,
            email,
            company,
            customerID
        }

        console.log(data);

        HTTP.send(JSON.stringify(data));
        console.log("Data sent");
    }
  
      return (
        <>
        <CustomNavbar/>
            <Form className="landing-form" onSubmit={handleSubmit}>

      <Form.Group  className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="input" placeholder="Full Name" onChange={handleNameChange}/>
      </Form.Group>

      <Form.Group  className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group  className="mb-3" controlId="formCompanyName">
        <Form.Label>Company Name</Form.Label>
        <Form.Control type="input" placeholder="Company Name" onChange={handleCompanyChange}/>
      </Form.Group>

      <Form.Group  className="mb-3" controlId="formCustomerIdentifier">
        <Form.Label>Customer Identifier</Form.Label>
        <Form.Control type="input" placeholder="Full Name" onChange={handleIdentifierChange}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </>
      );
  }



function CustomNavbar() {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="https://www.nuvalence.io">
        <img
          alt=""
          src="./Deck-Logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
    </Container>
  </Navbar>
</>
  );
}