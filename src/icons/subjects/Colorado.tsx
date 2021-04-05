import * as React from 'react';

function SvgColorado(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height={100} width={100} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="none"
        stroke="#000"
        strokeWidth={0.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M14.167 21.667h73.166l2 55.333H12z"
      />
    </svg>
  );
}

export default SvgColorado;
