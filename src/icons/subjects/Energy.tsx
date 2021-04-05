import * as React from 'react';

function SvgEnergy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M56.8 17l-6.3 27.6h16.7c.7 0 1.1.8.7 1.4L43.6 83.3c-.2.4-.8.1-.7-.3l6-28.9h-16c-.7 0-1.1-.8-.7-1.4l24-36.1c.1-.3.7-.1.6.4z" />
    </svg>
  );
}

export default SvgEnergy;
