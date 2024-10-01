// import React from 'react';
// import LoanPredictionForm from '../Components/LoanPredictionForm';

// function ApplyLoans() {
//     return (
//       <div>
//         <h1>Apply for Loans</h1>
//         <p>Here you can apply for loans.</p>        
//         <LoanPredictionForm/>
//       </div>


//     );
//   }
 
//   export default ApplyLoans;

import React from 'react';
import LoanPredictionForm from '../Components/LoanPredictionForm';

function ApplyLoans() {
    return (
      <div style={{ textAlign: 'center', margin: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#F9F3FF', padding: '30px', borderRadius: '10px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#D81B60', marginBottom: '10px' }}>
           LOAN APPLICATION FORM
        </h1>
        <p style={{ 
          fontSize: '20px', 
          color: '#555', 
          marginBottom: '20px', 
          padding: '10px 20px', 
          backgroundColor: '#FFD54F', 
          borderRadius: '5px', 
          display: 'inline-block', 
          fontWeight: 'bold', 
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' 
        }}>
          <span role="img" aria-label="loan icon" style={{ marginRight: '8px' }}></span>
          Here you can apply for Loans...Please fill out the below details
        </p>
        <div style={{ margin: '20px 0' }}>
          <span style={{ fontSize: '36px', color: '#D81B60', fontWeight: 'bold' }}>👇</span> {/* Larger down arrow emoji */}
        </div>
        <LoanPredictionForm/>
      </div>
    );
}

export default ApplyLoans;


