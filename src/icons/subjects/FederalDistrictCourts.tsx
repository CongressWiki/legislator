import * as React from 'react';

function SvgFederalDistrictCourts(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height={100} width={100} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        style={{
          textIndent: 0,
          textAlign: 'start',
          lineHeight: 'normal',
          textTransform: 'none',
          blockProgression: 'tb',
          marker: 'none',
          InkscapeFontSpecification: 'Sans',
        }}
        d="M49.844 13a1 1 0 00-.375.156l-37 22.969a1 1 0 00-.469.844V42a1 1 0 001 1h7v30h-7a1 1 0 00-.094 0A1 1 0 0012 74v4H8a1 1 0 00-1 1v7a1 1 0 001 1h84a1 1 0 001-1v-7a1 1 0 00-1-1h-4v-4a1 1 0 00-1-1H72V43h6v25a1 1 0 102 0V43h7a1 1 0 001-1v-5.031a1 1 0 00-.469-.844l-37-22.969a1 1 0 00-.687-.156zM50 15.188L86 37.53V41H14v-3.469l36-22.343zM50 22c-3.302 0-6 2.698-6 6s2.698 6 6 6 6-2.698 6-6-2.698-6-6-6zm0 2c2.221 0 4 1.779 4 4s-1.779 4-4 4-4-1.779-4-4 1.779-4 4-4zM22 43h6v30h-6V43zm8 0h15v30H30V43zm17 0h6v30h-6V43zm8 0h15v30H55V43zM14 75h72v4a1 1 0 001 1h4v5H9v-5h4a1 1 0 001-1v-4z"
        fontWeight={400}
        color="#000"
        overflow="visible"
        fontFamily="Sans"
      />
    </svg>
  );
}

export default SvgFederalDistrictCourts;
