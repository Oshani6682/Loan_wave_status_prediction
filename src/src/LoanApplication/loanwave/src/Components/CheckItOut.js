import Alert from 'react-bootstrap/Alert';

function CheckItOut() {
  return (
    <Alert variant="light">
      Let`s Get Started{' '}
      <Alert.Link href="/apply-loans">Apply for a Loan</Alert.Link>
    </Alert>
  );
}

export default CheckItOut;