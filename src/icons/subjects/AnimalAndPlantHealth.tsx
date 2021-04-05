import * as React from 'react';

function SvgAnimalAndPlantHealth(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M71.549 80.893V95h5.071V80.893c-.835.1-1.677.164-2.536.164-.858 0-1.703-.065-2.535-.164zM74.084 44.296l-8.873 8.873-10.141-6.338v12.676c0 10.501 8.512 19.015 19.014 19.015 10.5 0 19.015-8.514 19.015-19.015V46.831l-10.141 6.338-8.874-8.873zM23.381 80.893V95h5.07V80.893c-.834.1-1.676.164-2.535.164-.859 0-1.703-.065-2.535-.164zM25.916 44.296l-8.873 8.873-10.141-6.338v12.676c0 10.501 8.512 19.015 19.014 19.015 10.5 0 19.014-8.514 19.014-19.015V46.831l-10.141 6.338-8.873-8.873z" />
      <circle cx={10.705} cy={37.958} r={2.535} />
      <circle cx={37.324} cy={40.493} r={2.535} />
      <circle cx={30.986} cy={22.746} r={2.535} />
      <circle cx={82.958} cy={17.676} r={2.535} />
      <circle cx={58.873} cy={7.535} r={2.535} />
      <circle cx={88.028} cy={40.493} r={2.535} />
      <circle cx={17.043} cy={11.338} r={2.535} />
      <path d="M58.873 23.979c-.7 0-1.268.566-1.268 1.268v11.408a1.268 1.268 0 102.536 0V25.246c0-.701-.567-1.267-1.268-1.267zM56.338 38.872c-2.535 5.388-10.14 1.585-10.14 1.585 0-8.873 7.605-9.19 7.605-9.19-2.535-.95-8.873.317-8.873-3.803 0-2.835-2.535-4.631-2.535-6.338 0-3.485 13.943-3.803 13.943 3.803M61.408 24.929c0-7.605 13.943-7.288 13.943-3.803 0 1.707-2.535 3.503-2.535 6.338 0 4.12-6.338 2.853-8.873 3.803 0 0 7.605.317 7.605 9.19 0 0-7.605 3.803-10.141-1.585" />
    </svg>
  );
}

export default SvgAnimalAndPlantHealth;
