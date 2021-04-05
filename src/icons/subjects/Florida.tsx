import * as React from 'react';

function SvgFlorida(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="none"
        stroke="#000"
        strokeWidth={0.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      >
        <path d="M72.625 88.5c1.078.352 1.558-.844 2.631-1.125.64-.167 3.971-.835 2.493.768-.355.385-1.944.756-2.497.985-.743.308-2.373.711-2.48-.487.192-.099.18.11.228.108M37.25 13.75l1.458 3.5L66 18.875c-.054.183.011 1.715.144 2.355.712.265 1.689.129 2.115-.606.56-.966-.334-1.462-.518-2.25-.576-2.475 1.464-1.886 3.009-1.875.971.007 2.529.104 3.25.747.593.529.645 1.955.872 2.878a96.932 96.932 0 011 4.49c.332 1.688 1.216 3.124 1.788 4.732.438 1.233.704 2.536 1.088 3.737.539 1.689 1.542 2.902 2.375 4.412.73 1.324 1.115 2.898 2.03 4.103.491.646 1.635 1.584.491 2.171-.035 1.481-.574 2.428.009 3.951.549 1.434 1.377 2.778 2.07 4.156 1.062 2.116 1.877 4.394 2.877 6.597.646 1.424 1.149 2.43 1.15 4.034 0 1.552.205 3.066.131 4.619-.068 1.444-.519 2.873-.631 4.275-.111 1.382.084 2.604-.405 3.72-.527 1.201-1.238 1.926-1.095 3.377.107 1.085.853 2.213-.103 3.265.029-1.035-.481-1.398-1.244-1.112-.263.099-.643.799-1.019.972-.595.272-1.394.254-2 .463-1.097.378-2.988 1.416-4.137.512-.967-.76-.69-2.92-.97-4.069-.235-.963-.375-1.049-1.027-1.812-.103-.12-.541-.401-.597-.498-.106-.18-.064-.627-.15-.728-.782-.917-1.396-1.279-2.653-1.403-.848-.083-1.268.259-1.922-.591-.364-.473-.419-.945-.549-1.5-.244-1.038.136-2.36-.404-3.253-.901-1.491-2.514-1.284-3.608-.503-.259-.511-.041-1.051.487-1.265.194-1.147-.751-2.677 1.003-3 .002-.749-.268-2.592-1.337-2.334.012 1.038-.287 1.507-.666 2.438-1.202-.724-1.499-1.919-2.013-3.082-.542-1.227-1.506-1.682-1.963-2.9-.447-1.191-1.466-2.625-1.005-3.627.53-1.154 2.222-1.911 3.024-2.847-.378-.5-.615-1.264-1.384-1.106.063.381.002.84.096 1.212-1.291-.061-1.885 1.029-2.883.397-.789-.5-.961-1.498-.85-2.372.239-1.865 1.613-3.348 1.847-5.25.121-.986.237-2.029.281-3.004.022-.502.339-1.971.225-2.365-.164-.563-.516-.365-.824-.788-.68-.934-2.1-4.422-3.278-2.391-.692-.381-.372-.875-.626-1.459-.41-.941-.235-.586-1.125-1-.81-.377-1.694-.819-2.128-1.618-.477-.874-.021-.649-.15-1.507-.131-.867-.488-1.208-1.121-1.719-.283-.229-.509-.143-.749-.404-.273-.297-.211-.708-.448-1.012-.696-.891-1.955-.995-2.549-2.097-.999-.126-2.024.219-3 .329-.363.041-1.596-.053-1.866.15-.403.303-.116.479-.363.881-.541.879-.722 1.183-1.874 1.534-.694.211-1.979.656-2.656.728-.432.046-.858-.485-1.35-.271-.341.148-.337.667-.485.759-.598.37-1.712.771-2.483.25-.811-.548-.286-1.422-.807-2.109-.376-.496-1.354-.623-1.843-.894-2.417-1.339-4.41-3.641-7.24-4.594-2.978-1.003-5.59-.903-8.601-.413-.946.154-3.134.945-3.949.138.177.176-.172-1.314-.186-1.149.048-.598.338-1.02.362-1.491.052-1.014-.632-1.676-1.234-2.491-.82-1.11-.15-1.771.097-2.75H37.25z" />
      </g>
    </svg>
  );
}

export default SvgFlorida;