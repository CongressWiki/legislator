import * as React from 'react';

function SvgAl(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.313 7.848l.388.776 1.36.874.582 39.796.194 21.839 4.95 29.895.388-.097 4.368.874 1.165-8.639 1.941 4.853 3.3 3.01 6.31-3.69-.68-.582.194.097-4.368-9.997 41.931-6.794 2.815-.486v-.097l-2.62-4.95-.195-7.086-2.135-3.882 1.068-7.571 1.747-1.941-7.183-12.813L43.827 1.636l-.097-.195-2.912.486-15.53 2.523-7.765.971L1.216 7.653l.097.195z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
}

export default SvgAl;
