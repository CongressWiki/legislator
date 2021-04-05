import * as React from 'react';

function SvgNoSubject(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      {...props}
    >
      <path
        style={{
          textIndent: 0,
          textTransform: 'none',
          blockProgression: 'tb',
        }}
        d="M50.02 23c-7.916 0-14.38 5.226-15.947 11.5-.306 1.032.388 2.248 1.433 2.509 1.044.26 2.229-.486 2.444-1.54C38.993 31.294 43.921 27 50.02 27c3.02 0 6.135 1.087 8.381 2.906 2.247 1.82 3.596 4.26 3.596 7.094 0 3.439-.749 5.171-1.782 6.5-1.034 1.329-2.52 2.32-4.347 3.625-1.827 1.305-3.9 2.98-5.41 5.781C48.95 55.708 48.02 59.528 48.02 65c0 1.048.954 2.001 2.002 2.001 1.048 0 2.001-.953 2.001-2.001 0-5.028.822-8.114 1.939-10.188 1.116-2.073 2.548-3.242 4.221-4.437 1.673-1.195 3.63-2.36 5.223-4.406C64.996 43.922 66 41.06 66 37c0-4.167-2.127-7.757-5.128-10.188C57.87 24.382 53.994 23 50.02 23zm0 48a3.001 3.001 0 103.003 3 3 3 0 00-3.002-3z"
        overflow="visible"
        color="#000"
      />
    </svg>
  );
}

export default SvgNoSubject;