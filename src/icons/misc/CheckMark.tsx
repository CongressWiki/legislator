import * as React from 'react';

const SvgCheckMark = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        style={{
          textIndent: 0,
          textTransform: 'none',
          blockProgression: 'tb',
        }}
        d="M86.897 19.925C55.784 51.038 51.922 55.673 33.803 73.863L13.053 54.83c-1.135-1.156-3.248-1.123-4.347.068-1.098 1.192-.96 3.3.285 4.338l22.875 21c1.127 1.036 3.076.992 4.156-.094 20.536-20.536 22.617-23.492 55.125-56 .893-.87 1.15-2.327.608-3.45-1.373-2.19-3.285-2.007-4.858-.769z"
        overflow="visible"
        color="#000"
      />
    </svg>
  );
};

export default SvgCheckMark;
