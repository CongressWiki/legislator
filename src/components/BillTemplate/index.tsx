import React from 'react';
import Layout from '@components/Layouts/Common';
import type { Bill as BillData } from '@type/hasura';
import Stepper from '@components/ActionsStepper';
import SEO from '@components/Seo';
import BillComponent from '@components/Bill';

export type BillProps = {
  pageContext: {
    slug: string;
    bill: BillData;
  };
};

const Bill = ({ pageContext: { slug, bill } }: BillProps) => {
  let allBillSubjects = [bill.subject];
  if (bill.subjects) {
    allBillSubjects = [...allBillSubjects, ...bill.subjects];
  }

  return (
    <>
      <SEO
        pathname={slug}
        title={`${bill.type.toUpperCase()}${bill.number}`}
        description={truncate(bill.title, 200)}
        keywords={allBillSubjects}
        billSocialCard
      />
      <Layout>
        <BillComponent {...bill} />
        <Stepper actions={bill.actions} className="right-side" />
      </Layout>
    </>
  );
};

export default Bill;

function truncate(string: string, limit: number, useWordBoundary = true) {
  if (string.length <= limit) {
    return string;
  }
  const subString = string.substr(0, limit - 1); // the original check
  return (
    (useWordBoundary
      ? subString.substr(0, subString.lastIndexOf(' '))
      : subString) + '…'
  );
}
