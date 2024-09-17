import React, { useEffect, useState } from 'react';

const UserDetails = () => {
  const [userData, setUserData] = useState(null);

  // Function to get the username from cookies
  const getUsernameFromCookies = () => {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith('username='))
      ?.split('=')[1];
    return cookieValue;
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const username = getUsernameFromCookies();
      if (username) {
        try {
          const response = await fetch(`http://127.0.0.1:5001/getuser/${username}`);
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>User Details: {userData.username}</h2>
      <p>Loan Amount: {userData.loanAmount}</p>
      <p>Loan Status: {userData.LoanStatus}</p>
    </div>
  );
};

export default UserDetails;
