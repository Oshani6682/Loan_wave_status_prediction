import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UsersTable() {
  const [users, setUsers] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    // Fetch all users from the backend
    axios.get('http://127.0.0.1:5001/getallusers')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

  // Function to determine the color based on loan status
  const getLoanStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'green';
      case 'Pending':
        return 'orange';
      case 'Verified':
        return 'blue';
      case 'None':
      default:
        return 'grey';
    }
  };

  // Handle row click to navigate to the user details page
  const handleRowClick = (username) => {
    history(`/user/${username}`);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Loan Amount</th>
          <th>Loan Status</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr
            key={user._id}
            onClick={() => handleRowClick(user.username)}
            style={{ cursor: 'pointer' }}
          >
            <td>{index + 1}</td>
            <td>{user.username}</td>
            <td>{user.loanAmount}</td>
            <td style={{ color: getLoanStatusColor(user.LoanStatus) }}>
              {user.LoanStatus}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default UsersTable;