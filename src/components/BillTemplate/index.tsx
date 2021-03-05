import React from 'react';
import Layout from '@components/Layouts/Common';
import type { Bill as BillData } from '@type/hasura';
import Stepper from '@components/ActionsStepper';
import SEO from '@components/Seo';
import BillComponent from '@components/Bill';

export type BillProps = {
  pageContext: BillData;
};

const Bill = ({ pageContext: bill }: BillProps) => {
  return (
    <Layout>
      <SEO title={`${bill.type.toUpperCase()}${bill.number}`} />
      <BillComponent {...bill} />
      <Stepper actions={bill.actions} className="right-side" />
    </Layout>
  );
};

export default Bill;
