import * as React from 'react';

const SvgKansas = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        fill="none"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M90.333 69.833H7.75L9 28l72.583.417c.267.1.437.382.648.581.091.085-.003.306.118.423.135.13.38.071.502.159.681.489 1.675.553 2.234-.341.51.574.85 2.138 1.501 2.425-.653.544-2.938 2.057-2.82 3.003.054.431.685.754.967 1.104.29.361.636.831.912 1.233.259.378.187.798.43 1.163.228.342.789.935 1.114 1.231.563.516.776.205 1.48.165.398-.023 1.203.18 1.246.104l.418 30.166z"
      />
    </svg>
  );
};

export default SvgKansas;
