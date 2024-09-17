import React from 'react';
import UsersTable from '../Components/UsersTable';
import MessageBox from '../Components/MessageBox';

function Alreadyhaveloan() {
    return (
      <div>
        <MessageBox messageType="error" message="You Already Have a Loan" />
      </div>
    );
  }
 
  export default Alreadyhaveloan;