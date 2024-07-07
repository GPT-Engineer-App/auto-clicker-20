import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Autoclicker = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  const handleButtonClick = () => {
    if (isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
    } else {
      const id = setInterval(() => {
        console.log('Click');
      }, 20);
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Button onClick={handleButtonClick}>
        {isRunning ? 'Stop Autoclicker' : 'Start Autoclicker'}
      </Button>
      <p className="mt-4">{isRunning ? 'Autoclicker is running...' : 'Autoclicker is stopped.'}</p>
    </div>
  );
};

export default Autoclicker;