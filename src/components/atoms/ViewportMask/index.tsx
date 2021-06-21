import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

export type ViewportMaskProps = {
  children: React.ReactNode;
  onClickOutside?: EventListener | undefined;
  onEnterKeyPress?: EventListener | undefined;
  onEscapeKeyPress?: EventListener | undefined;
};

const ViewportMask = ({
  children,
  onClickOutside = () => {},
  onEnterKeyPress = () => {},
  onEscapeKeyPress = () => {},
}: ViewportMaskProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // Detect and emit clicks on mask
  const handleClickEvent: EventListener = (event) => {
    if (ref.current === (event.target as Node)) {
      onClickOutside(event);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickEvent);
    return () => {
      document.removeEventListener('click', handleClickEvent);
    };
  });

  // Detect and emit escape key presses
  const handleKeyPressEvent: EventListener = (event) => {
    if (event.key === 'Escape') {
      onEscapeKeyPress(event);
    }

    if (event.key === 'Enter') {
      onEnterKeyPress(event);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPressEvent);
    return () => {
      document.removeEventListener('keydown', handleKeyPressEvent);
    };
  });

  return <Mask ref={ref}>{children}</Mask>;
};

export default ViewportMask;

const Mask = styled.div`
  /* width: 100vw;
  height: 100vh; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  top: 0;
  left: 0;
  z-index: 2;

  background-color: rgba(0, 0, 0, 0.9);

  display: flex;
  justify-content: center;
  align-items: center;
`;
