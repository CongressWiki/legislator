import React from 'react';
import Layout from '@components/Layout';
import type { Bill as BillData } from '../../types/hasura';
import Stepper from '@components/Stepper';
import SEO from '@components/Seo';
import BillComponent from '@components/Bill';

export type BillProps = {
  pageContext: BillData;
};

const Bill = ({ pageContext: bill }: BillProps) => {
  console.log(JSON.stringify(bill));
  return (
    <Layout>
      <SEO title={bill.id} />
      <BillComponent {...bill} />
      <Stepper steps={bill.actions.map((action) => action.text)} />
    </Layout>
  );
};

export default Bill;
