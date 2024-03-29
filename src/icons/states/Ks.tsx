import * as React from 'react';

const SvgKs = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        d="M121.923 58.72l-2.427-41.058-4.368-2.524-.388-1.94-3.494-3.107 3.397-4.174-1.359-2.426-2.523.097-2.33-1.65-.97-.777-3.3.194-35.817 1.36-16.404.388H19.327L6.224 2.908l-3.689-.097v1.845l-.097 5.726L1.37 61.73v1.94l4.174.098 22.519.291 52.705-.776 37.563-1.747 3.689-.292-.097-2.523z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
};

export default SvgKs;
