import React, { useState } from 'react';
import type { Bill as BillType } from '@type/hasura';
import Seo from '@components/App/Seo';
import BillTitle from '@components/atoms/BillTitle';
import ActionsStepper from '@components/molecules/ActionsStepper';
import HorizontalDropdown from '@components/atoms/HorizontalDropdown';
import styled from 'styled-components';
import Header, { HeaderSpacer } from '@components/organisms/Header';
import BillSummary from '@components/molecules/BillSummary';
import BillText from '@components/molecules/BillText';
import BillStatus from '@components/molecules/BillStatus';

export type BillTemplateProps = {
  pageContext: {
    slug: string;
    bill: BillType;
  };
};

const BillTemplate = ({ pageContext: { slug, bill } }: BillTemplateProps) => {
  const [option, setOption] = useState('Summary');
  const billSubjects = [bill.subject, ...(bill.subjects ?? [''])];
  const billActionsDesc = bill.actions.sort(
    // @ts-expect-error TS doesn't know squat. Dates work just fine here!
    (a, b) => new Date(b.acted_at) - new Date(a.acted_at)
  );

  console.log({ bill });
  console.log(`Original Chamber = ${bill.actions[0].chamber}`);
  console.log(
    `Active Chamber = ${bill.actions[bill.actions.length - 1].chamber}`
  );

  const menuOptions = ['Summary', 'Text', 'History'];
  const handleSelect = (option: string) => setOption(option);

  return (
    <>
      <Seo
        billSocialCard
        pathname={slug}
        title={`${bill.type.toUpperCase()}${bill.number}`}
        description={bill.title}
        keywords={billSubjects}
      />

      <Header />
      <HeaderSpacer />

      <Layout>
        <BillTitle title={bill.title} className="title" />

        <BillStatus bill={bill} className="status" />

        <HorizontalDropdown
          options={menuOptions}
          className="menu"
          onOptionSelect={handleSelect}
        />

        <MainComponent
          option={option}
          bill={{ ...bill, actions: billActionsDesc }}
          className="mainContent"
        />
      </Layout>
    </>
  );
};

export default BillTemplate;

const Layout = styled.div`
  position: relative;

  width: 100%;

  margin-top: 2rem;
  margin-bottom: 30vh;

  display: grid;
  justify-content: center;
  grid-auto-columns: min(70ch, calc(100% - 64px));
  grid-template-rows: auto 100px 100px auto;
  grid-template-areas:
    'title'
    'status'
    'menu'
    'mainContent';

  .title {
    grid-area: title;
  }

  .status {
    grid-area: status;
    justify-self: center;
  }

  .menu {
    grid-area: menu;
    justify-self: center;
    font-size: 1.4em;
    padding: 2em;
  }

  .mainContent {
    grid-area: mainContent;
  }
`;

const MainComponent = ({
  option,
  bill,
  className,
}: {
  option: string;
  bill: BillType;
  className: string;
}) => {
  if (option === 'History') {
    return <ActionsStepper actions={bill.actions} className={className} />;
  }

  if (option === 'Summary') {
    return <BillSummary summary={bill.summary} className={className} />;
  }

  if (option === 'Text') {
    return <BillText billText={bill.summary} className={className} />;
  }

  return null;
};
