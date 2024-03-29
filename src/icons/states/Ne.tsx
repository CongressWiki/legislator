import * as React from 'react';

const SvgNe = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        d="M114.33 10.688l-3.009-3.009-10.58-3.106-3.397-.097L92.2 5.932 86.085 2.05l-19.122.194-27.857-.291L6.202.885 3.29.788l-.097 2.524-.388 7.57-.874 17.763-.485 10.192-.097 2.523 2.329.097 23.683.874 4.66.194-.389 19.024-.097 1.262 3.689.097 13.103.195H80.94l16.404-.389 35.816-1.359 3.3-.194-.388-.388-2.62-4.659-2.233-1.553-2.427-4.66.097-.581v-.292l-3.008-12.23.582-1.94-3.3-4.563-.194-5.435-3.01-4.756-3.105-9.124-.68-.097-1.844-.195z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
};

export default SvgNe;
