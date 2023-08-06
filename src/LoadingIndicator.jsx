import React, { useEffect, useState } from 'react';

const LoadingIndicator = ({  isRunning, onStop }) => {
  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setPercentage((prevPercentage) => {
          const nextPercentage = prevPercentage + 1;
          if (nextPercentage >= 100) {
            clearInterval(interval);
            onStop();
          }
          return nextPercentage;
        });
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isRunning, onStop]);

  const [currentPercentage, setPercentage] = useState(0);

  return (
    <div style={{ position: 'relative', width: '200px', height: '200px' }}>
      <svg
        viewBox="0 0 100 100"
        style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          strokeWidth="10"
          stroke="#e0e0e0"
        />
        {currentPercentage >= 100 ? (
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            strokeWidth="10"
            stroke="#ff0000"
            style={{ transition: 'stroke-dasharray 0.3s ease' }}
          />
        ) : (
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            strokeWidth="10"
            stroke="#ff0000"
            strokeLinecap="round"
            strokeDasharray={`${currentPercentage} 100`}
            style={{ transition: 'stroke-dasharray 0.3s ease' }}
          />
        )}
      </svg>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
      >
        {currentPercentage >= 100 ? (
          <span style={{ color: '#ff0000' }}>100%</span>
        ) : (
          <span>{currentPercentage}%</span>
        )}
      </div>
    </div>
  );
};

export default LoadingIndicator;
