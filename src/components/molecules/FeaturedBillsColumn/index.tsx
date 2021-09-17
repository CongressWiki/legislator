import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import truncate from '@utils/truncate';

export type FeaturedBillsColumnProps = {
  className?: string;
  bills: Array<{
    id: string;
    bill_id: string;
    type: string;
    number: number;
    congress: string;
    short_title: string;
    title: string;
    status: string;
  }>;
};

const FeaturedBillsColumn = ({
  className,
  bills,
}: FeaturedBillsColumnProps) => {
  return (
    <Wrapper className={className}>
      <Title>Featured</Title>
      <Feed>
        {bills.map((feature) => (
          <Feature
            key={feature.id}
            title={createBillId(feature.type, feature.number)}
            detail={feature.short_title || feature.title}
            slug={`${feature.congress}/${feature.type}${feature.number}/`}
          />
        ))}
      </Feed>
    </Wrapper>
  );
};

export default FeaturedBillsColumn;

const createBillId = (type: string, number: number) =>
  `${type.toUpperCase()} ${number}`;

const Wrapper = styled.div`
  height: 500px;

  margin-top: 70px;
  margin-left: 32px;

  background-color: var(--color-background);

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

export type FeatureProps = {
  title: string;
  detail: string;
  slug: string;
  className?: string;
};

export const Feature = ({ title, detail, slug, className }: FeatureProps) => {
  return (
    <FeatureWrapper className={className}>
      <Link to={slug}>
        <FeatureTitle>{truncate(title, 80)}</FeatureTitle>
        <FeatureDetail>{detail}</FeatureDetail>
      </Link>
    </FeatureWrapper>
  );
};

const FeatureWrapper = styled.div`
  height: fit-content;
  width: 100%;

  padding: 8px 12px;

  border-top: solid 1px var(--color-text);

  :hover {
    background-color: var(--color-paper);
  }
`;

const FeatureTitle = styled.h3`
  margin: 0;

  font-size: 1rem;
  font-weight: bold;
`;

const FeatureDetail = styled.p`
  margin: 0;

  font-size: 0.9rem;
  color: var(--color-dimText);

  @media (max-width: 1400px) {
    display: none;
  }
`;
