// import React from 'react';
// import { Story, Meta } from '@storybook/react';

// import Bill, { BillProps } from '.';

// export default {
//   title: 'Templates/Bill',
//   component: Bill,
// } as Meta;

// const Template: Story<BillProps> = (args) => <Bill {...args} />;

// export const withBillSummary = Template.bind({});
// withBillSummary.args = {
//   pageContext: {
//     id: 'hr1170-113',
//     number: '1170',
//     title:
//       'To direct the Secretary of the Interior, acting through the Bureau of Land Management and the Bureau of Reclamation, to convey, by quitclaim deed, to the City of Fernley, Nevada, all right, title, and interest of the United States, to any Federal land within that city that is under the jurisdiction of either of those agencies.',
//     subject: 'Public lands and natural resources',
//     summary:
//       'Directs the Secretary of the Interior, if the Secretary receives an offer from the city of Fernley, Nevada, to purchase identified federal land within the city, through the Bureau of Land Management (BLM) and the Bureau of Reclamation, to convey to the city all interest of the United States in such land in exchange for consideration in an amount equal to the fair market value of the land.\n\nPermits the city and the Bureau of Reclamation to retain easements or rights-of-way on the federal land to be conveyed, including easements or rights-of-way that are necessary to carry out the operation and maintenance of the Truckee Canal or the Newlands Project.\n\nRequires the city to pay or reimburse the Secretary, as appropriate, for reasonable transaction and administrative personnel costs associated with such conveyance.\n\nDeclares that any conveyances under this Act shall not be considered a major federal action for purposes of an environmental impact statement required by the National Environmental Policy Act of 1969 (NEPA).\n\nReleases the United States from all liabilities or claims of any kind or nature arising from the presence, release, or threat of release of any hazardous substance, pollutant, contaminant, petroleum product (or derivative of a petroleum product), solid waste, mine materials, or mining related features existing on the federal land.\n\nWithdraws the federal land from: (1) entry, appropriation, or disposal under the public land laws; (2) location, entry, and patent under the mining laws; and (3) disposition under the mineral leasing, mineral materials, and geothermal leasing laws.',
//     sponsor: 'A000369',
//     congress: '113',
//     actions: [
//       {
//         text: 'Introduced in House',
//         type: 'action',
//         acted_at: '2013-03-14',
//         references: [],
//         action_code: 'Intro-H',
//       },
//       {
//         text: 'Referred to the House Committee on Natural Resources.',
//         type: 'referral',
//         status: 'REFERRED',
//         acted_at: '2013-03-14',
//         committees: ['HSII'],
//         references: [],
//         action_code: 'H11100',
//       },
//       {
//         text:
//           'Referred to the Subcommittee on Public Lands and Environmental Regulation.',
//         type: 'referral',
//         acted_at: '2013-03-26',
//         committees: ['HSII'],
//         references: [],
//         action_code: '',
//       },
//       {
//         text: 'Subcommittee Hearings Held.',
//         type: 'action',
//         acted_at: '2013-07-19',
//         committees: ['HSII'],
//         references: [],
//         action_code: '',
//       },
//       {
//         text:
//           'Subcommittee on Public Lands and Environmental Regulation Discharged.',
//         type: 'action',
//         acted_at: '2013-07-31',
//         committees: ['HSII'],
//         references: [],
//         action_code: '',
//       },
//       {
//         text: 'Committee Consideration and Mark-up Session Held.',
//         type: 'action',
//         acted_at: '2013-07-31',
//         committees: ['HSII'],
//         references: [],
//         action_code: '',
//       },
//       {
//         text: 'Ordered to be Reported (Amended) by Voice Vote.',
//         type: 'calendar',
//         status: 'REPORTED',
//         acted_at: '2013-07-31',
//         committees: ['HSII'],
//         references: [],
//         action_code: '',
//       },
//       {
//         text:
//           'Reported (Amended) by the Committee on Natural Resources. H. Rept. 113-297.',
//         type: 'action',
//         acted_at: '2013-12-16',
//         committees: ['HSII'],
//         references: [],
//         action_code: 'H12200',
//       },
//       {
//         text: 'Placed on the Union Calendar, Calendar No. 215.',
//         type: 'calendar',
//         under: null,
//         number: '215',
//         acted_at: '2013-12-16',
//         calendar: 'Union',
//         references: [],
//         action_code: 'H12410',
//       },
//     ],
//     status: 'REPORTED',
//     status_at: '2013-07-31T00:00:00+00:00',
//     type: 'hr',
//     introduced_at: '2013-03-14T00:00:00+00:00',
//     updated_at: '2021-02-01T22:36:36+00:00',
//     created_at: '2021-02-12T01:36:31.410127+00:00',
//     by_request: false,
//     bill_text: null,
//   },
// };

