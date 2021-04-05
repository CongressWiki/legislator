import * as React from 'react';

function SvgAirQuality(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
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
        d="M13.813 9A1 1 0 0013 10v80a1 1 0 001 1h38a1 1 0 001-1V65.25c1.653-.143 3.315-.25 5-.25 8.317 0 17.35 2.55 27.406 9.813a1.006 1.006 0 001.188-1.626C76.254 65.722 66.729 63 58 63a62.25 62.25 0 00-5 .219V46.25c1.653-.143 3.315-.25 5-.25 8.317 0 17.35 2.55 27.406 9.813a1.006 1.006 0 001.188-1.626C76.254 46.721 66.729 44 58 44a62.25 62.25 0 00-5 .219V27.25c1.653-.143 3.315-.25 5-.25 8.317 0 17.35 2.55 27.406 9.813a1.006 1.006 0 001.188-1.626C76.254 27.721 66.729 25 58 25c-1.686 0-3.354.086-5 .219V10a1 1 0 00-1-1H24.937a1 1 0 100 2H51v14.406c-13.59 1.476-25.717 6.51-36 5.625V11h2.969a1 1 0 100-2H14a1 1 0 00-.188 0zM51 27.438v16.968c-13.59 1.476-25.717 6.51-36 5.625V33c10.932.895 22.947-4.049 36-5.563zm0 19v16.968c-13.59 1.476-25.717 6.51-36 5.625V52c10.932.895 22.947-4.049 36-5.563zm0 19V89H15V71c10.932.895 22.947-4.049 36-5.563z"
        fontWeight={400}
        color="#000"
        overflow="visible"
        fontFamily="Sans"
      />
    </svg>
  );
}

export default SvgAirQuality;
