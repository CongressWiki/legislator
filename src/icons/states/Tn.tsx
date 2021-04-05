import * as React from 'react';

function SvgTn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M104.257 8.49l-27.76 4.659-39.505 5.241-3.3.097.97 3.883-19.606 2.62-2.815.389v.097l-.776.97-.388-.097v-.873l-1.068.097.097.097.582 2.718-1.94 2.426-.195 4.465v.874l-2.912 5.63.582 3.98-2.717 4.27.97 3.882-3.494 3.203.194.195 2.136-.195 19.412-2.426 8.542-1.165 4.853-.68h.194l-.097-.193 16.307-2.233 7.765-.97 15.53-2.524 2.912-.485 1.747-.195 8.25-1.553 2.038-.388 7.571-1.456 1.36-.194v-.97l-.098-4.271 3.591-1.942.195-2.523 4.076-3.786 3.883-.97 7.959-7.183 3.009-4.465 2.33.874 5.24-5.145 2.816-.29 2.523-5.145 1.068.097-.097-4.174.485-1.456-1.553.291-5.532 1.553-6.6 1.36-16.598 3.397-1.748.29-.388.292z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
}

export default SvgTn;