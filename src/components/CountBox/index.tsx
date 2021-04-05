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
    transition: all 0.3s;

    text-underline-offset: 3px;

    text-decoration: ${(props) => (props.isActive ? 'underline' : 'unset')};
    color: ${(props) =>
      props.isActive ? 'var(--color-secondary)' : 'var(--color-text)'};
    cursor: ${(props) => (props.isActive ? 'pointer' : 'unset')};

    :hover {
      text-decoration: underline;
      color: var(--color-secondary);
      cursor: pointer;
    }
  }
`;
