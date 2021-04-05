import * as React from 'react';

function SvgEmployeePerformance(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        style={{
          lineHeight: 'normal',
          textIndent: 0,
          textAlign: 'start',
          textDecorationLine: 'none',
          textDecorationStyle: 'solid',
          textDecorationColor: '#000',
          textTransform: 'none',
          blockProgression: 'tb',
          whiteSpace: 'normal',
          isolation: 'auto',
          mixBlendMode: 'normal',
          solidColor: '#000',
          solidOpacity: 1,
        }}
        d="M31.5 7.102c-2.756 0-5 2.244-5 5 0 2.755 2.244 5 5 5 2.755 0 5-2.245 5-5 0-2.756-2.244-5-5-5zm0 1c2.215 0 4 1.784 4 4 0 2.215-1.785 4-4 4s-4-1.785-4-4c0-2.216 1.785-4 4-4zM24.75 18c-3.168 0-6.25 2.55-6.25 5.773V34.25A2.758 2.758 0 0021.25 37 2.758 2.758 0 0024 34.25V23.822l.004-.004a.922.922 0 01.205-.146 1.73 1.73 0 01.541-.172H25v30.25a2.758 2.758 0 002.75 2.75 2.758 2.758 0 002.75-2.75V43h2v10.75a2.758 2.758 0 002.75 2.75A2.758 2.758 0 0038 53.75V23.5h.063c.072 0 .423.08.667.2.121.058.222.125.27.167V33.5a2.758 2.758 0 002.75 2.75 2.753 2.753 0 002.74-2.664c.001-.027.01-.053.01-.08V23.773c0-1.603-.833-3.049-2.037-4.085-1.204-1.037-2.79-1.688-4.4-1.688H24.75zm0 1h13.313c1.337 0 2.72.56 3.748 1.445 1.028.886 1.689 2.074 1.689 3.328v.729H40v-.729c0-.316-.175-.51-.328-.648a2.129 2.129 0 00-.506-.326c-.362-.176-.73-.299-1.103-.299H37v2H26v-2h-1.25c-.352 0-.69.114-1.02.293-.164.09-.322.198-.46.348a.93.93 0 00-.27.632v.727h-3.5v-.727c0-2.565 2.63-4.773 5.25-4.773zm-5.25 6.5H23v8.75c0 .972-.777 1.75-1.75 1.75s-1.75-.778-1.75-1.75V25.5zm6.5 0h11v28.25c0 .972-.777 1.75-1.75 1.75s-1.75-.778-1.75-1.75V42h-4v11.75c0 .972-.777 1.75-1.75 1.75S26 54.722 26 53.75V25.5zm14 0h3.5v8a1.773 1.773 0 01-.77 1.451 1.738 1.738 0 01-.98.299c-.973 0-1.75-.778-1.75-1.75v-8z"
        color="#000"
        fontWeight={400}
        fontFamily="sans-serif"
        overflow="visible"
      />
    </svg>
  );
}

export default SvgEmployeePerformance;
