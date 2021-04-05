import * as React from 'react';

function SvgWyoming(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height={100} width={100} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M10.75 74.25L10.5 74l1.25-59.75c-.029.19.417-.75 1.25-.75l73-.5c.081-.168-.453.559.25 0l3 60c.083.083-.833.167-.75.25l-77.75 1z"
      />
    </svg>
  );
}

export default SvgWyoming;
