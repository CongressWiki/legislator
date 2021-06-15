import * as React from 'react';

const SvgSd = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        d="M106.895 1.58l-16.404.485-39.505.291L8.181 1.191 4.396.997 4.299 3.23l-.388 8.832-.292 6.698-.097 1.359h-.29l-.098 2.523-.97 20.383-.777 15.142-.097 2.621 2.912.097 32.904 1.068 27.857.291 19.122-.194 6.115 3.882 5.144-1.456 3.397.098 10.58 3.106 3.009 3.009 1.844.194v-.68L112.04 67l1.359-5.144-1.65-10.774 2.038-.097-.194-4.465-4.853-34.166-2.524-4.271 3.882-6.406.098-.292-3.3.195z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
};

export default SvgSd;
