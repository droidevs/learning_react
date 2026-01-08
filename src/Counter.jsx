

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <h1 className="mb-4">Counter: <span className="text-primary">{count}</span></h1>
      <div>
        <button 
          className="btn btn-danger btn-lg me-2"
          onClick={decrement}
        >
          -
        </button>
        <button 
          className="btn btn-success btn-lg"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;

