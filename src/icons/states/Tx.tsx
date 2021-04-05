import * as React from 'react';

function SvgTx(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M168.98 210.935l-4.659-17.568v3.3zm-1.068-30.866l-3.3 6.212-.388 2.039zm2.621-4.562l3.106-4.076-2.232 1.359zm10.968-9.9l-7.28 3.785 2.039-.388zm.97-1.359l2.04-1.65-.777.194zM67.356 1.376l-.68-.097-3.3 91.045-19.218-.873-30.769-1.747-12.327-.874 2.427 4.756.097.097 10.482 10.483 6.018 7.086 7.96 5.92 5.63 10.29 2.135 10.773 4.562 3.01 3.59 3.979 5.145 1.844 7.474 4.756 3.397 1.262 4.66-4.66 1.455-4.95 2.427-4.755 7.57-3.01 2.913 1.457 8.444.679 7.668 4.756 5.242.97-1.456 2.718 3.009 1.942 2.814 3.397.583 3.591 1.844 2.427 4.27 10.289 4.272 3.59 3.3 5.436 4.173 4.271 1.845.583 1.553 11.065 4.562 2.523.194 3.495 1.164-.292 7.96 9.707 3.98.873 5.047 3.01h7.765l5.63 3.105 6.697-1.456-3.01-2.814-2.717-8.154-1.068-7.085-1.553-2.33.68-4.756-2.039-.194-2.718-4.465 3.107 3.3 3.59-1.262 1.942-5.144-3.882-5.241 5.823.679 2.718-4.174-.388-1.456 2.426-3.203-.582 2.815 2.718-2.135-1.068-3.786 3.494 1.844 4.465-2.523-4.368-4.562 2.718 1.068 5.048.29 6.6-1.455 7.377-4.95 4.465-3.689.679-2.718 2.718-2.814-1.456-4.66.291-2.911 4.853-2.136-.388 5.145h2.912l-3.203 2.717 12.91-6.794 2.134-.097 1.36-6.212h.388l1.456-3.592.679-11.065.874-4.465-2.524-7.959-3.106-5.435-.097-2.621-3.203-4.465-1.942-18.733-.097-2.33-.194-2.426-.582-8.542-5.824.194-1.456-1.553-.291-.097h-.097l-3.786-.68-4.367-2.814-4.854-2.038-9.124 2.62-2.426-.582-3.01 1.165-3.687 3.009-9.9-4.66-3.107 4.271-4.562-1.65-4.853-3.106-2.62 2.233-2.524.097v-1.844l-6.795-3.203-2.718 1.261-1.358-1.553-7.474-.776-5.727-5.241-.874 1.747-4.173-.194-3.883-3.689-1.747-5.824-.291-33.195-24.848-.291-23.49-.583h-.582z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
}

export default SvgTx;