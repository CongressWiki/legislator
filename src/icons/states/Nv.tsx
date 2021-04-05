import * as React from 'react';

function SvgNv(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M86.827 116.83l10.094-62.8 5.145-31.448.582-3.106-2.815-.485-10.968-2.038-27.469-5.436-2.718-.582-2.717-.583-13.686-3.008L17.718 1.52 15 .84l-.874 3.689-13.2 56.005 11.453 16.5 11.842 16.404 20.966 30.09 15.044 21.16 7.765 10.386 2.524 3.397v-.291l1.553-3.3.097-15.434 4.27-3.59 3.398 3.008 2.233.097 4.27-18.83v-.194l.486-3.106z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
}

export default SvgNv;
