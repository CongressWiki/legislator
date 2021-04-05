import * as React from 'react';

function SvgMi(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M65.963 59.2l-.485-.776-.097.97.582-.194zm1.553-1.747L66.351 55.9l-.194.68zm.97-6.988l-.97-.874v.194zm-2.426 76l12.036-1.941 3.397-.68 14.85-2.62.292 1.261.97-.29 6.407-1.36 6.115-1.456 6.212-1.553-.097-.29 3.203-6.31-.291-5.241 3.591-9.027 2.815 1.65 1.068-2.039-.292-7.765-2.62-4.853-3.883-10.288-3.397-3.786-1.747-.485-6.31 4.368.68.873-3.3 6.212-3.203-.582-.97-6.503 1.358-.486 2.815-6.503.291-11.453-4.368-9.707-9.706-1.65-.97-1.456-9.028-2.62-4.076 5.047.388 4.368-3.106 3.882.68 6.018-3.01 2.136v-7.571l-2.717 5.726-3.203 5.048-2.136 1.65 1.068 5.338-1.359 5.533.777 6.891-.971 3.397 6.989 13.395.873 5.145-.873 9.512-4.66 10.677-.582.388zM86.832 39.01l-2.524.194 1.553 1.165zm-14.754 2.524h-.776l.873.388-.097-.388zm16.986-12.327l-.97-1.553-.389.097 1.36 1.456zm-87.94 7.085l3.107 1.747 15.918 4.854 7.377 1.94 7.183.486 5.241 4.271v6.6l4.66 4.66v-.098l3.785-10.968 4.562-3.203 3.494-3.883.582 3.495 3.592-5.533 8.638-3.3.68-1.359 8.735 1.068 3.398 1.747 1.65-4.27 1.553.97 6.794-1.068-1.65-2.718-3.009-1.747.582-6.309-5.92 3.3-5.436-.68-1.747-4.173.582-1.359-7.377 3.494-4.756.292-8.541 5.241-.97 1.941-5.242-1.262-3.3 1.456-6.6-5.726-14.657-4.465-.291-1.747-9.415 9.027-5.339 1.358-7.57 5.727-.292.194zM35.486 14.26L24.13 19.89l3.785 3.688 1.456-3.688 3.883-4.756zM22.77.962l-7.765 5.339-.388 2.62 6.115-4.464z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
}

export default SvgMi;