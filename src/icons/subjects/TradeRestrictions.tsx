import * as React from 'react';

const SvgTradeRestrictions = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <g color="#000">
        <path
          style={{
            textIndent: 0,
            textTransform: 'none',
            blockProgression: 'tb',
          }}
          d="M63.628 41.328c-12.335 0-22.341 9.98-22.341 22.32C41.287 75.99 51.293 86 63.627 86 75.964 86 86 75.989 86 63.648c0-12.34-10.037-22.32-22.372-22.32zm0 1.47a20.77 20.77 0 0114.217 5.595L48.38 77.873c-3.456-3.732-5.593-8.737-5.593-14.225 0-11.53 9.317-20.85 20.84-20.85zm15.28 6.658a20.772 20.772 0 015.56 14.192c0 11.53-9.316 20.914-20.84 20.914-5.498 0-10.464-2.145-14.186-5.627l29.465-29.48z"
          overflow="visible"
        />
        <path
          style={{
            textIndent: 0,
            textTransform: 'none',
            blockProgression: 'tb',
          }}
          d="M38.22 14.075c-2.893-.244-5.868.107-8.799 1.067-11.723 3.839-18.147 16.46-14.31 28.189 3.837 11.728 16.497 18.11 28.22 14.272a.752.752 0 10-.489-1.423c-10.953 3.587-22.724-2.38-26.309-13.338-3.585-10.958 2.38-22.69 13.332-26.277 10.953-3.587 22.725 2.38 26.31 13.338 1.324 4.05 1.402 8.37.177 12.45a.75.75 0 101.422.444 22.363 22.363 0 00-.178-13.383C54.72 20.618 46.9 14.807 38.22 14.074z"
          overflow="visible"
        />
        <path
          style={{
            textIndent: 0,
            textTransform: 'none',
            blockProgression: 'tb',
          }}
          d="M22.102 25.604a.78.78 0 00-.719.781.78.78 0 00.781.72h3.5l3.906 15.442c.081.317.391.56.718.563h16.248a.773.773 0 00.688-.5c1.405-4.02 2.698-8.01 4.062-12.004.16-.455-.238-1.008-.719-1H30.288c-.396-.007-.76.353-.76.75a.78.78 0 00.76.75h19.248l-.844 2.5H32.975a.78.78 0 00-.724.782.78.78 0 00.787.72h15.154l-.843 2.5H35.413a.782.782 0 00-.688.813c.033.393.42.72.813.688h11.28l-.844 2.5H30.85l-3.906-15.411a.773.773 0 00-.719-.594h-4.124zM31.944 45.624a.753.753 0 10.125 1.5h4.062a.75.75 0 100-1.5H32.07a.75.75 0 00-.125 0zM40.037 45.624a.754.754 0 10.156 1.5h4.062a.75.75 0 100-1.5h-4.062a.75.75 0 00-.156 0z"
          overflow="visible"
        />
      </g>
    </svg>
  );
};

export default SvgTradeRestrictions;
