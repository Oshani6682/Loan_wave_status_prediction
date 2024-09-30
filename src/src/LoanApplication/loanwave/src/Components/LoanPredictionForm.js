import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoanPredictionForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    gender: '',
    married: '',
    dependents: '',
    education: '',
    selfEmployed: '',
    applicantIncome: '',
    coapplicantIncome: '',
    loanAmount: '',
    loanAmountTerm: '',
    creditHistory: '',
    propertyArea: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to get the username from cookies
function getUsernameFromCookies() {
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('username='))
    ?.split('=')[1];
  return cookieValue || "test"; // Fallback to "test" if no username is found
}

  const mapFormData = () => {
    return {
      username: getUsernameFromCookies(), // Replace with dynamic username if needed
      Gender: [formData.gender === "Male" ? 1 : 0],
      Married: [formData.married === "Yes" ? 1 : 0],
      Dependents: [parseInt(formData.dependents, 10)],
      Education: [formData.education === "Graduate" ? 1 : 0],
      Self_Employed: [formData.selfEmployed === "Yes" ? 1 : 0],
      ApplicantIncome: [parseInt(formData.applicantIncome, 10)],
      CoapplicantIncome: [parseInt(formData.coapplicantIncome, 10)],
      LoanAmount: [parseInt(formData.loanAmount, 10)],
      Loan_Amount_Term: [parseInt(formData.loanAmountTerm, 10)],
      Credit_History: [parseInt(formData.creditHistory, 10)],
      Property_Area: [
        formData.propertyArea === "Urban"
          ? 1
          : formData.propertyArea === "Semiurban"
          ? 2
          : 0,
      ],
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mappedData = mapFormData();

    try {
      const response = await axios.post('http://127.0.0.1:5000/requestLoan', mappedData);
      // Print the response in the console
      console.log('Response:', response.data);

      try {
        // Send request to the backend
        let usernameI = getUsernameFromCookies();
        const response = await axios.get(`http://127.0.0.1:5001/getuser/${usernameI}`);
  
        const user = response.data;
  
        // Check password in the response data

        document.cookie = `isLoanExist=${user.isLoanExist}; path=/`;
        // Optionally, redirect or update the UI}
      } catch (error) {
        console.log(' Something Went Wrong ');
      }
      // Redirect to the home page upon successful submission
      navigate('/');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Col} controlId="formGender">
        <Form.Label>Gender</Form.Label>
        <Form.Control as="select" name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Choose...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Form.Control>
      </Form.Group>
      <br />

      <Form.Group as={Col} controlId="formMarried">
        <Form.Label>Married</Form.Label>
        <Form.Control as="select" name="married" value={formData.married} onChange={handleChange}>
          <option value="">Choose...</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </Form.Control>
      </Form.Group>
      <br />

      <Form.Group controlId="formDependents">
        <Form.Label>Dependents</Form.Label>
        <Form.Control type="text" name="dependents" value={formData.dependents} onChange={handleChange} />
      </Form.Group>
      <br />

      <Form.Group controlId="formEducation">
        <Form.Label>Education</Form.Label>
        <Form.Control as="select" name="education" value={formData.education} onChange={handleChange}>
          <option value="">Choose...</option>
          <option value="Graduate">Graduate</option>
          <option value="Not Graduate">Not Graduate</option>
        </Form.Control>
      </Form.Group>
      <br />

      <Form.Group controlId="formSelfEmployed">
        <Form.Label>Self Employed</Form.Label>
        <Form.Control as="select" name="selfEmployed" value={formData.selfEmployed} onChange={handleChange}>
          <option value="">Choose...</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </Form.Control>
      </Form.Group>
      <br />

      <Form.Group controlId="formApplicantIncome">
        <Form.Label>Applicant Income</Form.Label>
        <Form.Control type="number" name="applicantIncome" value={formData.applicantIncome} onChange={handleChange} />
      </Form.Group>
      <br />

      <Form.Group controlId="formCoapplicantIncome">
        <Form.Label>Coapplicant Income</Form.Label>
        <Form.Control type="number" name="coapplicantIncome" value={formData.coapplicantIncome} onChange={handleChange} />
      </Form.Group>
      <br />

      <Form.Group controlId="formLoanAmount">
        <Form.Label>Loan Amount</Form.Label>
        <Form.Control type="number" name="loanAmount" value={formData.loanAmount} onChange={handleChange} />
      </Form.Group>
      <br />

      <Form.Group controlId="formLoanAmountTerm">
        <Form.Label>Loan Amount Term</Form.Label>
        <Form.Control type="number" name="loanAmountTerm" value={formData.loanAmountTerm} onChange={handleChange} />
      </Form.Group>
      <br />

      <Form.Group controlId="formCreditHistory">
        <Form.Label>Credit History</Form.Label>
        <Form.Control as="select" name="creditHistory" value={formData.creditHistory} onChange={handleChange}>
          <option value="">Choose...</option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </Form.Control>
      </Form.Group>
      <br />

      <Form.Group controlId="formPropertyArea">
        <Form.Label>Property Area</Form.Label>
        <Form.Control as="select" name="propertyArea" value={formData.propertyArea} onChange={handleChange}>
          <option value="">Choose...</option>
          <option value="Urban">Urban</option>
          <option value="Semiurban">Semiurban</option>
          <option value="Rural">Rural</option>
        </Form.Control>
      </Form.Group>
      <br />

      <Button variant="primary" type="submit">
        Request Loan
      </Button>
      <br />
      <br />
    </Form>
  );
}

export default LoanPredictionForm;