import * as React from 'react';

const SvgNursing = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      {...properties}
    >
      <path d="M91.42 40.51a64.08 64.08 0 00-8.53-5.06A19.38 19.38 0 0063.76 18H36.24a19.38 19.38 0 00-19.13 17.45 64.08 64.08 0 00-8.53 5.06l-1.13.8L18.46 83h63.08l11-41.69zM36.24 22h27.52a15.38 15.38 0 0114.75 11.48 76.9 76.9 0 00-57 0A15.38 15.38 0 0136.24 22zm44.33 49H66v4h13.52l-1.06 4H21.54l-1.06-4H62v-4H19.43L12 43c10.56-7.1 24-11 38-11s27.41 3.89 38 11z" />
      <path d="M44 37v9h-9v13h9v9h13v-9h9V46h-9v-9zm18 13v5h-9v9h-5v-9h-9v-5h9v-9h5v9z" />
    </svg>
  );
};

export default SvgNursing;
