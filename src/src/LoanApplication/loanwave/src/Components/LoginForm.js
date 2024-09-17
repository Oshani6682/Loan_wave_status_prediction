import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

  

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate here

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      // Send request to the backend
      const response = await axios.get(`http://127.0.0.1:5001/getuser/${username}`);

      const user = response.data;

      // Check password in the response data
      if (user.password === password) {
        // Set cookies if login is successful
        document.cookie = `username=${user.username}; path=/`;
        document.cookie = `isLoanExist=${user.isLoanExist}; path=/`;
        document.cookie = `userType=${user.Usertype}; path=/`;
        // Optionally, redirect or update the UI
        alert('Login successful');
        navigate('/');
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      setError('Login failed');
    }
  };

  const handleCreateAccount = () => {
    navigate('/create-acc'); // Redirect to the signup page
  };

  return (
    <Form onSubmit={handleSubmit} className="text-start">
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

<br/>


      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <br/>

    <ButtonGroup aria-label="Basic example">
      <Button variant="danger" type="submit">
        Login
      </Button>
      <Button variant="dark"  onClick={handleCreateAccount}>
        Create a New Account
      </Button>
    </ButtonGroup>

      {error && <p style={{ color: 'red' }}>{error}</p>}
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

export default LoginForm;
