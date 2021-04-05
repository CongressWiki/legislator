import * as React from 'react';

function SvgGa(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M85.854 67.097l-.097-2.912-.68 2.524.777.388zm1.068-4.465l-.389-2.232-.29 1.358zM41.496 1.482l-1.262.291-3.688.777-13.589 2.815-1.262.29-1.359.195-7.57 1.456-2.039.388-8.25 1.553-1.747.194.097.195 13.006 39.601 7.183 12.813-1.747 1.94-1.068 7.572 2.135 3.882.195 7.086 2.62 4.95v.097l-.097.097 3.3 5.145 45.814-5.727 1.359 3.494 1.456-7.474 2.62-2.038 6.698.388-.582-10.483 1.261-2.232-.68-4.174 1.36-3.98 2.038-2.232-1.456-1.359 3.397-4.173h-.097l-5.823-5.436-7.96-11.356-4.367-2.039-18.734-15.724-4.562-5.824-8.832-3.688-.486-1.941 2.718-5.339z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
}

export default SvgGa;
