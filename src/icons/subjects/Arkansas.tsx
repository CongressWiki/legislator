import * as React from 'react';

function SvgArkansas(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="none"
        stroke="#000"
        strokeWidth={0.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M89.125 27.75c.543.684 1.549 1.189.594 2.119-1.118-1.176-1.675.554-.985 1.363-1.1.046-3.481 1.16-3.111 2.271.311.932 1.152.465.78 1.531-.225.645-1.387 1.238-1.874 1.503-.772.42-1.146.657-1.66 1.457-.075.117.093.395.021.506-.187.295-.751.413-.877.722-.2.494-.06.657.019 1.153.1.634.521 1.509.719 2.125.192.598.54 1.394 1.143 1.625-.403.315-1.163.493-1.514.878-.253.278-.165.721-.376.997-.543.709-1.73.196-1.88.875-.255 1.152 1.571 1.066.477 2.284-.682.759-1.719.72-2.219-.052-1.815 1.146.713 4.732-2.012 5.508-.075-.239-.422-.599-.47-.73-.385 1.076.31 1.542.353 2.366.072 1.347-1.612 1.994-1.355 3.353.053.046.193.103.246.144-1.021.947-1.819.435-2.648 1.134-.624.525-.888 2.157-1.996 1.756-.256.498-.52 1.315.233 1.381.218.951-1.051 1.453-.483 2.22-.988.88-2.266 1.149-1.732 2.617.186-.051.509.014.693-.065-.229.899-1.331 1.204-1.69 1.988-.307.67.141 2.083-1.375 1.864-.033.708-.344 1.809.588 1.877.17.762-.763 1.725.38 1.744-.027.535-.292 1.033-.573 1.502 1.167.516 1.59.907 1.58 2.241-.001.153.293.162.237.488-.043.255-.599.544-.614.658-.071.51-.227.693.365.866.218 1.021-1.031 1.145-1.497 1.856.396.55.358 1.187 1.141 1.375H20.625V74.375c-.621.186-1.496-.151-2.25-.125-.694.024-1.415.311-2.125.381-.325.032-1.203.133-1.472-.003-.743-.379-.094-.371-.52-.891-.483-.59-.918-.777-1.259-1.612 0 0 1.625-20.625 1.125-28.25-.206-1.88-1.875-26.25-1.875-26.25l69.875.625c-.073.286-.003.693.021.978 1.191.383.748.878.747 1.769-.001.687.446.429.078 1.253-.235.526-1.004.892-1.353 1.347-.771 1.007-2.614 3.089-2.494 4.403l10.002-.25z"
      />
    </svg>
  );
}

export default SvgArkansas;
