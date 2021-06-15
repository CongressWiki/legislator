import * as React from 'react';

const SvgSmallBusiness = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      {...properties}
    >
      <style>
        {
          '.small-business_svg__st2{fill:none;stroke:#000;stroke-width:.1;stroke-miterlimit:10}'
        }
      </style>
      <path d="M62 24L58.7 9.1c-.4-1.8-2-3.1-3.9-3.1H9.2C7.3 6 5.7 7.3 5.3 9.1L2 24c0 1.7.8 3.1 2 4v14H2v17h58V28c1.2-.9 2-2.3 2-4zM54.8 8c.9 0 1.7.6 1.9 1.6L59.5 22h-6.7L50.2 8h4.6zm-6.7 0l2.6 14h-7.8L41.1 8h7zM50 24c0 1.7-1.3 3-3 3s-3-1.3-3-3h6zM33 8h6.1l1.8 14H33V8zm7 16c0 1.7-1.3 3-3 3s-3-1.3-3-3h6zM24.9 8H31v14h-7.9l1.8-14zM12 24c0 2.8 2.2 5 5 5s5-2.2 5-5c0 1.7.8 3.1 2 4v14H10V28c1.2-.9 2-2.3 2-4zm2 0h6c0 1.7-1.3 3-3 3s-3-1.3-3-3zm10 0h6c0 1.7-1.3 3-3 3s-3-1.3-3-3zM22.8 8L21 22h-7.8l2.6-14h7zM7.3 9.6c.2-.9 1-1.6 2-1.6h4.6l-2.6 14H4.5L7.3 9.6zM10 24c0 1.7-1.3 3-3 3s-3-1.3-3-3h6zm-4 4.9c.3.1.7.1 1 .1s.7 0 1-.1V42H6V28.9zM30 57V37c0-2.8 2.2-5 5-5s5 2.2 5 5v20H30zm28 0H42V37c0-3.9-3.1-7-7-7s-7 3.1-7 7v20H4V44h22V28.9c.3.1.7.1 1 .1 2.8 0 5-2.2 5-5 0 2.8 2.2 5 5 5s5-2.2 5-5c0 2.8 2.2 5 5 5s5-2.2 5-5c0 2.8 2.2 5 5 5 .3 0 .7 0 1-.1V57zm-1-30c-1.7 0-3-1.3-3-3h6c0 1.7-1.3 3-3 3z" />
      <path d="M44 42h12V30H44v12zm2-10h8v8h-8v-8z" />
      <circle cx={32} cy={46} r={1} />
    </svg>
  );
};

export default SvgSmallBusiness;
