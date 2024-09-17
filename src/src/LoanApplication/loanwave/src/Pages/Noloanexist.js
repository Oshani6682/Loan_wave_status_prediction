import React from 'react';
import MessageBox from '../Components/MessageBox';

function Noloanexist() {
    return (
      <div>
        <MessageBox messageType="warning" message="You don`t Have any Approved and or Verified Loans" />
      </div>
    );
  }
 
  export default Noloanexist;