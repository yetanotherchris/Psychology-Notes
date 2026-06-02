import { FC } from 'react';

export const Crosshair: FC = () => (
  <svg
    viewBox="0 0 800 500"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="800" height="500" fill="#7d7d7d" />
    <line x1="400" y1="230" x2="400" y2="270" stroke="#000" strokeWidth="2" />
    <line x1="380" y1="250" x2="420" y2="250" stroke="#000" strokeWidth="2" />
    <circle cx="400" cy="250" r="2" fill="#000" />
  </svg>
);

export const Blank: FC = () => (
  <svg
    viewBox="0 0 800 500"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="800" height="500" fill="#7d7d7d" />
  </svg>
);
