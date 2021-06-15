import * as React from 'react';

const SvgPakistan = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        fill="none"
        stroke="#000"
        strokeWidth={0.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M40.375 51.75c.609-.678-.016-.901-.125-1.507-.042-.232-.264-.41-.287-.74-.02-.284.412-.565.418-.872.014-.766-.68-1.318-.631-2.231.047-.879.14-1.117.777-1.655.234-.197.449.082.719-.237.354-.417.171-.865.369-1.258.533-1.055.484-.845 1.51-.775 1.412.096 3.04.449 3.396-1.484-.08-.007-.345-.089-.49-.104.568-.475 1.368-1.148 1.846-1.658.818-.873.492-1.007 1.758-.729 1.742.383 1.837 1.431 2.99-.396.315.476.438 1.333 1.125 1.029.461-.204.699-1.516.784-1.975.126-.682-.077-1.269-.064-1.909.016-.823.347-.854.515-1.598.258-1.144-.348-2.967 1.01-3.786.444-.269 1.138.089 1.814-.422.771-.582.994-.834.785-1.663-.334-1.321-1.565-.78-1.976-1.899-.659-1.803.988-1.529 2.223-1.41 1.337.129 2.496.576 3.25-.741.29-.506.372-1.203.531-1.735.075-.252.401-.489.388-.777-.034-.669-.5-.54-.616-.948a1.53 1.53 0 01-.252-.036c-.201-.771.887-1.805 1.264-2.414.637-1.026.916-1.539.845-2.828-.082-1.48-.438-3.911-2.357-4.009-.059-.113-.195-.643-.205-.762 1.196-.432 1.078-1.35 1.785-2.072.637-.651.966-.148 1.553-.272 1.44-.305 2.528-2.452 4.709-2.109.031.125.021.219.057.34.5.001.97-.213 1.449-.349 1.267 2.161-1.963 2.088-2.121 3.99-.026.327.571 1.617.868 1.756.425.199.84-.323 1.142-.24.417.115.599.454.906.728.812.723 1.246 1.76 2.352 2.271.643.296 1.939.073 2.47.63.163.171-.02.772.113 1.012.173.312.55.491.689.816.364.85.315 1.306-.777 1.518.097.081.188.294.358.413-.602.917-1.371.547-2.064 1.125.393.588.764 1.749.823 2.473.043.523-.087.961-.03 1.402.051.396.293 1.207.4 1.604.25.93.604 2.271 1.165 3.09.397.581.681.369 1.072.772.514.529.61 1.235.955 1.852 1.771-.694 1.779-.367 3.153.688.306.234.734.285 1.007.619.352.431.151 1.062.651 1.356.335.198 1.485-.006 1.883.013.219.01.447.372.742.334.342-.043.719-.675 1.004-.62 1.623.314-.176 2.023-.273 2.504-.639-.467-2.915.798-3.519 1.391-1.046 1.027-.782 2.405-.707 3.877.057 1.101.235 3.187-.118 4.116-.267.699-2.19 2.468-2.709 2.159.247.997 1.252 1.189.702 2.438-.25.569-.687.672-1.128 1.032-.527.429-.643.73-1.125 1.255-.419.456-1.098.625-1.35 1.241-.167.409.076.951-.022 1.375-.245 1.051-1.261 1.929-1.994 2.618-1.478 1.39-1.961 4.201-3.729 5.51-.555.411-1.842.66-2.537.753-.335.045-.827-.105-1.236-.009-.779.183-1.387.875-2.115 1.121-.526-.752-.739-2.141-1.898-1.78-.776.242-1.406 1.79-1.655 2.25-.595 1.096-1.7 1.863-2.21 2.913-.383.79-1.134 2.667-.734 3.505.29-.385.558-1.112 1.106-1.139.5-.024.454.664.744.743.742.203 1.025-.274 1.749.29 1.594 1.242.502 3.851 2.354 5.128.516.356 1.377.298 1.785.619.333.263.333.551.499.881.12.239-.193.401-.088.625.11.232.494.438.585.628.646 1.345 1.926 3.021 1.267 4.572 1.965.402-1.623 1.891-1.894 2.165-.542-.45.116-1.065.229-1.624-.993-.223-1.572.622-2.411.953-.7.276-1.768.386-2.539.5-.441.065-.812.187-1.268.153-.434-.032-1.132-.419-1.382-.386-.855.11-1.229.877-2.234.78-.002.285-.203.536-.168.834-2.097.297-1.125 2.665-2.835 3.384.162-.859-1.158-1.769-1.891-1.99-1.044-.315-2.048.294-2.984.358.064-.279-.051-.566.061-.865-1.098-.249-.789-3.102-1.356-4.116-.182-.324-1.127-1.837-1.22-1.88-.746-.342-1.669 1.224-2.02-.12.056-.126.153-.111.217-.216-.716-1.148-.901-3.006-2.568-3.287-.734-.124-1.736.616-2.354.54-.599-.074-1-1.068-1.777-.427-.108-.103-.13-.176-.25-.25-.534.352-1.291.946-1.906 1.109-.832.22-1.588-.251-2.469.062-.388.138-.669.616-1.007.721-.662.206-.372.012-1.021-.13-.559-.122-1.734-.436-1.997-.985-.128.128-.327.157-.469.347-1.101-.575-2.549-.755-2.653.869-.793-.064-1.809.56-2.485.405-.34-.078-.424-.72-.861-.768-.473-.052-.882.473-1.284.604-.846.275-1.584.078-2.47.406-.334.124-.952.859-1.353.599-.414-.269-.201-.789.053-1.081-.921.041-.83-2.707-.923-3.516-.183-1.605.467-.428 1.072-1.627.427-.846-.52-.798-.493-1.487.031-.802 1.243-1.682 1.888-1.894.29-.095.68.199 1.01.14.22-.039.603-.531.875-.643.28-.115 1.313-.295 1.743-.366.499-.082 1.489.14 1.972.362.936-1.026.092-1.467-.35-2.235-.159-.275-.22-.933-.487-1.165-.329-.285-.91-.086-1.267-.338-.853-.604-1.795-4.242-1.381-5.35-.226.071-.61-.01-.842.084-.411-.463-.431-.981-1.021-1.366-.447-.291-1.571-.255-2.1-.341-1.147-.187-2.023-.918-2.907-1.772-.928-.897-1.486-2.062-2.463-2.972-1.131-1.054-1.696-2.062-2.486-3.265a45.45 45.45 0 009.953 1.481c1.684.059 3.343-.147 5.003-.125.657.009 1.594.351 2.25.256.982-.142 1.624-.877 2.51-1.387.11.336.44.596.512.968.479-.664 1.385-.448 2.094-.553 1.205-.178 2.183-1.235 3.153-1.265.382-.012.924.384 1.481.353a7.855 7.855 0 001.098-.147c.4-.078 1.947-.679 1.652-.475"
      />
    </svg>
  );
};

export default SvgPakistan;
