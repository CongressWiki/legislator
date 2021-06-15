import * as React from 'react';

const SvgFederalPreemption = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...properties}
    >
      <path d="M6 28c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1s1 .4 1 1v22c0 .6-.4 1-1 1z" />
      <path d="M16 16H6c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1zm-9-2h8V6H7v8z" />
      <path d="M26 18H16c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.4 0 .8.2.9.6.2.4.1.8-.2 1.1L22.4 12l4.3 4.3c.3.3.4.7.2 1.1-.1.4-.5.6-.9.6zm-9-2h6.6l-3.3-3.3c-.4-.4-.4-1 0-1.4L23.6 8H17v8z" />
    </svg>
  );
};

export default SvgFederalPreemption;
