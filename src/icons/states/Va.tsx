import * as React from 'react';

const SvgVa = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        d="M122.75 47.983h.292l.291-.098-.194-.485-.388.583zm-3.3-10.872v.486l.486-.291zm1.748-3.397l-.097-.776zm-.583 1.165l-.194 1.262-.29.485zm.874-2.524l.097-.582-.194.582h.097zm.582-2.62l.292-.68-.486 1.747zm.098-1.456l.388-2.136-.486.486.098 1.65zm1.747-9.61l.194-.873-.097.194-.097.68zm-.389-2.232l-1.261.485-1.942.874-.68.873.292.098-2.33 14.462.874 2.33 1.359-6.018 2.524-7.863 1.164-5.144zm1.942-.776l-.292.097-.097.388-.485 3.009.388-1.068.486-2.426zM24.038 52.836l-.68.97-4.659 5.921-3.688 2.912-.777 2.524-5.63 7.377-7.28 3.882-.679.777 1.748-.292L18.99 73.51l6.6-1.359 5.533-1.553 1.553-.29.097.193 25.043-4.659 24.75-6.309 38.826-11.065-.291-.485-.097-.292.68.68.776-.194-.097-.097-.68-3.3.485.097 1.553 2.911.292-.097.194-.097-.388-.776-3.98-6.115-4.95.873-2.233 1.844-2.135-1.94-7.28-2.427-5.047-.194 9.803-.874 5.436 3.688 1.553-2.426-4.368-5.533 3.106.194-1.65-4.465-3.883.195-9.22-7.474h-1.165l13.006 6.406-.873-4.465.873-1.456-6.6-2.524-5.727-.388-2.815-2.524-2.33 1.456-.873-6.697.97.194-.193-5.435-.194-.194-.195.097-.194-.097-.485-.389-.291-.29-3.106-1.36-3.203-2.33-4.465-1.164-.291-.097v.097l-.583 4.077-9.027-3.883.194 5.63-4.95 9.415-3.009 3.3-1.941 5.727-5.92-2.039-2.913 13.2-2.33 4.466-.387 5.824-1.748 2.814-6.503 1.942-5.338 4.173-2.524.389-2.427 2.135-6.115-2.232-1.067-3.01-.194-.096z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
};

export default SvgVa;
