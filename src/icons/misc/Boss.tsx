import * as React from 'react';

function SvgBoss(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      {...props}
    >
      <path d="M46.74 28.6a6.05 6.05 0 001.58 1.08C50.47 35.16 55 38.75 60 38.75s9.53-3.59 11.68-9.07a6.06 6.06 0 001.58-1.08A5.26 5.26 0 0075 24.86a3.73 3.73 0 00-1.15-2.75 3.67 3.67 0 00-1.15-.73A13.12 13.12 0 0060 10a13.12 13.12 0 00-12.7 11.38 3.67 3.67 0 00-1.15.73A3.73 3.73 0 0045 24.86a5.26 5.26 0 001.74 3.74zM57 55.16l-6.85-12.78c-5.2 1.65-8.9 6.3-8.9 11.32V60h37.5v-6.3c0-5-3.7-9.67-8.9-11.32L63 55.16h-.52l-1-8.16 1.09-1.22v-1.39L61.25 43h-2.5l-1.25 1.39v1.39L58.59 47l-1 8.16zM12.5 75h95v35h-95zM10 62.5h100v10H10z" />
      <path d="M38.75 53.7c0-6.08 4.38-11.7 10.64-13.7l2-.63v-1.29a17.79 17.79 0 01-5-6.63 8.67 8.67 0 01-1.32-1 7.76 7.76 0 01-2.52-5.56 6.21 6.21 0 011.93-4.56 6.11 6.11 0 01.63-.52c.09-.38.19-.75.3-1.12A22.54 22.54 0 0030 40v20h8.75zm36.82-33.4a6.21 6.21 0 011.93 4.56 7.76 7.76 0 01-2.5 5.56 8.67 8.67 0 01-1.32 1 17.79 17.79 0 01-5 6.63v1.28l2 .63c6.27 2 10.64 7.63 10.64 13.71V60H90V40a22.54 22.54 0 00-15.37-21.34c.11.37.22.74.3 1.12a6.13 6.13 0 01.64.52z" />
    </svg>
  );
}

export default SvgBoss;