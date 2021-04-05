import * as React from 'react';

function SvgDe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M.803 4.697l.388 1.456 8.057 23.004 9.22-2.717-.096-.195h.194l.29.098.195-.098-.194-.388-2.33-6.212L5.171 8.871l.485-7.474h-2.33L1.58 2.757l-.777 1.94z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
}

export default SvgDe;
