import React from 'react';

function Grid() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute w-full h-full top-0 left-0 opacity-20 z-0 box-content"
    >
      <defs>
        <pattern
          id="smallGrid"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            d="M8 0H0v8"
          ></path>
        </pattern>
        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path fill="url(#smallGrid)" d="M0 0H80V80H0z"></path>
          <path fill="none" stroke="white" d="M80 0H0v80"></path>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)"></rect>
    </svg>
  );
}

export default Grid;
