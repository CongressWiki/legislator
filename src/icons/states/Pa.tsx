import * as React from 'react';

const SvgPa = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        d="M88.015 10.134l-6.309-2.718-1.068-2.426L75.203.816l-29.701 8.93-29.508 8.056-5.144-1.262-.68-2.912-1.65 1.262-2.62 1.844-4.756 4.853-.583.486L3.28 34.01l.485 2.136L6.191 46.63l.485 2.038 4.271 18.442 13.783-3.397 1.941-.486 1.747-.485 6.892-1.844 37.952-10.58 6.891-2.135 1.65-.486.777-1.94 1.747-1.36h2.33l.29-.873 3.786-4.271.388-.68.291-.194-3.785-9.9-1.844-.291.097-6.504-1.747-2.135 4.076-9.027-.194-.388z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
};

export default SvgPa;
