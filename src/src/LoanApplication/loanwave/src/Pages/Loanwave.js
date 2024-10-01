// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS with Popper.js
// import 'jquery';  // jQuery
// import ControlledCarousel from '../Components/ControlledCarousel';
// import WithHeaderAndQuoteExample from '../Components/QuoteCard1'; // Adjust the path according to your structure
// import CheckItOut from '../Components/CheckItOut';

// function Loanwave() {
//   return (
//     <div>
//       {/* Bootstrap Jumbotron */}
//       <div className="jumbotron jumbotron-fluid">
//         <div className="container">
//           <h1 className="display-4">Loan Wave</h1>
//           <p className="lead">
//             Welcome to the Island most trusted loan service
//           </p>
//         </div>
//       </div>

//       {/* Add some space */}
//       <div className="mt-5"></div>

//       {/* Bootstrap Carousel */}
//       <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//       <ControlledCarousel />

//       {/* Add some space */}
//     <div className="mt-5"></div>
//         <WithHeaderAndQuoteExample/>

//       {/* Add some space */}
//       <div className="mt-5"></div>

//       <CheckItOut/>

//             {/* Add some space */}
//             <div className="mt-5"></div>
//     </div>
//     </div>
//   );
// }

// export default Loanwave;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS with Popper.js
import 'jquery'; // jQuery
import ControlledCarousel from '../Components/ControlledCarousel';
import WithHeaderAndQuoteExample from '../Components/QuoteCard1'; // Adjust the path according to your structure
import CheckItOut from '../Components/CheckItOut';

function Loanwave() {
  // Inline styles
  const jumbotronStyle = {
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    padding: '4rem 2rem',
  };

  const headingStyle = {
    fontFamily: "'Lobster', cursive",
    fontSize: '4rem',
    fontWeight: 600,
    color: '#b0276a',
    letterSpacing: '3px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'color 0.3s ease',
  };

  const headingHoverStyle = {
    color: '#d45087',
  };

  const subheadingStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '1.5rem',
    fontWeight: 300,
    color: '#333',
    letterSpacing: '1.5px',
    marginTop: '1rem',
    textTransform: 'uppercase',
    transition: 'font-weight 0.3s ease, color 0.3s ease',
  };

  const subheadingHoverStyle = {
    fontWeight: 600,
    color: '#6a1b9a',
  };

  return (
    <div>
      {/* Bootstrap Jumbotron */}
      <div className="jumbotron jumbotron-fluid" style={jumbotronStyle}>
        <div className="container">
          <h1
            className="display-4"
            style={headingStyle}
            onMouseOver={(e) => (e.currentTarget.style.color = headingHoverStyle.color)}
            onMouseOut={(e) => (e.currentTarget.style.color = headingStyle.color)}
          >
            Loan Wave
          </h1>
          <p
            className="lead"
            style={subheadingStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.fontWeight = subheadingHoverStyle.fontWeight;
              e.currentTarget.style.color = subheadingHoverStyle.color;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.fontWeight = subheadingStyle.fontWeight;
              e.currentTarget.style.color = subheadingStyle.color;
            }}
          >
            Welcome to the Island most trusted loan service
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

        <WithHeaderAndQuoteExample />

        {/* Add some space */}
        <div className="mt-5"></div>

        <CheckItOut />

        {/* Add some space */}
        <div className="mt-5"></div>
      </div>
    </div>
  );
}

export default Loanwave;
