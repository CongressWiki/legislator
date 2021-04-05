import * as React from 'react';

function SvgAr(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M81.456 10.056l-10.483 1.553 4.27-6.795L73.4 1.03 36.419 4.62 5.164 7.144l-4.562.291.583 2.718L4.97 29.759l.097 4.368 1.068 26.401.097 4.368.291.097 1.456 1.553 5.824-.194.582 8.542.194 2.426 3.01-.29 9.22-.68 36.593-3.397h.194l-.097-2.136.97-.68-1.746-3.3 3.688-15.53-1.456-1.747 5.533-6.115-.388-5.241 4.076-6.794v-.098l-.194-.194 3.494-3.203-.97-3.882 2.717-4.271-.582-3.98 2.912-5.63v-.096h-.097z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
}

export default SvgAr;
