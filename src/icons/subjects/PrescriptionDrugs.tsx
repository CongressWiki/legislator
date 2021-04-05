import * as React from 'react';

function SvgPrescriptionDrugs(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M6 4.999h5c1.654 0 3 1.346 3 3s-1.346 3-3 3H6v-6zm14.207 8.208l-1.414-1.414L15 15.585l-2.761-2.761C14.396 12.27 16 10.325 16 7.999c0-2.757-2.243-5-5-5H4v17h2v-7h3.586l4 4-3.793 3.793 1.414 1.414L15 18.413l3.793 3.793 1.414-1.414-3.793-3.793 3.793-3.792z"
        fill="#000"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgPrescriptionDrugs;
