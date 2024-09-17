import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS with Popper.js
import 'jquery';  // jQuery
import ControlledCarousel from '../Components/ControlledCarousel';
import WithHeaderAndQuoteExample from '../Components/QuoteCard1'; // Adjust the path according to your structure
import CheckItOut from '../Components/CheckItOut';

function Loanwave() {
  return (
    <div>
      {/* Bootstrap Jumbotron */}
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Loan Wave</h1>
          <p className="lead">
            Welcome to the islands most trusted loan service
          </p>
        </div>
      </div>

      {/* Add some space */}
      <div className="mt-5"></div>

      {/* Bootstrap Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ControlledCarousel />

      {/* Add some space */}
    <div className="mt-5"></div>
        <WithHeaderAndQuoteExample/>

      {/* Add some space */}
      <div className="mt-5"></div>

      <CheckItOut/>

            {/* Add some space */}
            <div className="mt-5"></div>
    </div>
    </div>
  );
}

export default Loanwave;