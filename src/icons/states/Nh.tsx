import * as React from 'react';

function SvgNh(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6.893.983L5.63 2.536l-1.456-.291-.777 6.406v.097l2.33 8.735-.194 1.748-4.174 5.532 1.068 5.047v6.31l-.777 5.823 4.37 15.919L10 56.6l12.23-4.077 5.532-6.018v-1.553l.291-2.523-.679.29-.097-.581-6.115-7.474-.194-.68L6.893.983z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
}

export default SvgNh;
