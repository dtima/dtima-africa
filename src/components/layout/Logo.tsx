import React from 'react';

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-12 w-12">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#008000" strokeWidth="8" />
          <g transform="translate(50,50)">
            {[0,1,2,3,4,5,6,7].map((i) => (
              <rect
                key={i}
                x="-4"
                y="-20"
                width="8"
                height="15"
                fill={i === 7 ? '#00a0ff' : i === 8 ? '#ff0000' : '#008000'}
                transform={`rotate(${i * 45})`}
                rx="4"
              />
            ))}
          </g>
        </svg>
      </div>
      <span className="text-xl font-bold">DTIMA</span>
    </div>
  );
};