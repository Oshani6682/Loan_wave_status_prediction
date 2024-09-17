import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import msgImage1 from '../Assets/Icons/icons8-sad.gif';
import msgImage2 from '../Assets/Icons/icons8-puzzled.gif';
import msgImage3 from '../Assets/Icons/icons8-anime-emoji.gif';
import msgImage4 from '../Assets/Icons/icons8-shocker-emoji.gif';


function MessageBox({ messageType, message }) {
  const [timeLeft, setTimeLeft] = useState(10); // Timer for 10 seconds
  const navigate = useNavigate();

 
  // Countdown and redirect logic
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    const timeoutId = setTimeout(() => {
      navigate('/'); // Redirect to home page after 10 seconds
    }, 10000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  let imageSrc;
  if (messageType === 'info') {
    return (
      <div className="message-box">
        <img src={msgImage3} alt={messageType} />
        <div className="message-content">
          <h2>{message}</h2>
          <p>Redirecting to home page in {timeLeft} seconds...</p>
        </div>
      </div>
    );
  } else if (messageType === 'warning') {
    return (
      <div className="message-box">
        <img src={msgImage2} alt={messageType} />
        <div className="message-content">
          <h2>{message}</h2>
          <p>Redirecting to home page in {timeLeft} seconds...</p>
        </div>
      </div>
    );
  } else if (messageType === 'error') {
    return (
      <div className="message-box">
        <img src={msgImage1} alt={messageType} />
        <div className="message-content">
          <h2>{message}</h2>
          <p>Redirecting to home page in {timeLeft} seconds...</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="message-box">
        <img src={msgImage4} alt={messageType} />
        <div className="message-content">
          <h2>{message}</h2>
          <p>Redirecting to home page in {timeLeft} seconds...</p>
        </div>
      </div>
    ); // Default image
  }
}

export default MessageBox;
