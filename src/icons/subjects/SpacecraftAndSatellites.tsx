import * as React from 'react';

function SvgSpacecraftAndSatellites(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      {...props}
    >
      <path d="M32 32a6 6 0 106 6 6.007 6.007 0 00-6-6zm0 10a4 4 0 114-4 4.004 4.004 0 01-4 4z" />
      <path d="M32 35a1 1 0 000 2 1 1 0 011 1 1 1 0 002 0 3.003 3.003 0 00-3-3z" />
      <path d="M40 10h-4V6a4 4 0 00-8 0v4h-4V6H2v14h22v-4h4v6H17a1 1 0 00-1 1v4c0 .025.012.045.014.07.001.021-.008.042-.005.065L17.218 36H3a1 1 0 00-1 1v24a1 1 0 001 1h4a1 1 0 001-1v-3.586l10.681-10.681.328 2.402A1 1 0 0020 50h4v3a1.902 1.902 0 00.03.242l1 4A1 1 0 0026 58h12a1 1 0 00.97-.758l1-4A1.902 1.902 0 0040 53v-3h4a1 1 0 00.991-.865l.328-2.402L56 57.414V61a1 1 0 001 1h4a1 1 0 001-1V37a1 1 0 00-1-1H46.782l1.21-8.865c.002-.023-.007-.044-.006-.066.002-.024.014-.044.014-.069v-4a1 1 0 00-1-1H36v-6h4v4h22V6H40zM6 18H4V8h2zm4 0H8V8h2zm4 0h-2V8h2zm4 0h-2V8h2zm4 0h-2V8h2zm8-12a2 2 0 014 0v16h-4zm-6 8v-2h4v2zM7 40a1 1 0 00-1 1v19H4V38h13.49l.273 2zm9.586 2L8 50.586V42zM8 54.586v-1.172l10.201-10.201.14 1.031zM37.219 56H26.78l-.5-2H37.72zM38 52H26v-2h12zm5.127-4H38v-2h3v-2h-5v4H20.873l-2.727-20H24v4h-3v2h5v-6h19.854zM56 54.586L45.707 44.293l-.064.064.156-1.144L56 53.414zm0-4L47.414 42H56zM46.51 38H60v22h-2V41a1 1 0 00-1-1H46.237zM46 24v2H18v-2zm-6-10h-4v-2h4zm18-6h2v10h-2zm-4 0h2v10h-2zm-4 0h2v10h-2zm-4 0h2v10h-2zm-4 0h2v10h-2z" />
    </svg>
  );
}

export default SvgSpacecraftAndSatellites;
