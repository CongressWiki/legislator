import * as React from 'react';

function SvgLibrariesAndArchives(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M89 10.002H75.781a1 1 0 00-1 1v6.866h-16.81v-6.88a1 1 0 00-1-1H40.876a1 1 0 00-1 1v4.427L23.278 12.64c-.26-.041-.53.02-.746.171a1.002 1.002 0 00-.405.65L10.014 85.938a1 1 0 00.821 1.152l17.33 2.896a1.005 1.005 0 00.746-.172c.216-.154.361-.387.405-.649l10.559-63.174V89a1 1 0 001 1H89a1 1 0 001-1V11.002a1 1 0 00-1-1zm-59.023 63.08l-15.358-2.567 1.565-9.36L31.54 63.72l-1.564 9.36zm-2.468 14.767L12.15 85.282l2.139-12.794 15.357 2.566L27.51 87.85zm4.362-26.1l-15.358-2.567 7.422-44.404 15.357 2.567-7.421 44.404zm26.1-7.309h16.81v10.198h-16.81V54.44zm18.81-25.283H88v41.674H76.781V29.157zM88 12.002v15.155H76.781V12.002H88zm-13.219 7.866V52.44h-16.81V19.868h16.81zm-18.81-7.88V88H41.876V11.988h14.097zm2 76.012V66.638h16.81V88h-16.81zm18.81 0V72.831H88V88H76.781z" />
    </svg>
  );
}

export default SvgLibrariesAndArchives;