import * as React from 'react';

function SvgWy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M109.387 48.167l.776-15.142.971-20.383.097-2.523-1.262-.098-24.945-1.455L71.047 7.4 44.549 4.877 11.353.8l-1.359 9.513-.097.582-.388 3.203L7.762 26.62l-3.3 25.237-.874 6.309-.388 3.203-.194 1.262L.579 81.557l3.786.485 24.75 3.01 1.942.193 2.33.292 23.974 2.33 19.219 1.552 28.827 1.844 1.942.097.097-2.523.485-10.192.874-17.762.388-7.571.097-2.524.097-2.62z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
}

export default SvgWy;
