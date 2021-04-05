import * as React from 'react';

function SvgNebraska(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M25.5 69.75V56.583H6L7.996 30.25l52.054 1.033.45-.2c-.116.049-.186.237-.45.2.556.349.862.885 1.333 1.292.242.208.168.619.438.853.15.13.75-.061.979.022.522.189.388.576 1.071.604.534.022 1.083-.553 1.759-.486.276-.857 4.125-.633 5.241-.809 1.784-.281.713-.308 1.917 1.003.403.439 1.265.815 1.859 1.021a.475.475 0 01-.081.273c1.09-.028 1.423.721 2.26 1.195 1.019.578 1.972.503 2.982.855-.115.762-.524 1.471-.449 2.286 1.514-.042 1.141 1.514 1.466 2.488.495 1.48 1.714 1.462 1.971 3.037.166 1.018-.507 2.877.034 3.837.584 1.036 1.366.604 2.174 1.667.9 1.184.593 2.433.663 3.829.06 1.2.498 2.342.5 3.5 0 .438-.348 1.227-.296 1.528.176 1.019.448.64.93 1.476.458.792.546 2.321 1.674 2.184-.054.626.151 1.426.362 1.983.117.31-.37.458-.136.796.219.317.658.023.808.191.812.912 1.854 1.566 2.167 2.915L25.5 69.75z"
      />
    </svg>
  );
}

export default SvgNebraska;