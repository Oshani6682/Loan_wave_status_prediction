// import React from 'react';
// import UserDetails from '../Components/UserDetails';

// function MyLoans() {
//     return (
//       <div>
//         <h1>My Loans</h1>
//         <UserDetails/>
//       </div>
//     );
//   }
 
//   export default MyLoans;
import React from 'react'; 
import UserDetails from '../Components/UserDetails';

function MyLoans() {
  return (
    <div style={{ 
      textAlign: 'center', 
      margin: '20px', 
      fontFamily: 'Arial, sans-serif', 
      backgroundColor: '#FCE4EC', // Light pink background color
      padding: '30px', 
      borderRadius: '12px', 
      boxShadow: '0 6px 30px rgba(0, 0, 0, 0.15)' 
    }}>
      <h1 style={{ 
        fontSize: '36px', 
        color: '#5B3F8D', 
        fontWeight: 'bold', 
        letterSpacing: '2px', 
        textTransform: 'uppercase', 
        backgroundColor: '#D1C4E9', // Background color for the heading
        padding: '15px', 
        borderRadius: '8px', 
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' 
      }}>
        💰 My Loans 💰 {/* Changed emoji to a more suitable one */}
      </h1>
      <p style={{ 
        fontSize: '20px', 
        color: '#4A4A4A', 
        marginBottom: '25px', 
        fontStyle: 'italic' 
      }}>
        👋 Hello! Here is your loan request status. 📅
      </p>
      <div style={{ 
        backgroundColor: '#E1BEE7', // Light purple background for UserDetails
        padding: '20px', 
        borderRadius: '8px', 
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
        margin: '0 auto', // Center the UserDetails container
        width: '80%', // Make the UserDetails section wider
      }}>
        <UserDetails style={{ fontWeight: 'bold' }} /> {/* Bold UserDetails */}
      </div>
      <p style={{ 
        marginTop: '20px', 
        fontSize: '18px', 
        color: '#7B1FA2' 
      }}>
        If you have any questions, feel free to reach out! 🤔💬
      </p>
    </div>
  );
}

export default MyLoans;




