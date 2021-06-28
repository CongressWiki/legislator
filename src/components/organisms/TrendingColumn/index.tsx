import React from 'react';
import styled from 'styled-components';
import TrendingFeature from '@components/atoms/TrendingFeature';

export type TrendingColumnProps = {
  className?: string;
};

const TrendingColumn = ({ className }: TrendingColumnProps) => {
  const features = [{ title: 'HR-1', detail: 'For The People Act' }];

  return (
    <Wrapper className={className}>
      <Title>Trending</Title>
      <Feed>
        {features.map((feature) => (
          <TrendingFeature
            key={feature.title}
            title={feature.title}
            detail={feature.detail}
          />
        ))}
      </Feed>
    </Wrapper>
  );
};

export default TrendingColumn;

const Wrapper = styled.div`
  position: relative;

  height: 500px;
  width: 270px;

  margin-top: 70px;
  margin-left: 32px;

  background-color: var(--color-background);
  /* background-color: hsl(215, 51%, 14%); */
  /* background-color: var(--color-ribbon); */

  border-radius: 5%;

  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 0;
  padding: 8px 12px;

  font-family: advocate_c43_mid;
  font-weight: bold;
`;

const Feed = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
`;
