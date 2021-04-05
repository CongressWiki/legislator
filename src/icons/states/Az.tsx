import * as React from 'react';

function SvgAz(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M105.186 11.905l-32.71-4.077-17.569-2.523-25.042-3.98L27.34.937v.194l-4.27 18.83-2.233-.097-3.397-3.009-4.27 3.591-.098 15.433-1.553 3.3v.389l-.194 2.426 3.397 9.124 3.009 4.077-5.436 3.203-2.135 3.98-3.494 8.541-1.747.388-.097 7.086 3.009 2.233-1.553 4.27-3.495.194-2.038 3.786 6.988 4.368 13.201 7.377 40.767 21.645 34.554 4.27h.388l2.718-28.633.68-7.086 7.28-75.127.387-3.494-2.523-.291z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
}

export default SvgAz;
