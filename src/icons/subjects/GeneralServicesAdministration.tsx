import * as React from 'react';

const SvgGeneralServicesAdministration = (
  properties: React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={1200}
      height={1200}
      {...properties}
    >
      <image
        data-name="Color Fill 1"
        x={183}
        y={433}
        width={826}
        height={326}
        xlinkHref="data:img/png;base64,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"
      />
    </svg>
  );
};

export default SvgGeneralServicesAdministration;
