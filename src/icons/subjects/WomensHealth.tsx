import * as React from 'react';

const SvgWomensHealth = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      {...properties}
    >
      <path d="M67 44a11 11 0 1111-11 11 11 0 01-11 11zm0-18a7 7 0 107 7 7 7 0 00-7-7z" />
      <path d="M67 58a2 2 0 01-2-2V42a2 2 0 014 0v14a2 2 0 01-2 2z" />
      <path d="M74 51H60a2 2 0 010-4h14a2 2 0 010 4z" />
      <path d="M50 86a2 2 0 01-1.41-.59l-31-31a23.89 23.89 0 010-33.79 22.53 22.53 0 0117-6.6A24.94 24.94 0 0150 20.1 24.94 24.94 0 0165.41 14a22.55 22.55 0 0117 6.6 23.89 23.89 0 010 33.79l-31 31A2 2 0 0150 86zM33.72 18a18.57 18.57 0 00-13.27 5.44 19.89 19.89 0 000 28.14L50 81.13l29.55-29.55a19.89 19.89 0 000-28.14 18.63 18.63 0 00-14-5.43 21 21 0 00-14.14 6.23 2 2 0 01-2.83 0A21 21 0 0034.45 18z" />
    </svg>
  );
};

export default SvgWomensHealth;
