import React from 'react';
import styled from 'styled-components';
import Layout from '@components/Layouts/Common';
import type { OfficialWithImage } from '@type/hasura';
import SEO from '@components/Seo';

export type ElectedOfficialTemplateProps = {
  pageContext: {
    slug: string;
    electedOfficial: OfficialWithImage;
  };
};

const ElectedOfficialTemplate = ({
  pageContext: { slug, electedOfficial },
}: ElectedOfficialTemplateProps) => {
  return (
    <>
      <SEO
        pathname={slug}
        title={electedOfficial.preferred_name}
        description={electedOfficial.preferred_name}
      />
      <Layout>
        <div>{electedOfficial.preferred_name}</div>
      </Layout>
    </>
  );
};

export default ElectedOfficialTemplate;
