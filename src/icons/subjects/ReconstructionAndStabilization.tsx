import * as React from 'react';

function SvgReconstructionAndStabilization(
  props: React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      {...props}
    >
      <g data-name="Layer 2">
        <path d="M1.384 11.131l8.51 2.765 15.488 5.034c.773.25 1.618-.202 1.618-.867V11h7v2h10.583a3.417 3.417 0 100-6.833H34V8h-7V.937c0-.665-.845-1.118-1.618-.867L9.893 5.104 1.384 7.869a1.653 1.653 0 000 3.262z" />
        <rect x={25} y={37} width={23} height={11} rx={1} ry={1} />
        <rect x={12} y={24} width={24} height={11} rx={1} ry={1} />
        <rect y={37} width={23} height={11} rx={1} ry={1} />
        <rect x={38} y={24} width={10} height={11} rx={1} ry={1} />
      </g>
    </svg>
  );
}

export default SvgReconstructionAndStabilization;
