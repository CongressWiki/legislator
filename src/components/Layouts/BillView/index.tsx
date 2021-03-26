import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header, { HeaderSpacer } from '@components/Header';
import styled from 'styled-components';

export type BillViewLayoutProps = {
  children: React.ReactNode;
};

const BillViewLayout = ({ children }: BillViewLayoutProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title} />
      <HeaderSpacer />
      <Container>{children}</Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  // Prevent horizontal scroll bar from appearing when ribbons are sliding in
  overflow: hidden;
`;

export default BillViewLayout;