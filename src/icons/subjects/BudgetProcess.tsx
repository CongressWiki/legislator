import * as React from 'react';

const SvgBudgetProcess = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      {...properties}
    >
      <path d="M51 4H13a1 1 0 00-1 1v46a1 1 0 00.293.707l8 8A1 1 0 0021 60h30a1 1 0 001-1V5a1 1 0 00-1-1zM20 56.586L15.414 52H20zM50 58H22v-7a1 1 0 00-1-1h-7V6h36zM26 48a1.001 1.001 0 001 1 2.993 2.993 0 011 5.816V55a1 1 0 01-2 0v-.184A2.995 2.995 0 0124 52a1 1 0 012 0 1 1 0 101-1 2.993 2.993 0 01-1-5.816V45a1 1 0 012 0v.184A2.995 2.995 0 0130 48a1 1 0 01-2 0 1 1 0 00-2 0zm22 7a1 1 0 01-1 1H33a1 1 0 010-2h14a1 1 0 011 1zM32 28a10 10 0 10-10-10 10.011 10.011 0 0010 10zm1-17.93A8.007 8.007 0 0139.93 17H33zM32.268 19h7.662a7.984 7.984 0 01-14.293 3.829zM24 18a8.007 8.007 0 017-7.93v7.353l-6.373 3.68A7.955 7.955 0 0124 18zm-2 15a1 1 0 011-1h18a1 1 0 010 2H23a1 1 0 01-1-1zm-6 4a1 1 0 011-1h30a1 1 0 010 2H17a1 1 0 01-1-1zm0 4a1 1 0 011-1h30a1 1 0 010 2H17a1 1 0 01-1-1z" />
    </svg>
  );
};

export default SvgBudgetProcess;
