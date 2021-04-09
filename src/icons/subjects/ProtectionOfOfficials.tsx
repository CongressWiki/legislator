import * as React from 'react';

const SvgProtectionOfOfficials = (
  properties: React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
      {...properties}
    >
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        d="M77.913 14.99l-.807-1.422-1.509.793a2.16 2.16 0 01-.193.007c-2.455 0-11.526-2.392-18.15-4.138C51.251 8.644 48.738 8 48 8c-.767 0-3.693.764-9.23 2.224-6.657 1.756-15.713 4.144-18.171 4.144-.066 0-.123-.001-.177-.005l-.209-.062-1.321-.734-.807 1.422c-2.908 5.125-4.476 23.175-4.476 29.425 0 11.172 18.453 29.652 33.935 43.189L48 88l.458-.4c15.479-13.537 33.934-32.017 33.934-43.185.003-6.248-1.566-24.294-4.479-29.425z"
      />
    </svg>
  );
};

export default SvgProtectionOfOfficials;
