import * as React from 'react';

const SvgWaterResourcesFunding = (
  properties: React.SVGProps<SVGSVGElement>
) => {
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
        d="M74.75 65c0 13.669-11.081 24.75-24.75 24.75S25.25 78.669 25.25 65s0-13.669 24.75-54.75C74.75 51.331 74.75 51.331 74.75 65z"
      />
      <path d="M60.771 51.45h-3.344c0-2.403-.4-3.929-1.201-4.577-.801-.648-2.688-.972-5.658-.972-3.525 0-5.797.31-6.816.929s-1.529 1.999-1.529 4.14c0 2.403.4 3.867 1.201 4.391s3.182.881 7.145 1.071c4.646.204 7.6.794 8.859 1.77 1.26.976 1.889 3.161 1.889 6.554 0 3.67-.725 6.044-2.174 7.122-1.449 1.078-4.65 1.617-9.602 1.617-4.297 0-7.154-.542-8.574-1.627s-2.131-3.273-2.131-6.565l-.021-1.333h3.342v.743c0 2.666.408 4.322 1.225 4.97.814.648 2.906.972 6.27.972 3.859 0 6.234-.324 7.123-.972.887-.648 1.332-2.377 1.332-5.188 0-1.821-.303-3.033-.906-3.638-.605-.604-1.869-.965-3.791-1.082l-3.496-.175-3.32-.175c-5.055-.349-7.58-2.971-7.58-7.865 0-3.393.734-5.658 2.205-6.794 1.473-1.136 4.406-1.704 8.805-1.704 4.457 0 7.363.528 8.717 1.583 1.353 1.055 2.03 3.324 2.03 6.805z" />
      <path d="M45.93 38.5h2v39.743h-2zM51.93 38.5h2v39.743h-2z" />
    </svg>
  );
};

export default SvgWaterResourcesFunding;
