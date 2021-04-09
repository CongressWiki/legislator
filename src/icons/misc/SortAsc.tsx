import * as React from 'react';

const SvgSortAsc = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="1em"
      width="1em"
      viewBox="0 21 100 60"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path d="M24.9 24c-2-1.9-5.1-2-7.1 0L4 37.9c-2 2-2 5.1 0 7.1 1.9 2 5.1 2 7.1 0l5.4-5.4v32.8c0 2.8 2.2 5 5 5s5-2.2 5-5V39.6l5.4 5.4c1 1 2.3 1.5 3.5 1.5 1.3 0 2.6-.5 3.5-1.5 2-2 2-5.1 0-7.1L24.9 24zm67.6 43.4H53.2c-2.8 0-5 2.2-5 5s2.2 5 5 5h39.3c2.8 0 5-2.2 5-5s-2.2-5-5-5zM53.2 55h29.3c2.8 0 5-2.2 5-5s-2.2-5-5-5H53.2c-2.8 0-5 2.2-5 5s2.2 5 5 5zm0-22.4h19.4c2.8 0 5-2.2 5-5s-2.2-5-5-5H53.2c-2.8 0-5 2.2-5 5s2.2 5 5 5z" />
    </svg>
  );
};

export default SvgSortAsc;
