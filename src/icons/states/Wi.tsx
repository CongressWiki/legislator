import * as React from 'react';

function SvgWi(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M83.792 29.803l-2.427 3.009-1.456 4.368.68 2.426zM28.078 6.993l1.456-2.038-1.068.97zM30.31 3.79l-.485-.582-1.068.68 1.553-.098zM9.15 9.226l-2.232 2.523 1.068 11.648-6.212 5.63-1.165 5.435 3.397 3.106-.97 13.395 3.59 2.718 2.33.194 7.377 4.465 4.659 4.853 5.92 3.009 1.36 7.474v.485l2.815 3.397-.777 2.62.97 5.727 2.913 3.98L39.53 92.7l-.097.485 21.16-2.426 7.862-.971 13.103-1.844-.388-1.456v-4.562l-2.62-4.853-.68-6.115 1.262-6.795-.68-5.241 2.33-6.503-.874-1.068.194-6.018 1.262-4.562-1.456-1.553-2.815.97-1.553 4.077-3.688 2.136 1.165-5.145 3.3-4.367.194-1.942.097-.097-4.659-4.659v-6.6l-5.241-4.27-7.183-.486-7.377-1.941L36.23 12.04l-3.106-1.747-.291.291-4.95-.679-1.65.97.679-7.085-7.96 4.077L9.248 9.42l-.097-.194zM28.175 4.08l-.194-.68-.68.292zM24.68 3.4l.292-.582-.195-.194-.097.777zm7.086-1.65L31.475.394l-.291 1.65z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
}

export default SvgWi;
