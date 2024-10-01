import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

function QuoteCard1() {
  return (
    <Card>
  <Card.Header style={{ backgroundColor: '#c94277', color: 'white' }}>What Our Top Clients Say</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        <em>
          "I recently used LoanWave for a personal loan, and the experience exceeded my expectations. The AI-driven approval process was impressively quick—I received confirmation within minutes. The platform made it easy to tailor my repayment plan to fit my financial needs, and the overall process was incredibly smooth. The customer service team was responsive and provided clear answers to all my questions. I highly recommend LoanWave to anyone in Sri Lanka seeking a fast, reliable, and user-friendly loan solution."
        </em>
      </p>
      <footer className="blockquote-footer">
        Ravi Perera <cite title="Source Title">Colombo</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
  );
}

export default QuoteCard1;