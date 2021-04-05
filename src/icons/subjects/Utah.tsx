import * as React from 'react';

function SvgUtah(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="none"
        stroke="#000"
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M16.625 5.625c.033.111-.054.052-.125 0 0 0-3.27 85.535-2.875 85.75l68.875.375-1.75-69.125c.094.01.135-.032.125-.125L55 22.875c.081-.07 0-16.75 0-16.75-.185.032-.227-.009-.125-.125l-38.25-.375z"
      />
    </svg>
  );
}

export default SvgUtah;
