import * as React from 'react';

function SvgDc(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.176 2.148l.485.389.194.097.195-.097.194.097.68.388.193.291v.68l.194.388 1.262-2.33-1.359-.776-1.65.097-.388.776z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
}

export default SvgDc;
