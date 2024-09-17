import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import axios from 'axios'; // You'll need to install axios for making HTTP requests
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useNavigate } from 'react-router-dom';

function CreateUserForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '', // Added email field
    password: '',
    isLoanExist: false,
    loanAmount: 0,
    LoanStatus: 'None',
    Usertype: ''
  });

  const navigate = useNavigate(); // Initialize useNavigate here

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.post('http://127.0.0.1:5001/createuser', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert('User created successfully');
      // Optionally, reset form data or redirect
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Failed to create user');
    }
  };

  const handleloginnav = () => {
    navigate('/login '); // Redirect to the signup page
  };

  return (
    <Form onSubmit={handleSubmit}  className="text-start">
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}  // Added email field in form
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formUserType">
        <Form.Label>User Type</Form.Label>
        <Form.Control
          as="select"
          name="Usertype"
          value={formData.Usertype}
          onChange={handleChange}
        >
          <option value="">Select User Type</option>
          <option value="Admin">Admin</option>
          <option value="Customer">Customer</option>
        </Form.Control>
      </Form.Group>

<br/>
      <ButtonGroup aria-label="Basic example">
        <Button variant="danger" type="submit">
          Create User
        </Button>
        <Button variant="dark"  onClick={handleloginnav}>
          Login to Existing Account
        </Button>
    </ButtonGroup>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

    </Form>

  );
}

export default CreateUserForm;