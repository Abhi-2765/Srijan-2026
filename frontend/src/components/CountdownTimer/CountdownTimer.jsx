import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { Days: 0, Hours: 0, Minutes: 0, Seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [targetDate]);

  const addLeadingZero = (value) => (value < 10 ? `0${value}` : value);

  return (
    <div className="countdown-container">
      {Object.keys(timeLeft).map((interval) => (
        <div className="time-box" key={interval}>
          <div className="time-value">{addLeadingZero(timeLeft[interval])}</div>
          <div className="time-label">{interval}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
