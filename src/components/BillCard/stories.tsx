// Import React from 'react';
// import { Story, Meta } from '@storybook/react';
// import BillCard, { BillCardProps as BillCardProperties } from './index';

// export default {
//   title: 'Components/BillCard',
//   component: BillCard,
// } as Meta;

// const Template: Story<BillCardProperties> = (arguments_) => (
//   <BillCard {...arguments_} />
// );

// export const Default = Template.bind({});
// Default.args = {
//   id: 'hr1170-113',
//   number: '1170',
//   title:
//     'To direct the Secretary of the Interior, acting through the Bureau of Land Management and the Bureau of Reclamation, to convey, by quitclaim deed, to the City of Fernley, Nevada, all right, title, and interest of the United States, to any Federal land within that city that is under the jurisdiction of either of those agencies.',
//   subject: 'Public lands and natural resources',
//   sponsor: {
//     id: 'K000367',
//     first_name: 'Amy',
//     last_name: 'Klobuchar',
//     political_party: 'Democrat',
//     is_active: true,
//     position: 'senator',
//     preferred_name: 'Amy Klobuchar',
//     rank: 'senior',
//     senate_terms: 3,
//     state: 'MN',
//     term_end_at: '2025-01-03T00:00:00+00:00',
//     term_start_at: '2019-01-03T00:00:00+00:00',
//     updated_at: '2021-02-25T15:45:44.131693+00:00',
//     born_at: '1960-05-25T00:00:00+00:00',
//     created_at: '2021-02-01T17:20:56.962892+00:00',
//     district: null,
//     gender: 'F',
//     house_terms: 0,
//   },
//   type: 'hr',
//   updated_at: '2021-02-01T22:36:36+00:00',
//   sponsorImage: {
//     extension: 'jpg',
//     name: 'B000444',
//     modifiedTime: '2021-02-11T21:45:05.944Z',
//     childImageSharp: {
//       gatsbyImageData: {
//         layout: 'constrained',
//         placeholder: {
//           fallback:
//             'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAYABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQBAgMF/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDAP/aAAwDAQACEAMQAAAB572TBonpKznySaUHf//EABwQAAICAgMAAAAAAAAAAAAAAAECAAMEEhETFP/aAAgBAQABBQKqoMbUULrFGssBM656N3yFdVGVbx//xAAXEQADAQAAAAAAAAAAAAAAAAABEBEC/9oACAEDAQE/AcgRVf/EABgRAAMBAQAAAAAAAAAAAAAAAAABEQIQ/9oACAECAQE/AdN0pOf/xAAcEAACAQUBAAAAAAAAAAAAAAAAASECEBExQZH/2gAIAQEABj8CnRqzMWUYpHXKaOeH/8QAGxABAQEAAgMAAAAAAAAAAAAAAREAEGExQVH/2gAIAQEAAT8hQ+rVwTs4wdtZNfE4EpqZqggyY0Nv1z//2gAMAwEAAgADAAAAEMcPwP/EABgRAQADAQAAAAAAAAAAAAAAAAEAEBEh/9oACAEDAQE/EFdTIIMr/8QAGREAAwADAAAAAAAAAAAAAAAAAAERECEx/9oACAECAQE/EOK8Ieys/8QAHBABAQACAwEBAAAAAAAAAAAAAREAITFBYVGh/9oACAEBAAE/EHy42DK4yjex1hRZnFmRxhIkTa93vCAJwTOsRBt3qrg6a1XCpv35hmO9H5n/2Q==',
//         },
//         images: {
//           fallback: {
//             src: '/static/678faad11ce4c3eb3b45c6d5334cacf9/907b0/B000444.jpg',
//             srcSet:
//               '/static/678faad11ce4c3eb3b45c6d5334cacf9/220e6/B000444.jpg 75w,\n/static/678faad11ce4c3eb3b45c6d5334cacf9/8251c/B000444.jpg 150w,\n/static/678faad11ce4c3eb3b45c6d5334cacf9/907b0/B000444.jpg 300w',
//             sizes: '(min-width: 300px) 300px, 100vw',
//           },
//           sources: [
//             {
//               srcSet:
//                 '/static/678faad11ce4c3eb3b45c6d5334cacf9/4646d/B000444.avif 75w,\n/static/678faad11ce4c3eb3b45c6d5334cacf9/85cc0/B000444.avif 150w,\n/static/678faad11ce4c3eb3b45c6d5334cacf9/0de1a/B000444.avif 300w',
//               type: 'image/avif',
//               sizes: '(min-width: 300px) 300px, 100vw',
//             },
//             {
//               srcSet:
//                 '/static/678faad11ce4c3eb3b45c6d5334cacf9/01c13/B000444.webp 75w,\n/static/678faad11ce4c3eb3b45c6d5334cacf9/fc263/B000444.webp 150w,\n/static/678faad11ce4c3eb3b45c6d5334cacf9/7acfc/B000444.webp 300w',
//               type: 'image/webp',
//               sizes: '(min-width: 300px) 300px, 100vw',
//             },
//           ],
//         },
//         width: 300,
//         height: 367,
//       },
//       parent: {
//         id: '75dc9e06-29df-5ddd-ba9d-360581aacfe8',
//       },
//       children: [],
//       id: 'cf080863-5630-5b43-94ab-8e1e09cbda2a',
//       internal: {
//         type: 'ImageSharp',
//       },
//     },
//   },
// };
