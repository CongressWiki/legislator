import * as React from 'react';

function SvgTimeAndCalendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        d="M33 52H7a3.003 3.003 0 01-3-3V22h52v10a1 1 0 002 0V15a5.006 5.006 0 00-5-5h-4V8a4 4 0 00-8 0v2h-7V8a4 4 0 00-8 0v2h-7V8a4 4 0 00-8 0v2H7a5.006 5.006 0 00-5 5v34a5.006 5.006 0 005 5h26a1 1 0 000-2zM43 8a2 2 0 014 0v2h-4zM28 8a2 2 0 014 0v2h-4zM13 8a2 2 0 014 0v2h-4zm-6 4h4v2a4 4 0 008 0h-2a2 2 0 01-4 0v-2h13v2a4 4 0 008 0h-2a2 2 0 01-4 0v-2h13v2a4 4 0 008 0h-2a2 2 0 01-4 0v-2h10a3.003 3.003 0 013 3v5H4v-5a3.003 3.003 0 013-3zm21 23h4v4h-4zm4-4h-4v-4h4zm-9 8h-4v-4h4zm-4 4h4v4h-4zm4-12h-4v-4h4zm-9 8h-4v-4h4zm-4 4h4v4h-4zm4-12h-4v-4h4zm23 0v-4h4v4zm9 0v-4h4v4zm2 1a14 14 0 1014 14 14.016 14.016 0 00-14-14zm0 26a12 12 0 1112-12 12.014 12.014 0 01-12 12zm0-23a11 11 0 1011 11 11.012 11.012 0 00-11-11zm0 20a9 9 0 119-9 9.01 9.01 0 01-9 9zm1-9.414l3.707 3.707-1.414 1.414L47 46.414V40h2z"
        data-name="Calendar Time Refresh"
      />
    </svg>
  );
}

export default SvgTimeAndCalendar;
