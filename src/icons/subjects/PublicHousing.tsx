import * as React from 'react';

const SvgPublicHousing = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
      {...properties}
    >
      <g
        transform="translate(1 1)"
        stroke="#000"
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13.317 40.738l-4.569-4.569a10.893 10.893 0 01-2.31-3.411l-2.236-5.219A2.188 2.188 0 10.2 29.307l3.919 8.622a9.683 9.683 0 001.968 2.84L13.316 48H23v-2.861a9.458 9.458 0 00-1.972-5.925 6.253 6.253 0 00-2.87-2.107 21.453 21.453 0 01-6.052-3.858 3.584 3.584 0 00-4.838.224l-.003.002" />
        <rect x={12} y={48} width={13} height={10} rx={1} />
        <path d="M22 53h-1M44.683 40.738l4.569-4.569c.98-.98 1.763-2.138 2.31-3.411l2.236-5.219a2.188 2.188 0 114.003 1.768l-3.919 8.622a9.683 9.683 0 01-1.968 2.84L44.684 48H35v-2.861a9.458 9.458 0 011.972-5.925 6.253 6.253 0 012.87-2.107 21.453 21.453 0 006.052-3.858 3.584 3.584 0 014.838.224l.003.002" />
        <rect
          transform="rotate(-180 39.5 53)"
          x={33}
          y={48}
          width={13}
          height={10}
          rx={1}
        />
        <path d="M36 53h1M46 33.16V14h3l-3-2.1-1.29-.9L29 0 12 11.9 9 14h3v19.16M22.12 41H35.88" />
        <rect x={16} y={19} width={14} height={7} rx={1} />
        <rect x={34} y={19} width={8} height={7} rx={1} />
        <path d="M35.88 41H34v-9a1.003 1.003 0 011-1h4c.552.002.998.448 1 1v5.05" />
      </g>
    </svg>
  );
};

export default SvgPublicHousing;
