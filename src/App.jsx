import React, { useState } from 'react';
import LoadingIndicator from './LoadingIndicator';
import "./app.css"

const App = () => {
  const [percentage, setPercentage] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    setPercentage(0);
  };

  return (

    <div className='main-center' >
      <div>

      <LoadingIndicator
        percentage={percentage}
        isRunning={isRunning}
        onStop={handleStop}
        />

      <div style={{ marginTop: '20px' }} className='btn-main'>
        <button onClick={handleStart}  type="button" class="btn btn-success">Start</button>{' '}
        <button onClick={handleStop} type="button" class="btn btn-danger">Stop</button>
      </div>
        </div>
    </div>
  );
};

export default App;
