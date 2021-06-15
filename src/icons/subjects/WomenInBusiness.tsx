import * as React from 'react';

const SvgWomenInBusiness = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <circle cx={50} cy={18.1} r={7.5} />
      <path d="M58.4 27.3h-3.8L50 44.4l-4.6-17.1h-3.8c-.8 0-1.4.6-1.4 1.4l-2.8 27.2c0 .8.6 1.4 1.4 1.4h1.6l-3 8.9 5.6.3 3 22.9h8.1l3-22.9 5.6-.3-3-8.9h1.6c.8 0 1.4-.6 1.4-1.4l-2.8-27.2c-.1-.7-.7-1.4-1.5-1.4z" />
      <path d="M48 27.5l1.5 1.9-1 7.7 1.5 5.4 1.5-5.4-1-7.7 1.5-1.9z" />
    </svg>
  );
};

export default SvgWomenInBusiness;
