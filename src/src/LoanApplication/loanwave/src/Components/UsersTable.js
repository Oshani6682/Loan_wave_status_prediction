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
  const handleRowClick = (username, loan) => {
    history(`/user/${username}/${JSON.stringify(loan)}`);
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
        {users.map((user, userIndex) => (
          // Only render the user if LoanApplications exist and are not empty
          user.isLoanExist ? (
            <React.Fragment key={user._id}>
              {/* Create a row for the user */}
              <tr
                key={user._id}
                style={{ cursor: 'pointer' }}
              >
                <td rowSpan={user.LoanApplications.length + 1}>{userIndex + 1}</td>
                <td rowSpan={user.LoanApplications.length + 1}>{user.username}</td>
              </tr>

              {/* Create rows for each loan application */}
              {user.LoanApplications.map((loan, loanIndex) => (
                <tr key={loanIndex} onClick={() => handleRowClick(user.username, loan)}>
                  <td>{loan.LoanAmount}</td>
                  <td style={{ color: getLoanStatusColor(loan.Loan_Status) }}>
                    {loan.Loan_Status}
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ) : null
        ))}
      </tbody>
    </Table>
  );
}

export default UsersTable;