import * as React from 'react';

const SvgNm = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        d="M109.452 15.756l.097-2.524.097-2.524.097-2.523-3.106-.098-21.45-.97-21.549-1.359-48.92-4.27-3.008-.292-.389 3.494-7.28 75.127-.679 7.086-2.718 28.633.389.097 13.394 1.262 1.262-6.794 2.427-1.941 27.178 2.426h.194l-2.427-4.756 12.327.874 30.77 1.747 19.218.873 3.3-91.045.68.097.096-2.62z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
};

export default SvgNm;
