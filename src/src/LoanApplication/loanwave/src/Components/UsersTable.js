// import React, { useEffect, useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function UsersTable() {
//   const [users, setUsers] = useState([]);
//   const history = useNavigate();

//   useEffect(() => {
//     // Fetch all users from the backend
//     axios.get('http://127.0.0.1:5001/getallusers')
//       .then(response => {
//         setUsers(response.data);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the users!", error);
//       });
//   }, []);

//   // Function to determine the color based on loan status
//   const getLoanStatusColor = (status) => {
//     switch (status) {
//       case 'Approved':
//         return 'green';
//       case 'Pending':
//         return 'orange';
//       case 'Verified':
//         return 'blue';
//       case 'None':
//       default:
//         return 'grey';
//     }
//   };

//   // Handle row click to navigate to the user details page
//   const handleRowClick = (username, loan) => {
//     history(`/user/${username}/${JSON.stringify(loan)}`);
//   };

//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Username</th>
//           <th>Loan Amount</th>
//           <th>Loan Status</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user, userIndex) => (
//           // Only render the user if LoanApplications exist and are not empty
//           user.isLoanExist ? (
//             <React.Fragment key={user._id}>
//               {/* Create a row for the user */}
//               <tr
//                 key={user._id}
//                 style={{ cursor: 'pointer' }}
//               >
//                 <td rowSpan={user.LoanApplications.length + 1}>{userIndex + 1}</td>
//                 <td rowSpan={user.LoanApplications.length + 1}>{user.username}</td>
//               </tr>

//               {/* Create rows for each loan application */}
//               {user.LoanApplications.map((loan, loanIndex) => (
//                 <tr key={loanIndex} onClick={() => handleRowClick(user.username, loan)}>
//                   <td>{loan.LoanAmount}</td>
//                   <td style={{ color: getLoanStatusColor(loan.Loan_Status) }}>
//                     {loan.Loan_Status}
//                   </td>
//                 </tr>
//               ))}
//             </React.Fragment>
//           ) : null
//         ))}
//       </tbody>
//     </Table>
//   );
// }

// export default UsersTable;

import React, { useEffect, useState } from 'react';
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
        return '#27AE60'; // Bright Green
      case 'Pending':
        return '#F39C12'; // Orange
      case 'Rejected':
        return '#E74C3C'; // Red for Rejected
      case 'Verified':
        return '#2980B9'; // Bright Blue
      case 'None':
      default:
        return '#95A5A6'; // Light Grey
    }
  };

  // Handle row click to navigate to the user details page
  const handleRowClick = (username, loan) => {
    history(`/user/${username}/${JSON.stringify(loan)}`);
  };

  return (
    <div style={{ margin: '20px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      {/* Updated Heading */}
      <h2 style={{ 
        fontSize: '30px', 
        fontWeight: 'bold', 
        color: '#D81B60', // Pink for heading
        marginBottom: '20px',
        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' 
      }}>
        Customer Loan Requests
      </h2>
      
      {/* Updated Table with black borders and white rows */}
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)', 
        backgroundColor: '#FFF', // White for table background
        border: '1px solid black', // Black border for the entire table
        borderRadius: '12px',
        overflow: 'hidden'
      }}>
        {/* Updated thead color to dark pink */}
        <thead style={{ backgroundColor: '#AD1457', color: '#FFFFFF' }}> {/* Dark Pink header */}
          <tr>
            <th style={{ padding: '12px', textAlign: 'center', fontSize: '16px', border: '1px solid black' }}>#</th>
            <th style={{ padding: '12px', textAlign: 'center', fontSize: '16px', border: '1px solid black' }}>Username</th>
            <th style={{ padding: '12px', textAlign: 'center', fontSize: '16px', border: '1px solid black' }}>Loan Amount</th>
            <th style={{ padding: '12px', textAlign: 'center', fontSize: '16px', border: '1px solid black' }}>Loan Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, userIndex) => (
            user.isLoanExist ? (
              <React.Fragment key={user._id}>
                <tr
                  key={user._id}
                  style={{
                    backgroundColor: '#FFF', // White for table rows
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s ease', // Smooth transition effect
                    border: '1px solid black' // Black border for the rows
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F0F0F0'} // Light grey on hover
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFF'} // Reset to white on leave
                >
                  <td rowSpan={user.LoanApplications.length + 1} style={{ padding: '14px', textAlign: 'center', fontSize: '15px', border: '1px solid black' }}>{userIndex + 1}</td>
                  <td rowSpan={user.LoanApplications.length + 1} style={{ padding: '14px', textAlign: 'center', fontSize: '15px', border: '1px solid black' }}>{user.username}</td>
                </tr>

                {/* Create rows for each loan application */}
                {user.LoanApplications.map((loan, loanIndex) => (
                  <tr 
                    key={loanIndex} 
                    onClick={() => handleRowClick(user.username, loan)} 
                    style={{ 
                      backgroundColor: '#FFF', // White rows
                      transition: 'background-color 0.3s ease',
                      border: '1px solid black' // Black border for each loan application row
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F0F0F0'} // Light grey on hover
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFF'} // Reset to white on leave
                  >
                    <td style={{ padding: '14px', textAlign: 'center', fontSize: '15px', border: '1px solid black' }}>{loan.LoanAmount}</td>
                    <td style={{ padding: '14px', textAlign: 'center', color: getLoanStatusColor(loan.Loan_Status), fontWeight: 'bold', border: '1px solid black' }}>
                      {loan.Loan_Status}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ) : null
          ))}
        </tbody>
      </table>

      {/* Updated Instruction */}
      <p style={{ marginTop: '20px', fontSize: '18px', fontFamily: 'Georgia, serif', color: '#4A4A4A' }}>
  Click on a user's{' '}
  <span style={{ 
    color: '#1E90FF', 
    fontWeight: 'bold', 
    textDecoration: 'underline', 
    backgroundColor: '#E0F7FA', 
    padding: '2px 6px', 
    borderRadius: '5px', 
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
    border: '1px solid #1E90FF',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' 
  }}>
    Loan Status
  </span>{' '}
  to view detailed information.
</p>

    </div>
  );
}

export default UsersTable;





