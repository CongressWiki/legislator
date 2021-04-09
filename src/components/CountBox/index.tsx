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
    /* font-family: century_supra_c3; */
    font-family: advocate_c43_mid;

    transition: all 0.3s;
    white-space: nowrap;

    text-underline-offset: 3px;

    text-decoration: ${(properties) =>
    properties.isActive ? 'underline' : 'unset'};
    color: ${(properties) =>
    properties.isActive ? 'var(--color-secondary)' : 'var(--color-text)'};
    cursor: ${(properties) => (properties.isActive ? 'pointer' : 'unset')};

    :hover {
      text-decoration: underline;
      color: var(--color-secondary);
      cursor: pointer;
    }
  }
`;
