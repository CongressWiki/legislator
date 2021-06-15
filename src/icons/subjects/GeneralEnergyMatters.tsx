import * as React from 'react';

const SvgGeneralEnergyMatters = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 28"
      {...properties}
    >
      <path d="M13 11h6a1 1 0 01.806 1.591l-11 15C8.235 28.371 7 27.966 7 27v-8H1a1 1 0 01-.84-1.543l11-17C11.702-.38 13 .003 13 1v10zM9 23.945L17.027 13H12a1 1 0 01-1-1V4.386L2.838 17H8a1 1 0 011 1v5.945z" />
    </svg>
  );
};

export default SvgGeneralEnergyMatters;
