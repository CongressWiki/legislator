import * as React from 'react';

const SvgGulfOfMexico = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="none"
      {...properties}
    >
      <defs>
        <path
          id="gulf-of-mexico_svg__a"
          stroke="#000"
          strokeWidth={1}
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
          d="M9.8 40.35q1.45-2.25 4.35-3.3 5.75-2.1 12.7 3.8l1.05.85q1.4 1 3.05 1.35 5.25 1.15 9.05-2.7 3.35-3.4 6.2-4.45 5.75-2.15 12.7 3.8l1.05.85q1.4.95 3.05 1.35 5.2 1.15 8.6-2.1 3.8-3.65 6.65-4.7 5.8-2.1 12.7 3.8m-82 15.65q1.45-2.25 4.35-3.3 5.75-2.1 12.7 3.85l1.05.85q1.4.95 3.05 1.3 5.25 1.15 8.65-2.4 3.75-3.7 6.6-4.75 5.75-2.1 12.7 3.8l1.05.85q1.4.95 3.05 1.35 5.2 1.15 8.8-2.3 3.6-3.45 6.45-4.5 5.8-2.1 12.75 3.8M8.95 68.7q1.45-2.25 4.35-3.3 5.75-2.1 12.7 3.85l1.05.85q1.4.95 3.05 1.3 5.25 1.15 8.95-2.55 3.45-3.45 6.3-4.5 5.75-2.1 12.7 3.8l1.05.85q1.4.95 3.05 1.35Q67.4 71.5 71.9 67q2.65-2.6 5.5-3.65 5.8-2.1 12.75 3.8"
        />
      </defs>
      <use xlinkHref="#gulf-of-mexico_svg__a" />
    </svg>
  );
};

export default SvgGulfOfMexico;
