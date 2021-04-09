// Import React from 'react';
// import { Story, Meta } from '@storybook/react';
// import styled from 'styled-components';
// import BillCard, { BillCardProps } from '@components/BillCard';

// import HomeLayout, { HomeLayoutProps } from './index';

// export default {
//   title: 'Components/Layouts/Home',
//   component: HomeLayout,
// } as Meta;

// const ExampleBillWrapper = styled.div`
//   width: 100%;
// `;

// const ExampleBill = styled(BillCard)`
//   max-width: none;
//   width: 100%;
//   margin: 0;
//   padding-bottom: 0.8rem;

//   border: 0;
//   border-radius: 0;
//   border-bottom: solid thin var(--color-gray300);

//   :hover {
//     background-color: hsl(229deg, 88%, 16%);
//   }
// `;

// const ExampleBillProps: BillCardProps = {
//   id: 'hr-2154',
//   number: '2154',
//   title:
//     'To direct the Secretary of the Interior, acting through the Bureau of Land Management and the Bureau of Reclamation, to convey, by quitclaim deed, to the City of Fernley, Nevada, all right, title, and interest of the United States, to any Federal land within that city that is under the jurisdiction of either of those agencies.',
//   subject: 'Racial Justice',
//   type: 'hr',
//   sponsor: 'A12345678',
//   updated_at: '2020-09-30T05:52:20+00:00',
// };

// const BillLane = styled.div`
//   width: 100%;
//   height: 200vh;

//   display: grid;

//   grid-template-columns: 1fr;

//   justify-content: start;
//   justify-items: center;
//   align-items: start;
//   align-content: start;
//   padding-top: 8px;

//   box-shadow: 0.2rem;
//   border-radius: 10px;
//   border: solid thin var(--color-gray300);
//   background-color: hsl(229deg, 78%, 16%);
// `;

// const HouseBillLane = styled(BillLane)`
//   /* background-color: rgba(0, 255, 42, 0.133); */
// `;

// const SenateBillLane = styled(BillLane)`
//   /* background-color: rgba(93, 0, 255, 0.133); */
// `;

// const FeaturedBillLane = styled(BillLane)`
//   justify-self: center;
//   grid-template-columns: 1fr;

//   background-color: var(--color-background);

//   border: 0;
//   border-top: none;
//   border-radius: 0;
//   border-left: solid thin var(--color-gray300);
//   border-right: solid thin var(--color-gray300);
// `;

// const LaneTitleWrapper = styled.div`
//   width: 100%;
// `;

// const LaneTitle = styled.h3`
//   font-family: advocate_c43_mid;
//   color: var(--color-secondary);
// `;

// const CapitalCanvas = styled.div`
//   width: 100%;
// `;

// const Template: Story<HomeLayoutProps> = (args) => (
//   <HomeLayout>
//     {/* <CapitalCanvas className="capital">
//       <Capital />
//     </CapitalCanvas> */}
//     <LaneTitleWrapper className="house-header">
//       <LaneTitle>House Chamber</LaneTitle>
//     </LaneTitleWrapper>
//     <HouseBillLane className="house">
//       <ExampleBill {...ExampleBillProps} />
//       <ExampleBill {...ExampleBillProps} />
//       <ExampleBill {...ExampleBillProps} />
//       <ExampleBill {...ExampleBillProps} />
//     </HouseBillLane>
//     <FeaturedBillLane className="resolved">
//       <ExampleBill {...ExampleBillProps} />
//       <ExampleBill {...ExampleBillProps} />
//       <ExampleBill {...ExampleBillProps} />
//       <ExampleBill {...ExampleBillProps} />
//     </FeaturedBillLane>
//     <LaneTitleWrapper className="senate-header">
//       <LaneTitle>Senate Chamber</LaneTitle>
//     </LaneTitleWrapper>
//     <SenateBillLane className="senate">
//       <ExampleBill {...ExampleBillProps} />
//       <ExampleBill {...ExampleBillProps} />
//       <ExampleBill {...ExampleBillProps} />
//       <ExampleBill {...ExampleBillProps} />
//     </SenateBillLane>
//   </HomeLayout>
// );

// export const Default = Template.bind({});
