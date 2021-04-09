import * as React from 'react';

const SvgNj = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        d="M21.807 37.31l-.485-1.166v1.165zm.97-3.592l.292-2.912-.582 2.524zM18.799 3.919L8.607 1.396 6.859.91 5.21.522 1.133 9.55l1.747 2.135-.097 6.504 1.844.29 3.785 9.901-.194.292-4.756 6.988.485 5.339 11.454 3.882.097 4.465 2.62-3.688.389-5.339 2.718-1.844-1.068-3.98 2.038-4.756V19.352l-.68-3.397-4.561.097 1.165-4.659.68-7.474z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
};

export default SvgNj;
