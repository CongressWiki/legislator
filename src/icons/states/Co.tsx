import * as React from 'react';

function SvgCo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M115.632 27.55l.389-19.025-4.66-.194-23.683-.874-2.33-.097-1.94-.097L54.58 5.42 35.36 3.866l-23.974-2.33-2.33-.29-.291 2.523-5.242 50.57L1.68 72.004l-.776 7.668-.194 2.524 3.009.291 48.92 4.27 21.547 1.36 21.451.97 3.106.098 1.942.097 4.076.097 1.941.097 6.115.194h1.553v-1.941l1.068-51.347.097-5.726V28.81l.097-1.261z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
}

export default SvgCo;
