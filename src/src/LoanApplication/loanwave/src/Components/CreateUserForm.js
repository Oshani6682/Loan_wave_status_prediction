// import React, { useState } from 'react';
// import { Form, Button, Col } from 'react-bootstrap';
// import axios from 'axios'; // You'll need to install axios for making HTTP requests
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import { useNavigate } from 'react-router-dom';

// function CreateUserForm() {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '', // Added email field
//     password: '',
//     isLoanExist: false,
//     loanAmount: 0,
//     LoanStatus: 'None',
//     Usertype: ''
//   });

//   const navigate = useNavigate(); // Initialize useNavigate here

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       await axios.post('http://127.0.0.1:5001/createuser', formData, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       alert('User created successfully');

//       // Reset form data after successful creation
//       setFormData({
//         username: '',
//         email: '',
//         password: '',
//         isLoanExist: false,
//         loanAmount: 0,
//         LoanStatus: 'None',
//         Usertype: ''
//       });

//       // Redirect to login page
//       navigate('/login');
//       // Optionally, reset form data or redirect
//     } catch (error) {
//       console.error('Error creating user:', error);
//       alert('Failed to create user');
//     }
//   };

//   const handleloginnav = () => {
//     navigate('/login '); // Redirect to the signup page
//   };

//   return (
//     <Form onSubmit={handleSubmit}  className="text-start">
//       <Form.Group controlId="formUsername">
//         <Form.Label>Username</Form.Label>
//         <Form.Control
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//           required
//         />
//       </Form.Group>

//       <Form.Group controlId="formEmail">
//         <Form.Label>Email</Form.Label>
//         <Form.Control
//           type="email"
//           name="email"
//           value={formData.email}  // Added email field in form
//           onChange={handleChange}
//           required
//         />
//       </Form.Group>

//       <Form.Group controlId="formPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//       </Form.Group>

//       <Form.Group controlId="formUserType">
//         <Form.Label>User Type</Form.Label>
//         <Form.Control
//           as="select"
//           name="Usertype"
//           value={formData.Usertype}
//           onChange={handleChange}
//         >
//            <option value="">Select User Type</option>
//           {/* Disable Admin option with red styling */}
//           <option value="Admin" disabled style={{ color: 'red' }}>
//             Admin (Disabled)
//           </option>
//           <option value="Customer" style={{ fontWeight: 'bold' }}>
//             Customer
//           </option>
//         </Form.Control>
//       </Form.Group>
//           {/* <option value="">Select User Type</option>
//           <option value="Admin">Admin</option>
//           <option value="Customer">Customer</option>
//         </Form.Control>
//       </Form.Group> */}

// <br/>
//       <ButtonGroup aria-label="Basic example">
//         <Button variant="danger" type="submit">
//           Create User
//         </Button>
//         <Button variant="dark"  onClick={handleloginnav}>
//           Login to Existing Account
//         </Button>
//     </ButtonGroup>
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

// export default CreateUserForm;

import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import axios from 'axios'; // You'll need to install axios for making HTTP requests
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useNavigate } from 'react-router-dom';

function CreateUserForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
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

      // Reset form data after successful creation
      setFormData({
        username: '',
        email: '',
        password: '',
        isLoanExist: false,
        loanAmount: 0,
        LoanStatus: 'None',
        Usertype: ''
      });

      // Redirect to login page
      navigate('/login');
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Failed to create user');
    }
  };

  const handleloginnav = () => {
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div
      style={{
        backgroundImage: 'url(https://www.shutterstock.com/image-vector/email-marketing-internet-chatting-24-260nw-1408208687.jpg)',
        backgroundSize: 'cover', // Ensures the image covers the entire div
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <Form onSubmit={handleSubmit} className="text-start" style={{ backgroundColor: '#D8BFD8', padding: '40px', borderRadius: '12px', width: '500px' }}>
        <h2 style={{ color: '#5B3F8D', textAlign: 'center', fontWeight: 'bold', marginBottom: '20px' }}>Create New User</h2>

        <Form.Group controlId="formUsername">
          <Form.Label style={{ color: '#5B3F8D' }}>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '6px' }}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label style={{ color: '#5B3F8D' }}>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '6px' }}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label style={{ color: '#5B3F8D' }}>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '6px' }}
          />
        </Form.Group>

        <Form.Group controlId="formUserType">
          <Form.Label style={{ color: '#5B3F8D' }}>User Type</Form.Label>
          <Form.Control
            as="select"
            name="Usertype"
            value={formData.Usertype}
            onChange={handleChange}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '6px' }}
          >
            <option value="">Select User Type</option>
            <option value="Admin" disabled style={{ color: 'red' }}>
              Admin (Disabled)
            </option>
            <option value="Customer" style={{ fontWeight: 'bold' }}>
              Customer
            </option>
          </Form.Control>
        </Form.Group>

        <ButtonGroup aria-label="Basic example" style={{ marginTop: '20px', width: '100%' }}>
          <Button 
            variant="light" 
            type="submit" 
            style={{ 
              width: '50%', 
              borderRadius: '6px', 
              color: '#D8BFD8', 
              backgroundColor: '#5B3F8D', // Dark Purple for "Create User"
              border: 'none',
            }}
          >
            Create User
          </Button>
          <Button 
            variant="dark" 
            onClick={handleloginnav} 
            style={{ 
              width: '50%', 
              borderRadius: '6px', 
              backgroundColor: '#8A2BE2', // BlueViolet for "Login to Existing Account"
              color: '#fff', 
              border: 'none' 
            }}
          >
            Login to Existing Account
          </Button>
        </ButtonGroup>
      </Form>
    </div>
  );
}

export default CreateUserForm;










