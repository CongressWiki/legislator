import * as React from 'react';

const SvgNy = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        d="M92.507 89.782L91.05 91.82l-.388.582zm13.395-4.757l4.853-4.27v-.194zm-12.716 3.01v-3.3l-.29 1.746zm22.519-15.53l-1.165-.292-.194.874zm2.62-1.748l-.096.97.194-.582-.097-.388zm-2.717.097l-6.503 6.018-9.998 4.271-2.62 2.232-.195 2.136-2.717 2.232.388 2.912 4.174-1.65 6.115-4.95 6.794-3.591 10.289-9.707-7.28 5.533-2.33.97zm3.009-4.076l.388-.583-1.165 1.36zM9.518 63.186l-1.553-.194 1.165 1.553zm32.225-29.701l.194-1.068-.776.97.582.098zm.485-6.989l-.388.195-.485 1.067zM1.171 81.628l.679 2.912 5.144 1.262 29.508-8.056 29.7-8.93 5.436 4.174 1.068 2.426 6.31 2.718.193.388 1.65.389 1.748.485 10.191 2.523-.194-.485.874 3.98 1.94-.486 1.069-4.367v-.098l-1.748-1.65 2.524-3.106-1.165-1.456-3.688-14.268-.194-.97-.486-.292-.29-4.27-.292-4.66-.291-5.047v-.29l-.194.096-4.853-15.918-5.145-8.056-1.456-9.61L74.841.775l-.582.29L53.973 7.86l-4.077 4.368-4.562 8.736.194 1.941-6.018 9.124 3.689 1.262 1.068 6.891-4.271 5.63-12.813 7.765-2.426-.97-9.512 1.358-8.833 5.339.485 2.815 3.106 2.717-1.747 8.542-6.988 8.153-.097.097z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
};

export default SvgNy;
