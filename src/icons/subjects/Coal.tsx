import * as React from 'react';

function SvgCoal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M98 35.3L83 14.8l-22.2-12-19.2 9.9-21.7 8.9L2 51.3l6.4 15.2.8 13.4 12.6 7.6 15.6.6L55 98l29.5-8.8 7.1-14.4-6.9-13.5 13.3-26zM79.2 17L92 33.9l-15.8-2.7-10-8.3-2.6-14.1L79.2 17zM38.6 44.2L42 26.8l3.2 18.6-6.6-1.2zm20-35.4l.7 6.2-13.9.8 13.2-7zm27.8 64.9l-22.2 1.9-16.8-27.2 18.4 16.8 13.7-3.1 6.9 11.6z" />
    </svg>
  );
}

export default SvgCoal;
