import * as React from 'react';

function SvgSudan(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="none"
        stroke="#000"
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M20.763 21.026l4.048-.39-.36-8.294 50.216.158c.05-.235.149-.301.3-.195.479.797 1.197 3.736.758 4.184 1.637 2.166 1.525 4.484 1.767 7.013.18 1.886.642 1.417 1.846 2.369.812.643 1.49 1.553 1.358 2.617 1.284-1.741 1.768 1.007.97 2.114-.491.097-1.332.328-1.971.258-.413 1.279-1.936 2.601-3.17 2.828-.229.695-.07 1.195.617 1.342.048 2.871-2.501 5.066-2.479 7.804.011 1.319.53 2.63.341 4-.135.98-.093 3.166-.408 3.833-.63 1.334-2.445.777-3.225 1.531-.711.688-.987 2.937-1.53 3.811-.08.13-.627-.105-.808.189-.173.281.058.699-.071 1.011-.305.737-.142 1.999-.496 2.595-.325.547-.947.34-1.433.823-.392.392-.538 1.235-.887 1.707 1.383.681.197 1.54-.146 2.363-.502 1.205-.551 2.167-.667 3.479-.251 2.848-.742 2.996-3.475 2.684.031.233-.071.548-.051.783-1.034-.176-2.459.489-1.478 1.524.484.511 1.836.332 2.491.463 1.821.365 1.234.519 1.882 2.029.432 1.006 1.289 1.515 1.667 2.514.122-.14.304-.279.427-.449 2.509.095 1.606 4.027 3.174 4.806.305 1.305-.658 2.023-1.122 3.113.064.056.26.118.304.154-1.294.161-4.95 3.669-4.846 5.179-1.126.266-2.066-.555-3.345-.312-1.16.221-2.216.991-3.447.521.14.887-.408 1.488-1.324 1.291.021-.299-.197-.874-.193-.999-.924 1.413-2.141-.642-3.12-.854-1.494-.323-1.208.715-1.58 2.032-2.069-.809-2.608-3.231-4.263-4.94-1.727-1.784-.982-.135-2.404.595-.665.342-2.435-.223-2.93-.624-1.934 1.609-4.541 1.149-5.378-1.685-.354-1.194.217-1.798-.659-2.828-.906-1.066-1.843-.695-2.2-2.324-1.996.916-1.783-2.325-2.755-3.229-.659-.612-2.974-1.141-3.849-1.479.019-.186-.029-.413-.005-.614 3.044-.802-1.591-3.103-2.524-3.653-.423-.25-1.151-.156-1.475-.525-.282-.321.217-1.147-.051-1.479-.769-.951-1.875-.51-2.142.413-.676-.769-1.26-.662-1.335-1.938-.06-1.005.708-1.762.344-3.009-.304-1.04-1.873-3.674-2.816-3.862.125-.83-.236-1.475-.199-2.138.073-1.295.653-.791-.169-1.657-.304-.32-.864-.243-1.166-.506-.397-.345-.099-.656-.312-1.012-.354-.589-.336-1.283-.996-1.613.925-.382 1.003-1.326.698-2.152-.614.539-.912 1.454-1.706 1.069-.991-.479-.335-1.279.024-1.953.542-1.019 2.422-2.662.163-3.204.096-1.205 2.217-.108 1.779-2.108-1.912-.383.591-1.57 1.025-1.862.874-.588 1.926-1.656 1.808-2.806-1.337-.597-.095-2.015.858-2.199 1.156-.225 1.615.757 2.333-.662l-.232-17.645z"
      />
    </svg>
  );
}

export default SvgSudan;