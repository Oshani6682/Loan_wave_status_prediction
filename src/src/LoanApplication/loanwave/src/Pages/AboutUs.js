import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaUsers, FaBullseye, FaLightbulb } from 'react-icons/fa'; // Icons

function AboutUs() {
    return (
    //   <div>
    //     <div>
    //         <h1>
    //             Who We Are?
    //         </h1>
    //         <Card body>Welcome to LoanWave Solutions, your trusted online platform for personalized loan services 
    //             powered by advanced artificial intelligence. Founded on the principles of transparency, efficiency, and innovation, 
    //             our goal is to redefine the traditional loan process by making it faster, simpler, and more accessible. 
    //             Whether you're a first-time borrower or someone looking to consolidate existing loans, LoanWave Solutions is 
    //             here to guide you with data-driven recommendations tailored to your specific needs.</Card>
    //     </div>
    //     <br/>
    //     <br/>
    //     <div>
    //         <h1>
    //         Our Vision
    //         </h1>
    //         <Card body>At Loanwave Solutions PVT LTD, our vision is to create a world where financial support is available 
    //             to everyone, regardless of background or financial history. We believe that everyone deserves a fair
    //              chance at securing a loan that meets their needs, and our AI-powered platform enables us to offer
    //               personalized loan solutions with speed and accuracy. By leveraging the latest in AI and machine 
    //               learning technologies, we aim to eliminate the biases often present in traditional lending practices,
    //                fostering a more inclusive and equitable financial ecosystem.</Card>
    //     </div>
    //     <br/>
    //     <br/>
    //     <div>
    //         <h1>
    //             How We Work
    //         </h1>
    //         <Card body>Loanwave Solutions is not your typical loan provider. We use cutting-edge artificial intelligence algorithms 
    //             to analyze a wide range of factors—beyond just your credit score—ensuring that you receive loan options that are 
    //             uniquely suited to your financial situation. Our intelligent platform evaluates variables like your employment 
    //             history, spending patterns, and financial behavior to offer tailored loan recommendations. This approach not only 
    //             increases your chances of approval but also ensures that the loan you receive aligns with your ability to repay it.</Card>
    //     </div>
    //     <br/>
    //     <br/>
    //     <br/>
    //     <br/>
    //     <br/>
    //     <br/>
    //   </div>
    <Container className="my-5">
    <Row className="text-center mb-4">
        <Col>
            <h1 className="display-4 font-weight-bold">About LoanWave Solutions</h1>
            <p className="lead text-muted">Your trusted AI-driven loan partner</p>
        </Col>
    </Row>

    <Row className="mb-5">
        <Col md={4} className="text-center">
            <FaUsers size={60} className="mb-3 text-primary" />
            <h2>Who We Are</h2>
            <Card body className="shadow-sm p-4">
                Welcome to LoanWave Solutions, your trusted online platform for personalized loan services powered by advanced artificial intelligence. We aim to redefine the loan process by making it faster, simpler, and more accessible, providing tailored recommendations for your needs.
            </Card>
        </Col>

        <Col md={4} className="text-center">
            <FaBullseye size={60} className="mb-3 text-success" />
            <h2>Our Vision</h2>
            <Card body className="shadow-sm p-4">
                At LoanWave Solutions PVT LTD, our vision is to create a world where financial support is accessible to everyone. Our AI-powered platform enables us to offer personalized loan solutions with speed and accuracy, fostering an inclusive financial ecosystem.
            </Card>
        </Col>

        <Col md={4} className="text-center">
            <FaLightbulb size={60} className="mb-3 text-warning" />
            <h2>How We Work</h2>
            <Card body className="shadow-sm p-4">
                LoanWave Solutions uses cutting-edge AI algorithms to analyze various factors beyond just your credit score, ensuring you receive loan options suited to your financial situation, increasing your chances of approval and aligning with your ability to repay.
            </Card>
        </Col>
    </Row>
</Container>
);
}
      
    // );
//   }
 
  export default AboutUs;