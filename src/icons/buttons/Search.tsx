import * as React from 'react';

const SvgSearch = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      {...props}
    >
      <path
        d="M39 11c-15.44 0-28 12.56-28 28s12.56 28 28 28a27.917 27.917 0 0017.813-6.406l28.812 27.843a2 2 0 102.75-2.874l-28.688-27.72C64.225 52.869 67 46.254 67 39c0-15.44-12.56-28-28-28zm0 4c13.279 0 24 10.721 24 24S52.279 63 39 63 15 52.279 15 39s10.721-24 24-24z"
        color="#000"
      />
    </svg>
  );
};

export default SvgSearch;
