import * as React from 'react';

function SvgUnemployment(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...props}
    >
      <g data-name={12}>
        <path d="M11 10h16v8a1 1 0 002 0V9a1 1 0 00-1-1h-7V5a1 1 0 00-1-1h-9a1 1 0 00-1 1v3H2a1 1 0 00-1 1v17a1 1 0 001 1h17a1 1 0 000-2H3V10zm1-4h7v2h-7z" />
        <path d="M26.66 24.25l2.55-2.54a1 1 0 00-1.42-1.42l-2.54 2.55-2.54-2.55a1 1 0 00-1.42 1.42l2.55 2.54-2.55 2.54a1 1 0 000 1.42 1 1 0 001.42 0l2.54-2.55 2.54 2.55a1 1 0 001.42 0 1 1 0 000-1.42z" />
      </g>
    </svg>
  );
}

export default SvgUnemployment;
