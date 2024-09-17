import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Loanwave from './Pages/Loanwave';
import ApplyLoans from './Pages/ApplyLoans';
import MyLoans from './Pages/MyLoans';
import CreateUser from './Pages/CreateUser';
import Login from './Pages/Login';
import UserStatus from './Pages/UserStatus';
import UserDetails from './Pages/UserDetails';
import { Navigate, useLocation  } from 'react-router-dom';
import Alreadyhaveloan from './Pages/Alreadyhaveloan';
import Noloanexist from './Pages/Noloanexist';
import AboutUs from './Pages/AboutUs';
import Footer from './Components/Footer'

// Function to check if the user is logged in by checking cookies
function isLoggedIn() {
  return document.cookie.includes('username=');
}

// Function to get the user type from cookies
function getUserType() {
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('userType='))
    ?.split('=')[1];
  return cookieValue;
}

function isLoanExist() {
  // Retrieve the value of the cookie named 'isLoanExist'
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('isLoanExist='))
    ?.split('=')[1];

  // Check if the cookie value is 'true', otherwise return false
  if (cookieValue === 'true') {
    return true;
  } else {
    return false;
  }
}

// PrivateRoute component for restricted access
function PrivateRoute({ element, allowedTypes }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const isUserLoggedIn = isLoggedIn();
  const userType = getUserType();
  const loanExist = isLoanExist();

  if (userType === 'Admin' && currentPath === '/apply-loans') {
    return <Navigate to="/access-denied" replace />;
  }
  
    // Customer with an existing loan trying to access `/apply-loans`
  if (userType === 'Customer' && loanExist && currentPath === '/apply-loans') 
  {
      return <Navigate to="/already-have-loan" replace />;
  }

      
  if (userType === 'Customer' && !loanExist && currentPath === '/my-loans') 
  {
      
    return <Navigate to="/no-loan-exist" replace />;
  }

  if (!isUserLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (allowedTypes && !allowedTypes.includes(userType)) {
    return <Navigate to="/" replace />;
  }

  return element;
}


function AppRouter() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Loanwave />} />
          <Route path="/about" element={<AboutUs/>} />

          <Route path="/create-acc" element={<CreateUser />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/already-have-loan" element={<Alreadyhaveloan/>} />
          <Route path="/no-loan-exist" element={<Noloanexist/>} />

          <Route path="/uStatus" element={<PrivateRoute element={<UserStatus />}  allowedTypes={'Admin'}/>}/>
          <Route path="/my-loans" element={<PrivateRoute element={<MyLoans />}  allowedTypes={'Customer'}/>}/>
          <Route path="/apply-loans" element={<PrivateRoute element={<ApplyLoans />}  allowedTypes={'Customer'}/>}/>
          <Route path="/user/:username" element={<PrivateRoute element={<UserDetails />}/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}
export default AppRouter;