import * as React from 'react';

function SvgNevada(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height={100} width={100} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M19.416 43.5L20.5 8.625l52.75.5L75.125 78c-1.14.613-.005 1.321-.65 2.162-.727.946-1.704-.153-1.871-1.018-1.18-.307-2.639-1.264-3.86-.177-.931.828-.295 1.525-.149 2.415.121.735.051 1.355.031 2.237-.018.784.135 1.81.473 2.507.314.652.613.86.902 1.5.525 1.164.426 3.424-.75 3.875L19.416 43.5z"
      />
    </svg>
  );
}

export default SvgNevada;
