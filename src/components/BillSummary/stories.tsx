import React from 'react';
import {Story, Meta} from '@storybook/react';
import styled from 'styled-components';
import BillParagraph from '@components/BillParagraph';
import BillSummary, {BillSummaryProps} from './index';

export default {
  title: 'Components/BillSummary',
  component: BillSummary
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
      <h2>This component</h2>
      <Paper>
        <BillSummary {...args} />
      </Paper>
    </BoxWrapper>
  </TestBox>
);

export const Default = Template.bind({});
Default.args = {
  summary:
    'Directs the Secretary of the Interior, if the Secretary receives an offer from the city of Fernley, Nevada, to purchase identified federal land within the city, through the Bureau of Land Management (BLM) and the Bureau of Reclamation, to convey to the city all interest of the United States in such land in exchange for consideration in an amount equal to the fair market value of the land.\n\nPermits the city and the Bureau of Reclamation to retain easements or rights-of-way on the federal land to be conveyed, including easements or rights-of-way that are necessary to carry out the operation and maintenance of the Truckee Canal or the Newlands Project.\n\nRequires the city to pay or reimburse the Secretary, as appropriate, for reasonable transaction and administrative personnel costs associated with such conveyance.\n\nDeclares that any conveyances under this Act shall not be considered a major federal action for purposes of an environmental impact statement required by the National Environmental Policy Act of 1969 (NEPA).\n\nReleases the United States from all liabilities or claims of any kind or nature arising from the presence, release, or threat of release of any hazardous substance, pollutant, contaminant, petroleum product (or derivative of a petroleum product), solid waste, mine materials, or mining related features existing on the federal land.\n\nWithdraws the federal land from: (1) entry, appropriation, or disposal under the public land laws; (2) location, entry, and patent under the mining laws; and (3) disposition under the mineral leasing, mineral materials, and geothermal leasing laws.'
};

export const ShortWithList = Template.bind({});
ShortWithList.args = {
  summary:
    'Increases from: (1) $12,000 to $36,000 the maximum amount authorized to be provided by the Department of Veterans Affairs (VA) to certain disabled veterans for specially adapted features in a home; (2) $60,000 to $180,000 the total amount authorized to be provided per veteran for the construction of specially adapted housing; and (3) $11,000 to $33,000 the maximum amount authorized to be provided for the purchase of an automobile and adaptive automobile equipment.'
};

export const ShortWithNotAmendedParenthesis = Template.bind({});
ShortWithNotAmendedParenthesis.args = {
  summary:
    "(This measure has not been amended since it was introduced. The summary of that version is repeated here.)\n\nExpresses support for the goals and ideals of National Women's History Month.\n\nRecognizes and honors the women and organizations in the United States that have fought for and continue to promote the teaching of women's history."
};

export const WithActStatementIntro = Template.bind({});
WithActStatementIntro.args = {
  summary:
    "Veterans Retraining Act of 2009 - Authorizes the Secretary of Labor to pay to each covered veteran an assistance allowance for each month such veteran is enrolled in an employment and training program that teaches a skill in demand, as determined the Secretary. Limits such assistance to six months for each 10-year period.\n\nIncludes as a covered veteran one who is: (1) unemployed for at least four consecutive months before applying for such assistance; (2) able to successfully complete the program; and (3) ineligible for other veterans' education or training assistance.\n\nAuthorizes payment of a stipend to a covered veteran for moving expenses related to the receipt of such training.\n\nAuthorizes appropriations."
};

export const LongSummary = Template.bind({});
LongSummary.args = {
  summary:
    'Indian Community Economic Enhancement Act of 2017\n\n(Sec. 3) This bill amends the Native American Business Development, Trade Promotion, and Tourism Act of 2000 to establish duties for the Office of Native American Business Development (ONABD), including: (1) advising the Department of Commerce regarding the relationship between the United States and Indian tribes; and (2) serving as the point of contact for tribes, tribal organizations, and members of tribes regarding economic development and doing business in Indian lands.\n\nCommerce, Interior, and the Department of the Treasury must coordinate to support economic development in Native American communities.\n\n The Community Development Financial Institutions Fund assistance benefiting Native American community development financial institutions does not require matching funds.\n\nThe Government Accountability Office must conduct a study that assesses: (1) current programs and services that assist Native American communities with business and economic development; (2) assistance provided to Native Americans pursuant to loan, bond, and tax incentive programs; and (3) alternative incentives for tribal governments to invest in a Native American community development investment fund or bank.\n\n(Sec. 4) This bill amends the Buy Indian Act, including to require the Department of Health and Human Services (HHS) to use Native American labor and purchase Native American industry products, unless Interior or HHS determines it would be impracticable and unreasonable to do so.\n\n(Sec. 5) This bill amends the Native American Programs Act of 1974 to permit the Administration for Native Americans (ANA) to provide financial assistance to certain Native American community development financial institutions.\n\nUnder the economic opportunity program, ANA must give priority to applicants whose programs seek to develop: (1) tribal codes and court systems relating to economic development, (2) tribal business structures, (3) community development financial institutions, or (4) tribal master plans for community and economic development and infrastructure. When providing technical assistance, ANA must also prioritize those applicants.\n\nIn addition, the bill reauthorizes through FY2022 certain programs under the Act.'
};
