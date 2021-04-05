import * as React from 'react';

function SvgElectionBallotBoxVote(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 64 64"
      {...props}
    >
      <path d="M24.59 12h12.82l2.3-2.29a1 1 0 000-1.42l-6-6a1 1 0 00-1.42 0l-8 8a1 1 0 000 1.42zM32 32a10 10 0 1010 10 10 10 0 00-10-10zm5.72 9.52l-2.15 2.2.51 3.12a1 1 0 01-.41 1 1 1 0 01-.58.18 1 1 0 01-.48-.12L32 46.43l-2.61 1.45a1 1 0 01-1.47-1l.51-3.12-2.15-2.2a1 1 0 01-.23-1 1 1 0 01.8-.67l2.93-.45 1.31-2.8a1 1 0 011.82 0l1.31 2.8 2.93.45a1 1 0 01.8.67 1 1 0 01-.23.96z" />
      <path d="M32.64 40.72L32 39.35l-.64 1.37a1 1 0 01-.75.56l-1.53.23 1.14 1.17a1 1 0 01.27.86l-.26 1.59 1.29-.71a1 1 0 011 0l1.29.71-.26-1.59a1 1 0 01.27-.86l1.14-1.17-1.53-.23a1 1 0 01-.79-.56z" />
      <path d="M49 14H15a5 5 0 00-1 9.9V57a5 5 0 005 5h26a5 5 0 005-5V23.9a5 5 0 00-1-9.9zM32 54a12 12 0 1112-12 12 12 0 01-12 12z" />
    </svg>
  );
}

export default SvgElectionBallotBoxVote;
