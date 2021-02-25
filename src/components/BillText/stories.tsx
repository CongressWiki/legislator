import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';
import BillParagraph from '@components/BillParagraph';

import BillText, { BillTextProps } from './index';

export default {
  title: 'Components/BillText',
  component: BillText,
} as Meta;

const TestBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
`;

const Paper = styled.div`
  display: flex;
  flex-direction: column;
  border: thin solid var(--color-text);
  padding: 30px;
  margin: 5px;
  word-break: break-all;
  text-align: left;
`;

const Template: Story<BillTextProps> = (args) => (
  <TestBox>
    <BoxWrapper>
      <h2>Original bill text</h2>
      <Paper>
        <BillParagraph>{args.billText}</BillParagraph>
      </Paper>
    </BoxWrapper>
    <BoxWrapper>
      <h2>This component</h2>
      <Paper>
        <BillText {...args} />
      </Paper>
    </BoxWrapper>
  </TestBox>
);

export const Default = Template.bind({});
Default.args = {
  billTitle:
    'To sunset new Federal regulatory rules after 3 years, and for other purposes.',
  billText:
    "\n[Congressional Bills 103th Congress]\n[From the U.S. Government Printing Office]\n[S. 1168 Introduced in Senate (IS)]\n\n103d CONGRESS\n  1st Session\n                                S. 1168\n\n  To amend the Internal Revenue Code of 1986 to provide that certain \n   deductions of school bus drivers shall be allowable in computing \n                         adjusted gross income.\n\n\n_______________________________________________________________________\n\n\n                   IN THE SENATE OF THE UNITED STATES\n\n                June 29 (legislative day, June 22), 1993\n\n Mr. Johnston introduced the following bill; which was read twice and \n                  referred to the Committee on Finance\n\n_______________________________________________________________________\n\n                                 A BILL\n\n\n \n  To amend the Internal Revenue Code of 1986 to provide that certain \n   deductions of school bus drivers shall be allowable in computing \n                         adjusted gross income.\n\n    Be it enacted by the Senate and House of Representatives of the \nUnited States of America in Congress assembled,\n\nSECTION 1. DEDUCTIONS OF SCHOOL BUS DRIVERS ALLOWABLE IN COMPUTING \n              ADJUSTED GROSS INCOME.\n\n    (a) In General.--Paragraph (2) of section 62(a) of the Internal \nRevenue Code of 1986 (relating to certain trade and business deductions \nof employees) is amended by adding at the end thereof the following new \nsubparagraph:\n                    ``(C) Certain expenses of school bus drivers.--The \n                deductions allowed by part VI (section 161 and \n                following) which consist of expenses paid or incurred \n                by the taxpayer in connection with the performance by \n                the taxpayer of services as an employee while driving a \n                school bus (as defined in section 4221(d)(7)(C)).''\n    (b) Effective Date.--The amendments made by this section shall \napply to taxable years beginning after December 31, 1992.\n\n                                 <all>\n",
};

export const LongBudgetaryBill = Template.bind({});
LongBudgetaryBill.args = {
  billText: ``,
};
