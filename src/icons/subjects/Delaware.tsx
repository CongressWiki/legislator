import * as React from 'react';

function SvgDelaware(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="none"
        stroke="#000"
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M64.294 71.013L66 91.875l-30.875-.75L31 14.75c.603-.151 1.569-1.981 1.991-2.647 1.175-1.856 3.058-2.442 4.912-3.5 1.277-.728 1.856-1.585 3.35-1.385 1.086.145 2.038.59 3.147.656 2.008.121 2.676 1.205 4.259 2.031-2.14.34-1.862 3.147-2.688 4.594-.302.53-.971 1.591-1.472 1.89-.39.232-1.436.036-2.003.579-.405.388-.471 1.006-.896 1.43-.667.664-1.243.234-1.972.72-1.315.876-.863 3.192-.106 4.233 1.413-.019 2.243.777 2.45 2.139.283 1.861-1.448 2.032-1.73 3.506-.263 1.371.777 2.013 1.637 2.787 1.069.963 1.242 1.893 1.716 3.219.401 1.122.939 2.634 1.784 3.468 1.077 1.063 2.008 1.229 2.715 2.688.249.514.751.99.909 1.46.193.575-.069 1.402-.009 2.009.086.866.884 2.401.006 2.997l-.125 6.876c.505.864 1.372 1.365 2.125 1.906.976.701.908.925 1.466 2.003.492.952.916 1.35.909 2.557-.007 1.075-.05 2.067.532 3.005.537.865 1.449 1.74 2.121 2.535a69.722 69.722 0 002.698 3.019c1.211 1.269 4.008 3.964 5.568 1.488"
      />
    </svg>
  );
}

export default SvgDelaware;