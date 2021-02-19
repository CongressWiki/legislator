import React from 'react';
import Layout from '@components/Layouts/Common';
import type { Bill as BillData } from '../../types/hasura';
import Stepper from '@components/Stepper';
import SEO from '@components/Seo';
import BillComponent from '@components/Bill';

export type BillProps = {
  pageContext: BillData;
};

const Bill = ({ pageContext: bill }: BillProps) => {
  return (
    <Layout>
      <SEO title={`${bill.type.toUpperCase()}-${bill.number}`} />
      <BillComponent {...bill} />
      <Stepper steps={bill.actions.map((action) => action.text)} />
    </Layout>
  );
};

export default Bill;
