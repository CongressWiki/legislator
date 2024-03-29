import * as React from 'react';

const SvgElectionVote = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      {...properties}
    >
      <g data-name="One Voice">
        <path d="M48.93 47.63l-4-10A1 1 0 0044 37H14a1 1 0 00-.93.63l-4 10A1 1 0 009 48v8a1 1 0 001 1h38a1 1 0 001-1v-8a1 1 0 00-.07-.37zM14.68 39h28.64l3.2 8h-35zM47 55H11v-6h36z" />
        <path d="M38 40.76a1 1 0 00-1-.76H21a1 1 0 00-1 .76l-1 4a1 1 0 00.18.86A1 1 0 0020 46h18a1 1 0 00.79-.38 1 1 0 00.18-.86zM21.28 44l.5-2h14.44l.5 2zm33.47-27.66l-8-9a1 1 0 00-1-.31l-8 2a1 1 0 00-.62.47l-1.21-.3a4 4 0 00-1.84 0l-7 1.56a4 4 0 00-2.61 1.92l-2.83 4.95a4 4 0 00-.48 2.55l.84 5.93-1.7 2.95a1.05 1.05 0 00-.1.76 1 1 0 00.47.61l8.66 5a1 1 0 001.37-.37l7-12.12a1 1 0 00.11-.59l.44-.3.21.05c.89.25 2.53.71 4.31-1.47.35-.42.94-1.31 1.41-2l1.11 1.12A1 1 0 0046 20a1 1 0 00.24 0l8-2a1 1 0 00.51-1.63zm-22.7 2.18l-2-1.15.34-.11a1 1 0 01.87.11l.37.25a1 1 0 01.43.68.54.54 0 01-.01.22zm2.27 6.27l-4.86 8.41-6.92-4 6-10.4L31 20.2l-.77 1a2.73 2.73 0 003.41 4.11l.1-.06zm6.91-5.42c-1 1.16-1.46 1-2.23.81a1.87 1.87 0 00-1.57 0l-4.81 3.36a.75.75 0 01-.82-.15.73.73 0 01-.05-1l1.5-1.88.17-.21A3 3 0 0034 18a3 3 0 00-1.3-2l-.37-.25a3 3 0 00-1.66-.5 3.09 3.09 0 00-.95.15l-2.08.69a1 1 0 00-.55.46l-3.56 6.41-.43-3a2 2 0 01.24-1.28l2.83-5a2 2 0 011.3-1l7-1.56a2 2 0 01.91 0l2.83.71 4.49 5.24c-.43.8-1.14 1.93-1.47 2.3zm5.08-1.48l-1.55-1.54-4.82-5.79 5.72-1.43 6.51 7.31z" />
      </g>
    </svg>
  );
};

export default SvgElectionVote;
