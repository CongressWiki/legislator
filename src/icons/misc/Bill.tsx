import * as React from 'react';

function SvgBill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M48.049 34.971h-5.13a1.281 1.281 0 110-2.564h5.13a1.281 1.281 0 110 2.564zm23.084 5.13H45.485a1.281 1.281 0 110-2.564h25.649a1.281 1.281 0 11-.001 2.564zm-1.282 5.13H41.637a1.281 1.281 0 110-2.564h28.214a1.281 1.281 0 110 2.564zm1.282 5.13H41.637a1.281 1.281 0 110-2.564h29.496a1.281 1.281 0 110 2.564zm-2.565 5.129H41.637a1.281 1.281 0 110-2.564h26.931a1.281 1.281 0 110 2.564zm19.968-18.768l-9.76-.071.021-2.871 6.868.05v-4.626a2.784 2.784 0 00-2.781-2.781v-2.871a5.66 5.66 0 015.653 5.653v7.517zM72.685 69.519c-1.558 0-2.473-.632-2.965-1.162-1.069-1.15-.991-2.661-.979-2.83-.004-1.429-1.251-2.676-2.785-2.676V59.98a5.66 5.66 0 015.653 5.653c-.006.196.026.576.222.778.19.198.57.238.855.238v2.87z" />
      <path d="M75.047 69.49H60.333v-3.858c0-1.011.266-1.96.732-2.781H31.951V29.204a5.66 5.66 0 015.653-5.653h45.878v2.871a2.784 2.784 0 00-2.781 2.781v34.634a5.661 5.661 0 01-5.654 5.653zm-11.843-2.871h11.843a2.784 2.784 0 002.781-2.781V29.204c0-1.01.266-1.96.732-2.781H37.604a2.784 2.784 0 00-2.781 2.781V59.98h31.163v2.871a2.784 2.784 0 00-2.781 2.781v.987z" />
      <path d="M57.551 80.077H13.109v-2.871a2.784 2.784 0 002.781-2.781v-8.793a5.66 5.66 0 015.653-5.653h44.442v2.871a2.784 2.784 0 00-2.781 2.781v8.793a5.66 5.66 0 01-5.653 5.653zm-39.522-2.871h39.522a2.784 2.784 0 002.781-2.781v-8.793c0-1.011.266-1.96.732-2.781H21.543a2.784 2.784 0 00-2.781 2.781v8.793c0 1.011-.267 1.96-.733 2.781z" />
    </svg>
  );
}

export default SvgBill;
