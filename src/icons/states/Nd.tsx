import * as React from 'react';

const SvgNd = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        d="M93.509 1.847l-29.313.583-20.48-.097-17.569-.389L5.57 1.168 4.502 1.07l-.097 3.882-1.262 23.684L1.59 59.115l-.194 3.882 3.785.194 42.805 1.165 39.505-.291 16.404-.486 3.3-.194-.389-1.456-.485-4.464-2.232-5.242-.583-8.736-1.941-9.9-4.077-24.848-1.94-6.892h-2.04z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
};

export default SvgNd;
