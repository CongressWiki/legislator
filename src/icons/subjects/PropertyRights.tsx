import * as React from 'react';

function SvgPropertyRights(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="M464 48V16H48v416H16v9c0 30.4 24.6 55 55 55h369c30.9 0 56-25.1 56-56V48h-32zM71 480c-18.8 0-35-13.5-38.4-32h343.9c1.8 12.2 7.5 23.4 16.3 32H71zm409-40c0 22.1-17.9 40-40 40h-8c-22.1 0-40-17.9-40-40v-8H64V32h384v404c0 6.6-5.4 12-12 12s-12-5.4-12-12v-36H80v16h328v20c0 15.5 12.5 28 28 28s28-12.5 28-28V64h16v376z" />
      <path d="M184 56h144v16H184zM368 256h-16v-85.6l-33.1-12.1-7.8-62.3h-37.8l-7.2 43.1-18-6.6v32l-17.1-6.2-7.9-62.3h-37.8l-7.2 43.1-18-6.6V256h-16v16h224v-16zm-81.2-144H297l5 40.2-20.6-7.5 5.4-32.7zm-88 0H209l5 40.2-20.6-7.5 5.4-32.7zM336 256H176V155.4l72 26.2V240h16v-84.6l72 26.2V256z" />
      <path d="M304 200h16v40h-16zM216 200h16v40h-16zM88 288h120v16H88zM88 320h176v16H88zM88 352h48v16H88zM224 288h200v16H224zM280 320h144v16H280zM152 352h168v16H152z" />
    </svg>
  );
}

export default SvgPropertyRights;
