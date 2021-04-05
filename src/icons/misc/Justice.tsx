import * as React from 'react';

function SvgJustice(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
      {...props}
    >
      <path d="M36.417 85.726l23.167.002V82.12l-23.167-.002v3.608zm1-2.608l21.167.002v1.607l-21.167-.002v-1.607z" />
      <path d="M89.895 34.885l-7.934-23.459.627-.201-.307-.952-32.404 10.416v-.082l-3.753 1.188v.101L13.849 32.272l.14.436-7.88 23.293h-.564v.811c0 2.977 3.963 5.309 9.022 5.309s9.021-2.332 9.021-5.309v-.811h-.562l-7.818-23.115 30.916-9.939-.002 59.172h3.755V21.74l30.906-9.936-7.805 23.081h-.564v.808c0 2.977 3.963 5.309 9.021 5.309 5.057 0 9.02-2.332 9.02-5.309v-.809h-.56zm-75.828-1.932l.087.271.913-.294V56h-1V32.953zm-1 5.598v16.45H7.502l5.565-16.45zm3-.004l5.565 16.454h-5.565V38.547zm6.513 18.454c-.192 2.252-3.783 4.119-8.013 4.119s-7.822-1.867-8.014-4.119H22.58zm26.297 24.117h-1.755l.002-58.493 1.753-.563v59.056zm34.059-63.689L88.5 33.885l-5.564.001V17.429zm-2-5.673l1-.321v23.45h-1V11.756zm-1 5.678v16.452h-5.563l5.563-16.452zm1.5 22.568c-4.303 0-7.826-1.829-8.014-4.116l16.025-.001c-.195 2.251-3.785 4.117-8.011 4.117z" />
    </svg>
  );
}

export default SvgJustice;