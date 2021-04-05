import * as React from 'react';

function SvgOk(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M138.505 8.911l-.194-2.62-.097-2.524-.194-2.524-3.689.292-37.563 1.747-52.705.776-22.519-.291-4.174-.097h-1.553l-6.115-.194-1.94-.097-4.077-.097-1.942-.098-.097 2.524-.097 2.524-.097 2.523-.097 2.621h.582l23.49.582 24.848.292.29 33.195 1.748 5.824 3.883 3.688 4.173.195.874-1.748 5.727 5.242 7.473.776 1.36 1.553 2.717-1.261 6.794 3.203v1.844l2.524-.097 2.62-2.233 4.854 3.106 4.562 1.65 3.106-4.27 9.9 4.659 3.689-3.01 3.009-1.164 2.426.582 9.124-2.62 4.853 2.038 4.368 2.815 3.786.68h.097l-.097-4.369-1.068-26.4-.097-4.369-3.786-19.606-.582-2.718-.097-2.524z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
}

export default SvgOk;
