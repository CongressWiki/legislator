import * as React from 'react';

function SvgUt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M59.385 7.98L34.343 4.194 20.366 1.962l-2.718-.486-.582 3.106-5.145 31.449-10.094 62.8-.486 3.106 2.524.388 25.042 3.98 17.569 2.523 32.71 4.077 2.524.291.194-2.524.776-7.668 1.844-17.665 5.242-50.57.291-2.524-1.941-.194-24.751-3.009-3.786-.485L62.006 9.63l.194-1.262z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
}

export default SvgUt;
