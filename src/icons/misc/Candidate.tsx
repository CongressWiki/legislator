import * as React from 'react';

const SvgCandidate = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
      {...properties}
    >
      <path d="M62.005 34.481c10.337-4.721 11.328-11.684 10.99-15.439l-.013-.153c0-.806-.507-4.899-2.918-4.899-.498 0-.93.202-1.248.584-.924 1.111-.567 3.598-.448 4.275-.147 3.366-4.538 9.19-7.639 9.19-1.961 0-4.369-.625-6.698-1.229l-.52-.133-.923-3.419c3.5-1.438 5.974-4.88 5.974-8.894 0-5.3-4.313-9.613-9.613-9.613s-9.613 4.313-9.613 9.613c0 3.998 2.454 7.43 5.932 8.878l-.939 2.781c-1.954.374-4.409 1.164-7.949 2.743-4.995 2.228-7.437 6.891-8.497 9.687a4.131 4.131 0 00-2.731-1.674c-.221-1.314-.589-4.92 1.408-7.474 1.408-1.8 3.763-2.745 6.985-2.833a2.99 2.99 0 002.622 1.571c1.654 0 3-1.345 3-2.999 0-1.654-1.346-3-3-3a2.999 2.999 0 00-2.994 2.942c-3.522.159-6.149 1.29-7.794 3.394-2.272 2.906-1.999 6.763-1.741 8.434a4.149 4.149 0 00-3.184 3.294h-2.527v15.737h14.326l8.345 29.521h-3.86v5.884h22.526v-5.884h-3.86l8.345-29.521h14.326V40.108h-17.51l1.44-5.627zm-28.367 5.627c.945-1.514 2.592-3.624 4.377-4.21l1.018 4.21h-5.395z" />
    </svg>
  );
};

export default SvgCandidate;
