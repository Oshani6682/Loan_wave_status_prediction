import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

function QuoteCard1() {
  return (
    <Card>
      <Card.Header style={{ backgroundColor: '#c94277', color: 'white'  }}>What Our Top Clients Say</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            I recently used this loan application for a personal loan, and I couldn't be more satisfied with the experience. 
            The AI-based approval process was incredibly fast—I received my loan approval in just a few minutes, 
            and the entire process was seamless. I was impressed by how easy it was to customize my repayment options 
            to fit my budget. The customer service team was also very helpful and answered all my questions promptly. 
            I highly recommend this app to anyone looking for a reliable and efficient loan solution in Sri Lanka.{' '}
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