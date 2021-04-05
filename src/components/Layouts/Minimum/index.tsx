import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header, { HeaderSpacer } from '@components/Header';

export type MinimumLayoutProps = {
  children: React.ReactNode;
};

const MinimumLayout = ({ children }: MinimumLayoutProps) => {
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
      {children}
    </>
  );
};

export default MinimumLayout;
