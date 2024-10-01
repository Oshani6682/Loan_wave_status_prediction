// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


  

// function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const navigate = useNavigate(); // Initialize useNavigate here

//   const handleSubmit = async (e) => {
//     e.preventDefault();

    
//     try {
//       // Send request to the backend
//       const response = await axios.get(`http://127.0.0.1:5001/getuser/${username}`);

//       const user = response.data;

//       // Check password in the response data
//       if (user.password === password) {
//         // Set cookies if login is successful
//         document.cookie = `username=${user.username}; path=/`;
//         document.cookie = `isLoanExist=${user.isLoanExist}; path=/`;
//         document.cookie = `userType=${user.Usertype}; path=/`;
//         // Optionally, redirect or update the UI
//         alert('Login successful');
//         navigate('/');
//       } else {
//         setError('Invalid credentials');
//       }
//     } catch (error) {
//       setError('Login failed');
//     }
//   };

//   const handleCreateAccount = () => {
//     navigate('/create-acc'); // Redirect to the signup page
//   };

//   return (
//     <Form onSubmit={handleSubmit} className="text-start">
//       <Form.Group controlId="formBasicUsername">
//         <Form.Label>Username</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </Form.Group>

// <br/>


//       <Form.Group controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </Form.Group>

//       <br/>

//     <ButtonGroup aria-label="Basic example">
//       <Button variant="danger" type="submit">
//         Login
//       </Button>
//       <Button variant="dark"  onClick={handleCreateAccount}>
//         Create a New Account
//       </Button>
//     </ButtonGroup>

//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <br/>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>

//     </Form>

//   );
// }

// export default LoginForm;

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa'; // Import icons

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://127.0.0.1:5001/getuser/${username}`);
      const user = response.data;

      if (user.password === password) {
        document.cookie = `username=${user.username}; path=/`;
        document.cookie = `isLoanExist=${user.isLoanExist}; path=/`;
        document.cookie = `userType=${user.Usertype}; path=/`;
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
    navigate('/create-acc');
  };

  return (
    <div
      style={{
        backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/022/529/593/small_2x/3d-render-bank-model-and-stack-of-gold-coin-with-copy-space-on-red-background-financial-3d-model-background-photo.jpg)', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white for the form
          padding: '50px',
          borderRadius: '12px',
          boxShadow: '0 10px 60px rgba(0, 0, 0, 0.3)',
          width: '400px', // Adjusted width
          textAlign: 'center',
        }}
      >
        <h2 style={{ marginBottom: '20px', color: '#ff6f91', textShadow: '1px 1px 3px rgba(255, 255, 255, 0.8)' }}>
          Welcome Back
        </h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicUsername" className="mb-3">
            <Form.Label style={{ color: '#ff6f91' }}><FaUser /> Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                borderColor: '#ff6f91',
                backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background for input
                color: '#333',
                borderRadius: '6px',
              }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mb-4">
            <Form.Label style={{ color: '#ff6f91' }}><FaLock /> Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                borderColor: '#ff6f91',
                backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background for input
                color: '#333',
                borderRadius: '6px',
              }}
            />
          </Form.Group>

          <ButtonGroup aria-label="Basic example" className="w-100">
            <Button variant="danger" type="submit" className="w-100" style={{ border: 'none', borderRadius: '6px' }}>
              Login
            </Button>
            <Button variant="outline-danger" onClick={handleCreateAccount} className="w-100 ms-2" style={{ borderRadius: '6px' }}>
              Create Account
            </Button>
          </ButtonGroup>

          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        </Form>
      </div>
    </div>
  );
}

export default LoginForm;









