import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';
import BillParagraph from '@components/BillParagraph';
import BillSummary, { BillSummaryProps } from './index';

export default {
  title: 'Components/BillSummary',
  component: BillSummary,
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
  border: thin solid black;
  padding: 30px;
  margin: 5px;
  text-align: left;
`;

const Template: Story<BillSummaryProps> = (args) => (
  <TestBox>
    <BoxWrapper>
      <h2>Original bill summary</h2>
      <Paper>
        <BillParagraph>{args.summary}</BillParagraph>
      </Paper>
    </BoxWrapper>
    <BoxWrapper>
      <h2>Modified</h2>
      <Paper>
        <BillSummary {...args} />
      </Paper>
    </BoxWrapper>
  </TestBox>
);

export const Default = Template.bind({});
Default.args = {
  summary:
    'Directs the Secretary of the Interior, if the Secretary receives an offer from the city of Fernley, Nevada, to purchase identified federal land within the city, through the Bureau of Land Management (BLM) and the Bureau of Reclamation, to convey to the city all interest of the United States in such land in exchange for consideration in an amount equal to the fair market value of the land.\n\nPermits the city and the Bureau of Reclamation to retain easements or rights-of-way on the federal land to be conveyed, including easements or rights-of-way that are necessary to carry out the operation and maintenance of the Truckee Canal or the Newlands Project.\n\nRequires the city to pay or reimburse the Secretary, as appropriate, for reasonable transaction and administrative personnel costs associated with such conveyance.\n\nDeclares that any conveyances under this Act shall not be considered a major federal action for purposes of an environmental impact statement required by the National Environmental Policy Act of 1969 (NEPA).\n\nReleases the United States from all liabilities or claims of any kind or nature arising from the presence, release, or threat of release of any hazardous substance, pollutant, contaminant, petroleum product (or derivative of a petroleum product), solid waste, mine materials, or mining related features existing on the federal land.\n\nWithdraws the federal land from: (1) entry, appropriation, or disposal under the public land laws; (2) location, entry, and patent under the mining laws; and (3) disposition under the mineral leasing, mineral materials, and geothermal leasing laws.',
};
