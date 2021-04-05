import * as React from 'react';

function SvgLibya(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M19.881 9.549l-.286.41c.434.298.98.492 1.494.702.511.202.983.428 1.171.618.795.762 1.804.982 2.779.979 1.517-.007 3.088-.481 4.262-.473.111 0 .218.004.32.012l.12.03c.033.016.089.072.212.198.12.121.323.29.605.375.519.154 1.043.104 1.511.124.473.009.825.091.976.246l.045.043-.045-.043c.451.433.911.538 1.145.617a.918.918 0 01.285.143c.087.068.198.181.337.404.236.371.605.546.969.655.553.16 1.182.185 1.766.209.577.02 1.123.045 1.367.12.157.046.207.088.225.106l.038.07c.06.126.048.56.219 1.113l.017.053-.017-.053c.281.861.419 1.911.783 2.878.184.483.431.952.804 1.351.371.398.87.714 1.496.889.467.131 1.008.356 1.585.556.578.198 1.198.375 1.852.376.401 0 .815-.07 1.217-.247l-.201-.458-.1.49s.202.042.529.116c.49.113 1.254.301 1.994.532.736.227 1.461.513 1.805.753.431.295.891.452 1.326.584.437.131.853.24 1.224.402.918.393 1.663 1.199 2.617 1.936.401.307.878.68 1.406.994.529.313 1.112.576 1.752.624.173.013.341.019.504.019.683 0 1.28-.114 1.815-.349.535-.234.996-.583 1.43-1.018.612-.613 1.229-1.283 1.703-2.06.473-.775.799-1.67.798-2.687 0-.125-.005-.251-.015-.378-.056-.748-.453-1.219-.715-1.575-.27-.375-.444-.625-.453-1.188 0-.397.11-.968.447-1.792.07-.179.294-.531.54-.839.242-.31.528-.602.661-.692.276-.196.593-.471.91-.75.314-.278.627-.559.85-.738.697-.565 1.717-1.117 2.537-1.309.997-.24 1.919-.324 3.054-1.03.188-.111.222-.105.285-.11.082-.009.336.068.755.072.085 0 .176-.004.274-.012l.227-.009c.814-.006 1.741.369 2.707.633.675.18 1.018.274 1.299.404.281.127.561.314 1.113.72.16.117.33.27.443.422.116.154.166.292.165.393h.104l-.082-.06-.022.06h.104l-.082-.06.049.036-.046-.041-.003.004.049.036-.046-.041-.036.029c-.041.032-.116.074-.22.168a.726.726 0 00-.237.53l.039.239v-.001c.094.271.262.394.398.498.212.149.431.25.575.339l.126.088.087-.088-.107.059.02.03.087-.088-.107.059.259-.142-.293.01.034.131.259-.142-.293.01.016.457.457.025c.679.036.856.058 1.071.073.219.015.434.02 1.121.02a.84.84 0 01.399.081c.138.065.271.207.509.406.233.197.606.405 1.094.428.159.01.328.013.507.013.485 0 1.044-.024 1.596-.024.654-.001 1.3.037 1.751.163.226.061.396.144.5.226a.44.44 0 01.174.263c.084.361.268.603.382.791.123.191.169.308.168.39v-.001.005l-.068.146c-.092.107-.34.248-.616.421-.138.09-.284.192-.42.337-.135.143-.262.34-.308.581l-.016.082.016-.082a4.653 4.653 0 00-.095.891c-.006.753.264 1.265.465 1.645.201.393.346.665.352 1.267 0 .134-.009.285-.029.456-.022.266-.283.772-.586 1.285-.297.525-.634 1.056-.735 1.648a3.63 3.63 0 00-.039.549c.002.854.228 1.858.495 2.826.268.965.584 1.888.78 2.509.388 1.201.235 2.612.417 4.21l.497-.059h-.5v49.167h-5.46l-.225 2.703-41.681-22.135-9.79 4.709-3.222-3.103-8.255-2.032-.12.485.454-.21c-.485-1.041-.885-2.331-1.584-3.411a3.87 3.87 0 00-.439-.579 1.511 1.511 0 00-.67-.404c-.198-.065-.378-.113-.716-.28-.309-.152-.598-.395-.923-.668-.325-.271-.688-.572-1.167-.78-.811-.343-1.648-.348-2.346-.467-.35-.057-.661-.136-.92-.265a1.664 1.664 0 01-.669-.587c-.179-.271-.233-.516-.267-.855-.034-.334-.029-.748-.136-1.229-.223-.978-.745-1.668-1.159-2.383-.857-1.458-2.174-3.261-2.699-4.808l-.473.162.09.492c.837-.155 1.541-.445 2.238-.636l.26-.072.083-.257c.272-.849.343-1.706.343-2.546 0-1.038-.106-2.057-.105-3.031 0-1.001.108-1.943.515-2.832.125-.272.237-.434.355-.646.119-.208.226-.5.221-.834 0-.166-.02-.342-.057-.543-.083-.432-.259-.797-.409-1.13-.153-.333-.281-.632-.323-.904-.09-.559-.112-1.142-.112-1.744 0-.47.013-.952.013-1.442 0-.294-.005-.592-.02-.893-.055-1.119-.392-1.946-.792-2.662-.401-.72-.848-1.341-1.211-2.158-.123-.272-.158-.455-.156-.54.008-.096.005-.071.043-.116.058-.065.322-.175.678-.283.354-.115.795-.254 1.219-.541.688-.464 1.092-1.12 1.297-1.808.208-.69.243-1.42.244-2.138 0-.504-.019-1.004-.019-1.479-.004-1.029.103-1.91.535-2.473.161-.219.485-.49.855-.762.37-.274.782-.556 1.137-.866.569-.514.83-.995 1.295-1.289.413-.271 1.367-.86 2.215-1.413.425-.277.824-.545 1.128-.77.153-.113.28-.213.386-.31l.151-.159c.042-.07.123-.13.139-.375a.54.54 0 00-.235-.439l-.069.104.092-.085-.022-.018-.069.104.092-.085-.031-.05c-.07-.127-.159-.451-.208-.826a9.32 9.32 0 01-.078-1.225c0-.411.027-.798.071-1.05.021-.125.049-.218.059-.237l.001-.003-.215-.111.161.177.055-.066-.215-.111.161.177-.276-.304v.408a.416.416 0 00.276-.104l-.276-.304v.408-.403l-.23.331c.04.029.124.07.23.07v-.401l-.23.331.004.003-.005-.003.279-.41.285-.411a.602.602 0 00-.34-.109.6.6 0 00-.43.188c-.138.154-.172.277-.217.41-.112.389-.151.921-.153 1.521 0 .549.04 1.136.132 1.642.047.254.105.487.189.698.088.208.185.409.419.575h-.001l.263-.392h-.472a.485.485 0 00.21.393l.263-.392h-.472.38l-.308-.241c.001.014-.057.029-.072.241h.38l-.308-.241.02.015-.019-.016-.001.001.02.015-.019-.016a1.635 1.635 0 01-.175.153c-.347.275-1.051.741-1.739 1.181-.691.443-1.373.865-1.728 1.099-.698.47-.996 1.029-1.405 1.373-.288.253-.684.527-1.073.814-.39.291-.775.59-1.06.965-.664.897-.73 2.002-.735 3.074 0 .5.019 1 .019 1.479.001.683-.04 1.322-.201 1.848-.164.529-.421.94-.902 1.271-.363.251-.846.37-1.314.533-.233.085-.473.182-.692.377-.223.19-.379.522-.371.856.001.299.088.599.243.947.412.922.892 1.587 1.25 2.236.359.652.615 1.277.667 2.229.015.276.019.557.019.841 0 .473-.013.954-.013 1.442 0 .625.021 1.262.125 1.904.074.446.248.822.401 1.16.155.337.289.636.336.9l.002.014-.003-.014c.03.159.041.276.041.36-.005.169-.022.206-.098.354-.077.144-.229.366-.387.71-.492 1.075-.606 2.179-.606 3.248.001 1.042.106 2.062.105 3.031 0 .786-.067 1.533-.295 2.24l.476.153-.133-.482c-.772.215-1.443.489-2.151.616l-.571.104.188.55c.612 1.77 1.972 3.594 2.782 4.989.459.777.888 1.372 1.047 2.097.079.348.08.7.116 1.105.037.4.127.867.432 1.317.288.433.662.734 1.056.927.594.291 1.216.364 1.79.436.575.068 1.105.135 1.524.318.316.135.604.362.921.629.318.264.664.569 1.119.796.531.264.866.326.969.378l.144.105c.068.07.173.204.32.43.599.911.997 2.159 1.515 3.284l.101.218 8.228 2.025 3.528 3.397 9.96-4.791 42.571 22.612.275-3.297h5.54V37.775l-.003-.03c-.179-1.448.002-2.912-.458-4.394-.202-.64-.512-1.545-.77-2.476-.259-.926-.46-1.884-.458-2.559 0-.148.009-.281.027-.395.034-.276.308-.786.612-1.301.298-.529.632-1.063.714-1.667.024-.207.036-.397.036-.575.006-.799-.257-1.338-.465-1.729-.207-.404-.346-.648-.352-1.183 0-.19.021-.418.076-.699.004-.022.018-.06.112-.142.137-.121.415-.26.699-.462.142-.104.291-.229.414-.407.124-.176.209-.415.207-.666V19.064v.005c-.009-.404-.192-.695-.322-.906-.139-.214-.232-.37-.252-.475a1.454 1.454 0 00-.529-.83c-.38-.295-.843-.427-1.333-.508a10.103 10.103 0 00-1.537-.097c-.579 0-1.143.024-1.596.024-.167 0-.318-.003-.446-.011a.825.825 0 01-.38-.104c-.142-.077-.283-.236-.538-.437a1.802 1.802 0 00-1.146-.376c-.687 0-.873-.005-1.05-.018-.184-.013-.401-.038-1.087-.075l-.027.5.5-.018a.717.717 0 00-.136-.391c-.121-.165-.248-.247-.368-.326-.18-.112-.361-.201-.485-.278l-.124-.088-.007-.007-.118.106.147-.047-.029-.06-.118.106.147-.047v-.001l-.205.066h.214l-.009-.066-.205.066h.214-.27l.195.197c.011-.002.08-.105.075-.197h-.27l.195.197-.022-.022.021.024.002-.001-.022-.022.021.024c.008-.012.117-.071.255-.196a.905.905 0 00.29-.666c-.001-.4-.169-.733-.365-.994a3.11 3.11 0 00-.652-.628c-.557-.407-.894-.642-1.289-.823-.395-.179-.787-.28-1.455-.46l-.011-.003.011.003c-.877-.229-1.869-.661-2.965-.667a3.61 3.61 0 00-.311.013l-.19.008c-.277.003-.423-.063-.755-.072-.25-.004-.537.084-.813.26-.948.589-1.661.647-2.758.907-1.029.25-2.118.852-2.932 1.503-.26.209-.573.492-.884.767a11.26 11.26 0 01-.825.683l-.006.004.006-.004c-.288.208-.582.528-.869.888-.283.362-.537.736-.681 1.081-.367.9-.521 1.59-.521 2.17-.008.833.356 1.398.649 1.783.299.404.487.635.522 1.057.008.103.012.203.012.301-.001.801-.25 1.501-.653 2.167-.403.664-.964 1.282-1.555 1.873-.376.375-.731.637-1.125.81-.394.172-.837.264-1.413.265-.137 0-.281-.005-.433-.016-.398-.026-.857-.213-1.313-.486-.457-.271-.905-.619-1.31-.928-.863-.652-1.652-1.541-2.825-2.059-.468-.203-.926-.318-1.334-.442-.409-.124-.763-.254-1.05-.452-.354-.241-.807-.439-1.306-.625-1.487-.547-3.375-.929-3.388-.932l-.155-.032-.146.063a2.005 2.005 0 01-.815.163c-.467.001-.989-.135-1.526-.321-.538-.185-1.087-.416-1.64-.573-.466-.134-.783-.341-1.038-.611-.38-.403-.619-.985-.806-1.668-.188-.681-.323-1.447-.559-2.183-.109-.329-.1-.619-.184-.991a1.235 1.235 0 00-.307-.581 1.477 1.477 0 00-.667-.372c-.315-.089-.661-.114-1.035-.134-.556-.028-1.169-.034-1.658-.104a2.502 2.502 0 01-.598-.147c-.147-.062-.213-.125-.237-.167a2.494 2.494 0 00-.573-.667c-.306-.237-.604-.306-.796-.372a1.338 1.338 0 01-.562-.328c-.498-.452-1.11-.495-1.628-.516-.522-.011-1.014.002-1.245-.079l-.015-.005.016.005c-.117-.04-.142-.073-.297-.229a1.268 1.268 0 00-.86-.417 5.307 5.307 0 00-.4-.015c-1.4.008-2.953.48-4.262.473-.846-.003-1.534-.175-2.088-.702-.413-.385-.959-.603-1.488-.822-.526-.209-1.042-.413-1.297-.595l-.29.415z" />
    </svg>
  );
}

export default SvgLibya;
