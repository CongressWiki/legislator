import * as React from 'react';

const SvgSc = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        d="M3.496 11.482L.778 16.821l.486 1.941 8.832 3.688 4.562 5.824 18.734 15.724 4.367 2.039 7.96 11.356 5.823 5.436.971-4.465-1.553-4.271 4.174 3.106 2.33-1.844-3.98-3.3 4.853-.292 7.57-6.406-.873-1.65 4.66-3.591-.486-1.747 3.397-2.136.194-4.95 5.339-9.9 3.591-4.562.388-.194L60.472 2.94l-8.056 1.553-10.968-.389-5.436-2.814L3.787 11.482z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
};

export default SvgSc;
