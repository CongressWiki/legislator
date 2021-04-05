import * as React from 'react';

function SvgRailroads(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      baseProfile="tiny"
      {...props}
    >
      <path d="M90 30V10H75V5h-7.5v5h-35V5H25v5H10v20h15v10H10v20h15v10H10v20h15v5h7.5v-5h35v5H75v-5h15V70H75V60h15V40H75V30h15zM75 15h10v10H75V15zM25 85H15V75h10v10zm0-30H15V45h10v10zm0-30H15V15h10v10zm42.5 60h-35V75h35v10zm0-15h-35V60h35v10zm0-15h-35V45h35v10zm0-15h-35V30h35v10zm0-15h-35V15h35v10zM85 75v10H75V75h10zm0-30v10H75V45h10z" />
    </svg>
  );
}

export default SvgRailroads;
