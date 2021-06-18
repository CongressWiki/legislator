import * as React from 'react';

const SvgLogin = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      {...props}
    >
      <path d="M36.5 6a26 26 0 00-25.92 24H3.5a2 2 0 000 4h7.08A26 26 0 1036.5 6zm0 48a22 22 0 01-21.91-20H38l-8 8.65a2 2 0 00.12 2.82 2 2 0 001.38.53 2 2 0 001.5-.65l11-12 .07-.09.1-.12v-.07a1 1 0 00.08-.14s.05-.08.07-.13v-.08-.15-.13a.28.28 0 000-.09.88.88 0 000-.16V32v-.15a.88.88 0 000-.16.28.28 0 000-.09v-.13V31.24c0-.05 0-.09-.07-.13a1 1 0 00-.08-.14v-.07l-.1-.12-.07-.13-11-12a2 2 0 00-3 2.7L38 30H14.59A22 22 0 1136.5 54z" />
    </svg>
  );
};

export default SvgLogin;
