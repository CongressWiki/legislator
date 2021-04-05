import * as React from 'react';

function SvgIl(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.434 6.185l-.194.486L12.928 9l1.165 2.33 3.883 3.688-.098 3.106-2.135 6.115-4.853 3.494-4.368.874-.873 5.047 1.455.68-1.455 9.9-3.592 2.232.68 3.786-.874.388-.776 4.27 3.106 8.64 11.065 9.318.97 4.464 2.136 2.233 6.988-.388-1.261 6.503-.486 6.988 4.174 3.398 6.6 2.912 3.494 2.717 1.942 5.533-1.068 2.038 6.892 5.63.29.097-.582-.582 1.942-4.562 7.473 2.038 1.845-2.135-1.456-4.271 6.115-3.592-1.65-2.329 1.456-3.3v-.291l-.389-.097.097-8.64 2.136-1.552 3.688-8.639-.776-3.785-2.427-4.562 1.359-5.144-6.794-47.853-.971-1.067-2.524-5.727-2.038-2.135-.874-5.63V.944L38.456 2.788l-7.862.97-21.16 2.427z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
}

export default SvgIl;
