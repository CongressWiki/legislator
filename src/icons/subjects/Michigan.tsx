import * as React from 'react';

const SvgMichigan = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <g
        fill="none"
        stroke="#000"
        strokeWidth={0.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      >
        <path d="M41.875 90.375c1.629-.386 1.956-1.153 2.128-2.597.16-1.344.846-2.318 1.503-3.627 1.253-2.496 1.861-5.02 1.744-7.894-.13-3.194-1.248-5.761-2.594-8.631-.242-.516-.786-1.254-.541-1.86.211-.521.9-.487 1.109-.916.178-.365.153-1.557.157-1.954.006-.562-.552-1.522-.524-1.768.042-.38.847-1.228 1.021-1.593.298-.629.448-1.388.65-2.057.286-.947.753-1.889.976-2.859.161-.704.013-1.236.141-1.975 2.241.283 1.02-1.794 1.973-2.8.42-.444 1.505-.501 1.989-.848.705-.505 1.231-1.585 1.766-2.265 1.491.942-1.356 3.776.028 5.249 2.025-.144 2.18-3.722 2.378-5.228.188-1.425.238-2.444 2-2.38.736.027 2.267.792 2.078-.854-1.1.184-1.852-1.172-1.392-1.997.111-.199.873-.688 1.066-.897.512-.552.146-.806 1.104-1.128 1.502-.505 1.055.525 1.991 1.137-.102-.066 1.328.243 1.373.247.566.06 1.16-.081 1.725-.005 1.991.267.47 1.446 1.75 2.1.388.198.986.014 1.396.182.5.205.768.659 1.257.874 1.167.515 2.235-.054 3.25.962.846.848 1.347 2.301 1.744 3.354-.767.27-2.028-.376-2.122.9-.057.781 1.026 1.745 1.155 2.762.166 1.313.21 2.776.194 4.113-.019 1.507-.383 1.279-1.194 2.159-.654.71-.711 1.52-1.153 2.434-.598 1.238-.913.69-1.878 1.653-.576.574-1.212 1.946-1.25 2.756-.053 1.124.657 1.38 1.028 2.369 1.533-.744 4.492-2.565 4.879-4.359.119.089.349.156.456.23-.068-1.068.922-1.08 1.631-1.393 1.284-.567 1.275-.678 2.509.125 1.267.824 1.589 1.124 1.5 2.787-.077 1.432.076 2.313.594 3.685.48 1.272.797 2.536 1.277 3.828.704 1.895.423 2.789-.124 4.451-.266.806.169 2.334-.4 3.033-.854 1.049-1.153-.045-1.116-.987-1.276-.133-.989 1.332-1.35 1.981-.276.496-.853.5-1.14 1-.228.396-.121 1.02-.135 1.481-2.07.269-1.212 2.286-2.103 3.672-1.008 1.568-2.033 2.465-2.272 4.328-2.479.141-4.913.635-7.356.769-1.372.075-6.288.773-6.095-1.277l-18.781-.472z" />
        <path d="M13.006 26.284c.312-.078 1.264-.314 1.625-.497.423-.213.633-.984 1.119-1.261.601-.343 1.09-.186 1.753-.272 1.38-.181 2.956.115 4.018-.744.587-.475.84-1.378 1.604-1.643.465-.161 1.065.126 1.525-.07.878-.374 1.921-1.812 2.628-2.515.9-.895 1.803-1.81 2.994-2.284.715-.285 4.254-1.121 4.882-.283.68.907-1.719 1.073-2.28 1.655-.414.43-.453 1.106-.742 1.534-.45.669-1.257 1.105-1.771 1.729-.403.489-2.338 2.547-1.712 3.121.56.514.951-.254 1.343-.5.792-.496.664-.482 1.5-.497 1.993-.034 2.539.482 4.01 1.625 1.377 1.071 1.178 2.783 2.253 3.993 1.115 1.254 1.561.001 2.737-.127.923-.101 1.007.572 1.787.789.633.176 1.304-.094 1.872-.195.618-.11.655.146 1.253-.183.558-.306.874-.986 1.497-1.283 1.152-.549 3.113-1.265 4.322-1.253 1.418.014 2.649.612 4.056.347 1.917-.362 2.866-1.614 4.615-.475-.444.368-.98 1.254-.899 1.881.132 1.02.452.746 1.253 1 .543.172 1.081.364 1.625.506.148.039.745.104.869.091.743-.081.579-.374 1.201-.613.948-.364 2.981-.575 3.437.76.504 1.476-1.514 1.875-1.361 3.108 1.364.074 1.014.952 1.728 1.647.514.501.262.438 1.003.375.63-.053.702-.468 1.119-.628 2.32-.887 4.354 1.731 1.29 1.726-2.037-.003-4.148.495-6.149-.131-.589-.184-1.876-1.135-2.388-1.097-.967.072-1.436 1.754-.757 2.355-1.769-.049-2.837-1.652-4.359-2.384-.687-.331-1.854-.757-2.555-.481-.862.339-1.4 1.348-2.334 1.722-.708-1.278-2.34.112-3.363.171-.879.051-.849-.418-1.656.126-.761.514-.333.727-.754 1.34-.364.531-1.867 2.297-2.597 2.006-1.058-.422.603-1.825.609-2.574-.504-.319-1.036-.135-1.474.252-.429.379-.306 1.029-.595 1.259-.119.095-1.552.4-1.664.356-.387-.15-.471-.851-.873-1.159-.647.524-.874 1.763-1.274 2.537-.622 1.201-1.025 2.478-1.7 3.6-.549.914-1.234 2.474-2.65 2.006-1.535-.507-.549-1.907.137-2.753-.267-.7-.973-.5-1.618-.519-.064-1.215.565-2.636.359-3.734-.292-1.555-1.72-.643-2.481-1.507-.349-.396-.23-1.251-.674-1.74-.491-.541-1.169-.732-1.826-.902-1.292-.334-2.627-.398-3.868-1.132-2.351-1.391-4.854-1.782-7.434-2.562-.853-.258-2.399-.566-3.07-1.178-.694-.632-.913-1.914-1.519-2.625-.479-.562-1.29-.267-1.256-1.225l1.63-.591zM22.5 11.5c-.518-1.641 1.238-2.136 2.5-2.719 1.298-.6 3.042-2.136 4.48-1.887-.166 1.854-1.996 2.143-3.327 2.856-.725.389-.903.925-1.553 1.344-.638.411-1.381.175-1.975.531" />
      </g>
    </svg>
  );
};

export default SvgMichigan;
