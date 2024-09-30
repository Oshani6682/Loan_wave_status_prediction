// import React from 'react';
import React, { useEffect } from 'react'; // Import useEffect from React
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom
// import { useNavigate } from 'react-router-dom'; // Add this import statement

function Footer() {
  const location = useLocation(); // Get the current route location

  // Scroll to the top when the route changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location]);
  return (
      <footer className="bg-dark text-white py-4" style={{backgroundColor: 'linear-gradient(180deg, rgba(201,66,119,1) 0%, rgba(47,10,40,1) 100%)'  }}>
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We are a company dedicated to providing the best services to our customers. Learn more about what we do.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white">Home</Link> {/* Link to the home page */}
              </li>
              <li>
                <Link to="/about" className="text-white">Services</Link> {/* Navigate to About Us page */}
              </li>
              <li>
                <Link to="/contact" className="text-white">Contact</Link>
              </li>
            </ul>
            {/* <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">Services</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
            </ul> */}
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: support@loanwave.com</p>
            <p>Phone: +94 123 456 7</p>
            <p>Address: 37 Floor, East Tower, World Trade Center,
            Colombo 01, Sri Lanka.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;