import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function UserDetails() {
    const { username } = useParams();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Fetch user details from the API
      fetch(`http://127.0.0.1:5001/getuser/${username}`)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
          setLoading(false);
        });
    }, [username]);
  
    // Update user status on the server
    const updateUserStatus = (newStatus) => {
        fetch(`http://127.0.0.1:5001/updateuser/${username}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ LoanStatus: newStatus }),
        })
          .then((response) => {
            // Check if the response is not OK (e.g., 404, 500, etc.)
            if (!response.ok) {
              return response.text().then((text) => {
                throw new Error(`Error: ${response.status} - ${text}`);
              });
            }
            return response.json(); // Try to parse JSON if the response is OK
          })
          .then((data) => {
            setUserData((prevUserData) => ({
              ...prevUserData,
              LoanStatus: newStatus,
            }));
            alert(`User status updated to ${newStatus}`);
          })
          .catch((error) => {
            console.error('Error updating user status:', error);
            alert('Failed to update user status. Please check the server logs.');
          });
      };
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!userData) {
      return <div>No user data found.</div>;
    }
  
    // Determine the button's state and text based on LoanStatus
    const renderVerifyButton = () => {
      switch (userData.LoanStatus) {
        case 'None':
          return (
            <Button variant="secondary" disabled>
              Apply for a loan first
            </Button>
          );
        case 'Pending':
          return (
            <Button variant="secondary" disabled>
              Loan Pending
            </Button>
          );
        case 'Approved':
          return (
            <Button variant="primary" onClick={() => updateUserStatus('Verified')}>
              Verify
            </Button>
          );
        case 'Verified':
          return (
            <Button variant="success" disabled>
              Already Verified
            </Button>
          );
        default:
          return null;
      }
    };
  
    // Render the Reset button
    const renderResetButton = () => {
      if (userData.LoanStatus === 'Verified' || userData.LoanStatus === 'Approved') {
        return (
          <Button variant="warning" onClick={() => updateUserStatus('None')}>
            Reset
          </Button>
        );
      }
      return null; // Hide the Reset button if the user is not Verified or Approved
    };
  
    return (
      <div>
        <h2>User Details: {userData.username}</h2>
        <p>Loan Amount: {userData.loanAmount}</p>
        <p>Loan Status: {userData.LoanStatus}</p>
        <p>User Type: {userData.Usertype}</p>
        
        {/* Conditionally render the Verify button */}
        {renderVerifyButton()}
  
        {/* Conditionally render the Reset button */}
        {renderResetButton()}
      </div>
    );
  }
  
  export default UserDetails;