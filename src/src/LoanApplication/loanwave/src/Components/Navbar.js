import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSignOutAlt, FaUser, FaHome, FaInfoCircle } from 'react-icons/fa'; // FontAwesome icons

// Function to get the value of a specific cookie by name
function getCookie(name) {
  const cookieArr = document.cookie.split(';');
  for (let i = 0; i < cookieArr.length; i++) {
    const cookiePair = cookieArr[i].split('=');
    if (name === cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}

function Navbar() {
  // Get the usertype from the cookies
  const userType = getCookie('userType');
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Clear cookies (or perform any other logout logic)
    document.cookie = "userType=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate('/');
  };

  return (
    <nav style={{ backgroundColor: '#b0276a', color: 'white' }} className="navbar navbar-expand-lg navbar-dark">
      <Link className="navbar-brand" to="/" style={{ color: 'white', fontWeight: 'bold', fontSize: '24px' }}>
        Loanwave
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {/* Visible to all users */}
          <li className="nav-item">
            <Link className="nav-link" to="/" style={{ color: 'white' }}>
              <FaHome className="mr-1" /> Home
            </Link>
          </li>

          {/* Conditional links based on userType */}
          {userType === 'Admin' && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/uStatus" style={{ color: 'white' }}>
                  <FaUser className="mr-1" /> Loan Request Status
                </Link>
              </li>
            </>
          )}

          {userType === 'Customer' && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/apply-loans" style={{ color: 'white' }}>
                  Apply Loans
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/my-loans" style={{ color: 'white' }}>
                  My Loans
                </Link>
              </li>
            </>
          )}

          {/* Additional links visible to all */}
          <li className="nav-item">
            <Link className="nav-link" to="/about" style={{ color: 'white' }}>
              <FaInfoCircle className="mr-1" /> About Us
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          {/* Login/Logout link */}
          {userType ? (
            <li className="nav-item">
              <button className="btn btn-outline-light nav-link" onClick={handleLogout}>
                <FaSignOutAlt className="mr-1" /> Logout
              </button>
            </li>
          ) : (
            <li className="nav-item">
              <Link className="nav-link" to="/login" style={{ color: 'white' }}>
                <FaUser className="mr-1" /> Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
