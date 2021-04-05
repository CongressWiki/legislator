import * as React from 'react';

function SvgNewMexico(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="none"
        stroke="#000"
        strokeWidth={0.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M14.5 10.375l69.75-1.5 2.25 71.5-43.563 1.5v3H24v6.25H13.5z"
      />
    </svg>
  );
}

export default SvgNewMexico;
