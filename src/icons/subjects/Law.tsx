import * as React from 'react';

function SvgLaw(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M81.95 49.69l-5.424-16.6A3.957 3.957 0 0078 30c0-2.206-1.794-4-4-4H53.974A4.951 4.951 0 0055 23c0-2.757-2.243-5-5-5s-5 2.243-5 5c0 1.13.391 2.162 1.026 3H26c-2.206 0-4 1.794-4 4 0 1.227.553 2.345 1.474 3.09l-5.425 16.6c-.017.052-.01.104-.018.157-.008.052-.031.099-.031.153v2c0 3.86 3.14 7 7 7h2c3.86 0 7-3.14 7-7v-2c0-.06-.024-.114-.035-.172-.01-.06-.006-.119-.028-.178l-6.026-16.138a3.9 3.9 0 00.735-.512H46v39h-9.563c-.44 0-.881.104-1.275.3l-8.587 4.294A2.838 2.838 0 0025 79.15 2.853 2.853 0 0027.85 82h44.3A2.854 2.854 0 0075 79.144a2.835 2.835 0 00-1.575-2.55l-8.587-4.293A2.865 2.865 0 0063.563 72H54V33h17.355c.222.199.47.366.735.51l-6.027 16.14c-.022.06-.018.119-.028.178-.01.058-.035.111-.035.172v2c0 3.86 3.14 7 7 7h2c3.86 0 7-3.14 7-7v-2c0-.054-.023-.101-.03-.153-.01-.053-.002-.105-.02-.158zm-7.906-15.695a3.94 3.94 0 00.648-.077L79.621 49h-11.18l5.603-15.005zM47 23c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zM25.954 33.99L31.56 49H20.38l4.925-15.07c.211.039.428.058.65.06zM32 52c0 2.757-2.243 5-5 5h-2c-2.757 0-5-2.243-5-5v-1h12v1zm31.943 22.09l8.587 4.293c.29.145.47.436.47.767 0 .469-.381.85-.85.85h-44.3a.852.852 0 01-.85-.856c0-.325.18-.616.47-.76l8.587-4.294a.854.854 0 01.38-.09H63.563c.132 0 .263.031.38.09zM52 72h-4V33h4v39zm1-41H28.23c-.289 0-.563.125-.753.342-.273.313-.641.528-1.035.616-.45.085-.916.037-1.338-.174A1.977 1.977 0 0124 30c0-1.103.897-2 2-2h48c1.103 0 2 .897 2 2 0 .763-.423 1.447-1.107 1.786a2.233 2.233 0 01-1.306.178 1.962 1.962 0 01-1.064-.622A1.001 1.001 0 0071.77 31H53zm27 21c0 2.757-2.243 5-5 5h-2c-2.757 0-5-2.243-5-5v-1h12v1z" />
    </svg>
  );
}

export default SvgLaw;
