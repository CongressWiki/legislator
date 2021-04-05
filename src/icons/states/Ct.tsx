import * as React from 'react';

function SvgCt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M24.996 1.345L11.02 6.683l-.194-.485-7.862 2.33-1.747.485.194.97 3.688 14.268 1.165 1.456-2.524 3.106 1.748 1.65 5.63-5.435 3.008-4.174.583 1.165 14.17-6.31.292-.29-.097-2.33-.583-2.038-3.008-8.445-.389-1.067-.097-.194z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
}

export default SvgCt;
