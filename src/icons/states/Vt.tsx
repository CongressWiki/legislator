import * as React from 'react';

function SvgVt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M28.02 49.862l-4.37-15.919.777-5.823v-6.31l-1.068-5.047 4.174-5.532.194-1.748-2.33-8.735-1.261.485-5.339 1.941-5.241 2.039L1.52 9.58l-.68.194 4.37 10.192 1.456 9.61 5.145 8.056 4.853 15.918.194-.097.776-.291 2.233-.68 1.941-.68 5.533-1.65.68-.29z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
}

export default SvgVt;
