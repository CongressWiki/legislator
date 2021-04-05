import * as React from 'react';

function SvgUsaMapStriped(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="1em"
      width="1em"
      viewBox="2 20 98 68"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="none"
        stroke="#000"
        strokeWidth={2.02}
        strokeLinecap="round"
        strokeMiterlimit={10}
        d="M47.708 81.92l.542-.003m35.125.003l.541-.003m-38.874-3.69h3.708m31.457 0h4.168m-41.5-3.689l10.451-.004m25.549.004l4.201-.004m-21.451.004l2.688-.004m-29.438-3.686l46.101-.003m-56.934-3.684l56.165-.004m-62.582-3.69l64.188-.002m-70.146-3.684l73.521-.004M7.542 56.091l80.333-.002M6 52.398h81.188M4.833 48.709H88.5M4.167 45.02l85.333-.001M4.167 41.332l60.896-.001m3.25.001l5.312-.001m6.25.001l11.5-.001M5 37.643l60.063-.008m3.625.008l3.125-.008m12.25.008l9.375-.008m-86.98-3.806l62.917-.001m17.813.001l7.271-.001m-1.542-3.687l4.521-.003m-89.688.003l49.264-.003M8.625 26.329l15.292-.001m69 .001l2.667-.001m-83.376-3.684l-.875-.006"
      />
    </svg>
  );
}

export default SvgUsaMapStriped;
