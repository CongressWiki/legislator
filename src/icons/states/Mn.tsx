import * as React from 'react';

const SvgMn = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        d="M.547 9.847l1.941 6.892 4.077 24.848 1.941 9.9.583 8.736 2.232 5.242.485 4.464.389 1.456-.097.292-3.883 6.406 2.524 4.27 4.853 34.167.194 4.465 4.853-.292 19.122-1.067 47.755-3.98 4.756-.485v-.485l-1.36-7.474-5.92-3.01-4.659-4.852-7.377-4.465-2.33-.194-3.59-2.718.97-13.395-3.397-3.106 1.164-5.436 6.213-5.63-1.068-11.647 2.232-2.523 7.571-7.96 8.639-11.065 3.3-2.33 5.824-2.814 6.115-4.562-4.077.776-2.426-1.844-9.319 1.262-1.455-1.747-8.348 3.397-6.697-2.815-1.844-2.232-5.339.388-3.591-1.844 1.164-1.359-4.561-1.456h-4.077l-6.503 2.815-1.262-1.941-10.289-1.456-3.494-8.736-.388-2.62L27.628.82l.388 7.474-11.842.874-14.656.582-.97.097z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
};

export default SvgMn;
