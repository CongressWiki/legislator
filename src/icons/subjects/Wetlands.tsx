import * as React from 'react';

function SvgWetlands(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M84.47 76.06c-1.34-.979-3.13-2.29-6.35-2.43-.17-.01-.36-.01-.57-.01-.18 0-.38 0-.56.01-3.2.14-5.03 1.45-6.36 2.43-1.02.721-1.64 1.16-2.86 1.28-.18.01-.369.01-.569.01-.19 0-.391 0-.55-.01-1.221-.12-1.851-.56-2.86-1.28-1.35-.979-3.16-2.29-6.37-2.43-.189-.01-.37-.01-.58-.01-.189 0-.37 0-.55.01-3.2.14-5.021 1.45-6.37 2.43-1.01.721-1.64 1.16-2.86 1.28-.16.01-.36.01-.55.01-.21 0-.39 0-.57-.01-1.22-.12-1.84-.56-2.86-1.28-1.34-.979-3.16-2.29-6.36-2.43-.18-.01-.39-.01-.57-.01-.19 0-.39 0-.57.01-3.2.14-5.01 1.45-6.36 2.43-1 .721-1.64 1.16-2.86 1.28-.18.01-.36.01-.57.01-.19 0-.39 0-.55-.01-1.22-.12-1.85-.56-2.86-1.28-1.35-.979-3.15-2.29-6.36-2.43-.14-.01-.28-.01-4.32-.01 2.12 3.45 4.7 6.58 7.65 9.32.63.14 1.31.229 2.06.26.21.03.42.03.63.03s.44 0 .64-.03c3.59-.15 5.63-1.61 7.15-2.7 1.13-.81 1.82-1.32 3.18-1.44.21-.01.43-.01.65-.01.21 0 .44 0 .64.01 1.36.12 2.05.631 3.18 1.44 1.52 1.09 3.56 2.55 7.15 2.7.2.03.41.03.64.03.21 0 .41 0 .62-.03 3.6-.15 5.629-1.61 7.15-2.7 1.13-.81 1.84-1.32 3.2-1.44.18-.01.41-.01.62-.01.239 0 .439 0 .64.01 1.37.12 2.08.631 3.21 1.44 1.521 1.09 3.55 2.55 7.15 2.7.199.03.399.03.62.03.22 0 .439 0 .64-.03 3.59-.15 5.63-1.61 7.13-2.7 1.14-.81 1.83-1.32 3.2-1.44.2-.01.399-.01.64-.01s.44 0 .641.01c1.149.101 1.819.48 2.689 1.08.91-1.01 1.771-2.06 2.59-3.14-.501-.22-.951-.53-1.541-.94zM68.48 89.96c-3.98 0-6.171-1.56-7.771-2.72-1.29-.92-2.02-1.46-3.85-1.46-1.79 0-2.53.54-3.82 1.46-1.61 1.149-3.79 2.72-7.77 2.72-3.99 0-6.19-1.56-7.79-2.72-1.3-.92-2.01-1.46-3.83-1.46-1.81 0-2.53.54-3.82 1.46-.71.51-1.53 1.1-2.58 1.59A44.776 44.776 0 0050 95c7.68 0 14.91-1.93 21.24-5.32-.81.18-1.72.28-2.76.28zM41.23 63.31c.16.57.3 2.45.41 4.301h-2.2c-.04-1.58-.03-3.15.18-3.761.47-1.42.4-2.76.26-3.51-.13-.74.68-6.74 1.02-7.55l.33-.8.27 1.34s.14 5.26-.13 6.2c-.27.95-.47 2.57-.14 3.78z" />
      <path d="M95 50c0 7.58-1.88 14.72-5.19 20.99l-.01.01c-.5.22-1.06.34-1.88.34-1.62 0-2.26-.47-3.439-1.3-1.41-1.04-3.351-2.43-6.921-2.43-3.56 0-5.52 1.39-6.93 2.43-1.17.83-1.8 1.3-3.43 1.3-1.61 0-2.25-.47-3.41-1.3-1.43-1.04-3.38-2.43-6.95-2.43h-1.07c.061-.38.12-.771.16-1.181.08-.43.17-.88.25-1.33.09-.43.221-.83.33-1.25.08-.199.16-.399.24-.59.09-.22.17-.43.26-.64.181-.41.29-.87.46-1.2.181-.34.311-.689.46-1.01.12-.32.24-.63.38-.88.12-.271.24-.5.32-.71.16-.34.26-.57.28-.62-.021.01-.07.04-.15.08-.109.05-.27.13-.45.26-.35.27-.89.62-1.399 1.2-.25.29-.561.59-.84.95-.29.35-.49.71-.73 1.109-.12.19-.24.391-.359.59-.061.101-.12.2-.171.311l-.09.149-.04.08-.02.04-.04.08-.01.03c-.181.479-.391.979-.54 1.479-.13.5-.25 1-.351 1.49-.09.49-.16.97-.22 1.44 0 .04-.01.08-.01.12h-1.61c.061-.601.13-1.23.2-1.88.09-.62.18-1.261.27-1.9.12-.63.24-1.28.36-1.92.16-.62.37-1.21.53-1.82.21-.54.49-1.229.729-1.78.271-.54.511-1.06.78-1.56s.48-1 .73-1.44l1.09-2.21c.26-.56.41-.89.41-.89V52.2s-.341.149-.86.5c-.53.35-1.21.93-1.93 1.72-.36.39-.71.86-1.07 1.35-.36.5-.66 1.091-1.01 1.681-.32.6-.58 1.13-.91 1.81-.25.681-.51 1.38-.72 2.08-.15.7-.34 1.391-.47 2.08-.11.69-.21 1.37-.3 2.021-.08.76-.15 1.489-.2 2.17h-1.57c.061-.612.091-1.282.171-1.972.09-.79.18-1.63.27-2.489.12-.851.25-1.73.38-2.631.17-.869.35-1.77.53-2.659.22-.86.5-1.7.74-2.551.35-.829.7-1.649 1.041-2.449.37-.75.71-1.49 1.069-2.19.38-.69.7-1.37 1.051-1.97a77.74 77.74 0 011.699-2.92c.431-.71.69-1.11.69-1.11s-.41.25-1.05.79c-.641.55-1.521 1.36-2.44 2.48-.49.53-.93 1.18-1.42 1.85-.49.66-.9 1.46-1.39 2.24-.43.81-.77 1.58-1.21 2.489-.31.921-.68 1.851-.95 2.79-.21.94-.44 1.891-.63 2.82-.14.94-.27 1.86-.4 2.75-.19 1.73-.32 3.34-.37 4.73h-2.94c-.07-1.87-.09-3.761.07-4.23.34-1.01.2-2.29-.13-3.24-.34-.939-.21-3.3-.07-5.8.13-2.49 1.55-7.82 1.55-7.82s4.25-5.39 6.34-6.6c2.09-1.22 7.75-5.87 6.13-12.41s-4.45-5.66-6-6.13c-1.55-.47-1.42-3.17 0-3.37 1.42-.2 5.39-.47 5.39-.47s1.28.74 5.261 1.21c3.979.47 5.39.14 5.39.14s-2.69-1.69-5.52-2.36c-2.841-.68-5.4-1.76-5.4-1.76s-3.17-2.49-5.73-1.48c-2.56 1.01-4.71 2.9-4.18 6.4.54 3.51 2.57 5.46 4.59 5.8 2.02.34 3.03 1.22 2.629 3.98-.34 2.33-1.96 2.83-2.629 2.56-.68-.27-2.9-2.9-5.19-2.97-2.3-.06-4.18.61-9.3 6.34-5.13 5.73-7.89 10.59-9.38 13.75-1.48 3.17-3.23 9.37-3.3 11.39-.07 2.03.95 1.69 1.75.479.81-1.22 2.97-4.649 4.59-5.67 1.62-1.01 9.57-5.52 9.57-5.52s.67 1.479.47 3.43c-.2 1.96-.67 5.2-1.14 6.41-.48 1.21-.61 2.97-.34 4.65.11.66.18 1.949.24 3.29h-2.8c-.06-.37-.12-.74-.18-1.12-.09-.46-.22-.931-.33-1.391-.14-.47-.32-.949-.5-1.409l-.05-.11-.02-.03-.04-.08-.08-.14-.16-.28c-.11-.189-.21-.38-.32-.56-.22-.37-.37-.721-.64-1.061-.26-.33-.52-.64-.78-.899-.51-.54-1.04-.851-1.41-1.061-.38-.2-.63-.26-.63-.26h-.01s.07.26.19.66c.06.2.14.43.24.689.11.25.21.53.31.83.11.301.25.61.41.91.16.311.31.72.48 1.101l.47 1.119c.09.391.22.75.31 1.15.08.41.15.82.22 1.22.03.24.07.48.1.721h-1.41c-.03-.13-.06-.271-.1-.4-.12-.34-.26-.68-.39-1.01l-.051-.098-.01-.02-.03-.05-.06-.101-.12-.199c-.08-.131-.17-.261-.25-.381-.17-.26-.32-.479-.53-.71-.2-.229-.43-.43-.62-.609-.38-.37-.77-.57-1.03-.721-.13-.069-.26-.109-.33-.14-.08-.03-.12-.04-.12-.04s.04.17.13.46c.07.29.23.67.34 1.11.07.21.13.45.23.67.09.22.15.53.25.8.05.14.11.29.16.43l.08.221.05.1.01.05c.04.21.1.42.14.641H8.58A44.77 44.77 0 015 50C5 25.15 25.15 5 50 5s45 20.15 45 45z" />
    </svg>
  );
}

export default SvgWetlands;