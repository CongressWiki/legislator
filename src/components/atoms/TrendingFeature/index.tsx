import React from 'react';
import styled from 'styled-components';

export type TrendingFeatureProps = {
  title: string;
  detail: string;
  className?: string;
};

const TrendingFeature = ({
  title,
  detail,
  className,
}: TrendingFeatureProps) => {
  return (
    <Wrapper className={className}>
      <Title>{title}</Title>
      <Detail>{detail}</Detail>
    </Wrapper>
  );
};

export default TrendingFeature;

const Wrapper = styled.div`
  height: fit-content;
  width: 100%;

  padding: 8px 12px;

  border-top: solid 1px var(--color-text);
  border-bottom: solid 1px var(--color-text);
`;

const Title = styled.h3`
  margin: 0;

  font-size: 1rem;
  font-weight: bold;
`;

const Detail = styled.p`
  margin: 0;

  font-size: 0.8rem;
  color: var(--color-dimText);
`;