// export const WithBillText = Template.bind({});
// WithBillText.args = {
//   pageContext: {
//     id: 'hr418-117',
//     number: '418',
//     title:
//       'To sunset new Federal regulatory rules after 3 years, and for other purposes.',
//     subject: 'No Subject',
//     summary: 'No summary available.',
//     sponsor: 'P000599',
//     congress: '117',
//     actions: [
//       {
//         text: 'Introduced in House',
//         type: 'action',
//         acted_at: '2021-01-21',
//         references: [],
//         action_code: 'Intro-H',
//       },
//       {
//         text:
//           'Referred to the Committee on Oversight and Reform, and in addition to the Committee on the Judiciary, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.',
//         type: 'referral',
//         status: 'REFERRED',
//         acted_at: '2021-01-21',
//         committees: ['HSGO'],
//         references: [],
//         action_code: 'H11100',
//       },
//       {
//         text:
//           'Referred to the Committee on Oversight and Reform, and in addition to the Committee on the Judiciary, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.',
//         type: 'referral',
//         acted_at: '2021-01-21',
//         committees: ['HSJU'],
//         references: [],
//         action_code: 'H11100',
//       },
//     ],
//     status: 'REFERRED',
//     status_at: '2021-01-21T00:00:00+00:00',
//     type: 'hr',
//     introduced_at: '2021-01-21T00:00:00+00:00',
//     updated_at: '2021-02-15T08:00:15+00:00',
//     created_at: '2021-02-10T13:38:01.93045+00:00',
//     by_request: false,
//     bill_text:
//       "\n[Congressional Bills 103th Congress]\n[From the U.S. Government Printing Office]\n[S. 1168 Introduced in Senate (IS)]\n\n103d CONGRESS\n  1st Session\n                                S. 1168\n\n  To amend the Internal Revenue Code of 1986 to provide that certain \n   deductions of school bus drivers shall be allowable in computing \n                         adjusted gross income.\n\n\n_______________________________________________________________________\n\n\n                   IN THE SENATE OF THE UNITED STATES\n\n                June 29 (legislative day, June 22), 1993\n\n Mr. Johnston introduced the following bill; which was read twice and \n                  referred to the Committee on Finance\n\n_______________________________________________________________________\n\n                                 A BILL\n\n\n \n  To amend the Internal Revenue Code of 1986 to provide that certain \n   deductions of school bus drivers shall be allowable in computing \n                         adjusted gross income.\n\n    Be it enacted by the Senate and House of Representatives of the \nUnited States of America in Congress assembled,\n\nSECTION 1. DEDUCTIONS OF SCHOOL BUS DRIVERS ALLOWABLE IN COMPUTING \n              ADJUSTED GROSS INCOME.\n\n    (a) In General.--Paragraph (2) of section 62(a) of the Internal \nRevenue Code of 1986 (relating to certain trade and business deductions \nof employees) is amended by adding at the end thereof the following new \nsubparagraph:\n                    ``(C) Certain expenses of school bus drivers.--The \n                deductions allowed by part VI (section 161 and \n                following) which consist of expenses paid or incurred \n                by the taxpayer in connection with the performance by \n                the taxpayer of services as an employee while driving a \n                school bus (as defined in section 4221(d)(7)(C)).''\n    (b) Effective Date.--The amendments made by this section shall \napply to taxable years beginning after December 31, 1992.\n\n                                 <all>\n",
//   },
// };
