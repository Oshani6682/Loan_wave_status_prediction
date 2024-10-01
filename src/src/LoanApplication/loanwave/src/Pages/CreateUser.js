import React from 'react'; 
import CreateUserForm from '../Components/CreateUserForm';

function UserCreationPage() {
  return (
    <div style={{ textAlign: 'center', margin: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '24px', color: '#5B3F8D', fontWeight: 'bold', letterSpacing: '1.5px' }}>
        Hello !!! You can create <span style={{
          color: '#FFD700', // Change to a bright color
          backgroundColor: '#5B3F8D', // Dark background
          padding: '5px 10px', // Add some padding
          borderRadius: '5px', // Rounded corners
          fontWeight: 'bold', // Make it bold
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', // Optional shadow effect
        }}>NEW</span> user account here
      </h1>
      <p style={{ fontSize: '40px', color: '#5B3F8D', margin: '0', paddingLeft: '20px' }}>⬇️</p> {/* Larger arrow emoji with padding */}
      <CreateUserForm />
    </div>
  );
}

export default UserCreationPage;
  



