import * as React from 'react';

function SvgPoliticalPartiesAndAffiliation(
  props: React.SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={26.3} cy={27.891} r={5.527} />
      <path d="M7.876 59.213h3.686v22.109h29.477V59.213h3.686v-7.37H7.876v7.37zm12.895 1.842h11.055v6.238L26.3 72.11l-5.528-4.817v-6.238zM17.087 42.631c1.019 0 1.844.824 1.844 1.842v3.686H33.67v-3.686a1.842 1.842 0 113.685 0v3.686h5.525l.002-3.686a7.368 7.368 0 00-7.369-7.369H18.929a3.686 3.686 0 01-3.686-3.686v-8.29a2.764 2.764 0 00-5.528 0v10.133h.002a7.372 7.372 0 007.37 7.37z" />
      <circle cx={67.964} cy={27.891} r={5.527} />
      <path d="M49.54 51.843v7.37h3.686v22.109h29.476V59.213h3.685v-7.37H49.54zm23.951 14.739a5.527 5.527 0 11-11.054 0v-5.527h11.055v5.527zM56.908 48.158v-3.686a1.842 1.842 0 113.685 0v3.686h14.74v-3.686c0-1.018.825-1.842 1.843-1.842h.001a7.37 7.37 0 007.369-7.37h.001V25.128a2.765 2.765 0 00-5.528 0v8.29a3.685 3.685 0 01-3.685 3.686H58.751a7.368 7.368 0 00-7.37 7.369l.001 3.686h5.526z" />
    </svg>
  );
}

export default SvgPoliticalPartiesAndAffiliation;
