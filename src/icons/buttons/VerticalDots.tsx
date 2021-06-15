import * as React from 'react';

const SvgVerticalDots = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={50} cy={30} r={7} />
      <circle cx={50} cy={50} r={7} />
      <circle cx={50} cy={70} r={7} />
    </svg>
  );
};

export default SvgVerticalDots;
