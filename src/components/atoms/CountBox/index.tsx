import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

export type CountBoxProps = {
  title: string;
  count: number;
  isActive: boolean;
  onMouseOver?: MouseEventHandler<HTMLDivElement>;
  onMouseOut?: MouseEventHandler<HTMLDivElement>;
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: string;
};

const CountBox = ({
  title,
  count,
  isActive,
  onMouseOver,
  onMouseOut,
  onClick,
  className,
}: CountBoxProps) => {
  return (
    <Wrapper
      className={className}
      isActive={isActive}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={onClick}
    >
      <p>
        {title}: {count}
      </p>
    </Wrapper>
  );
};

export default CountBox;

const Wrapper = styled.div<{ isActive: boolean }>`
  p {
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
    font-family: advocate_c43_mid;

    white-space: nowrap;

    text-underline-offset: 3px;

    text-decoration: ${(properties) =>
      properties.isActive ? 'underline' : 'unset'};
    color: ${(properties) =>
      properties.isActive ? 'var(--color-text)' : 'var(--color-dimText)'};
    cursor: ${(properties) => (properties.isActive ? 'pointer' : 'unset')};

    :hover {
      color: var(--color-text);
      cursor: pointer;
    }
  }
`;
