import React from 'react';
import UsersTable from '../Components/UsersTable';
import MessageBox from '../Components/MessageBox';

function Alreadyhaveloan() {
    return (
      <div>
        <MessageBox messageType="error" message="Sorry !! You already have a Loan or Applied for a Loan" />
      </div>
    );
  }
 
  export default Alreadyhaveloan;