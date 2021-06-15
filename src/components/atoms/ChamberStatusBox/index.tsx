import React from 'react';
import styled from 'styled-components';

export type ChamberStatusBoxProps = {
  chamber: 'HOUSE' | 'SENATE' | 'PRESIDENT';
  actionText: string;
  className?: string;
};

const ChamberStatusBox = ({
  chamber,
  actionText,
  className,
}: ChamberStatusBoxProps) => {
  return (
    <Wrapper className={className}>
      <h4 className="title">{chamber}</h4>
      <p>{actionText}</p>
    </Wrapper>
  );
};

export default ChamberStatusBox;

const Wrapper = styled.div`
  height: 100%;

  /* border: thin solid var(--color-gray300);
  border-radius: 10px; */

  padding-left: 2em;
  padding-right: 2em;

  display: grid;
  grid-template-areas:
    'title'
    'status';

  .title {
    height: fit-content;

    padding-top: 1em;
    margin: 0;

    grid-area: title;
    text-align: center;
  }
`;
