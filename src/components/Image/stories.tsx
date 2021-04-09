import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import Image, { ImageProps as ImageProperties } from './index';

export default {
  title: 'Components/Image',
  component: Image,
} as Meta;

const ExampleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: Story<ImageProperties> = (arguments_) => (
  <ExampleContainer>
    <Image {...arguments_} />
  </ExampleContainer>
);

export const Default = Template.bind({});
Default.args = {
  imageData: {
    extension: 'jpg',
    name: 'B000444',
    modifiedTime: '2021-02-11T21:45:05.944Z',
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback:
            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAYABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQBAgMF/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDAP/aAAwDAQACEAMQAAAB572TBonpKznySaUHf//EABwQAAICAgMAAAAAAAAAAAAAAAECAAMEEhETFP/aAAgBAQABBQKqoMbUULrFGssBM656N3yFdVGVbx//xAAXEQADAQAAAAAAAAAAAAAAAAABEBEC/9oACAEDAQE/AcgRVf/EABgRAAMBAQAAAAAAAAAAAAAAAAABEQIQ/9oACAECAQE/AdN0pOf/xAAcEAACAQUBAAAAAAAAAAAAAAAAASECEBExQZH/2gAIAQEABj8CnRqzMWUYpHXKaOeH/8QAGxABAQEAAgMAAAAAAAAAAAAAAREAEGExQVH/2gAIAQEAAT8hQ+rVwTs4wdtZNfE4EpqZqggyY0Nv1z//2gAMAwEAAgADAAAAEMcPwP/EABgRAQADAQAAAAAAAAAAAAAAAAEAEBEh/9oACAEDAQE/EFdTIIMr/8QAGREAAwADAAAAAAAAAAAAAAAAAAERECEx/9oACAECAQE/EOK8Ieys/8QAHBABAQACAwEBAAAAAAAAAAAAAREAITFBYVGh/9oACAEBAAE/EHy42DK4yjex1hRZnFmRxhIkTa93vCAJwTOsRBt3qrg6a1XCpv35hmO9H5n/2Q==',
        },
        images: {
          fallback: {
            src: '/static/678faad11ce4c3eb3b45c6d5334cacf9/907b0/B000444.jpg',
            srcSet:
              '/static/678faad11ce4c3eb3b45c6d5334cacf9/220e6/B000444.jpg 75w,\n/static/678faad11ce4c3eb3b45c6d5334cacf9/8251c/B000444.jpg 150w,\n/static/678faad11ce4c3eb3b45c6d5334cacf9/907b0/B000444.jpg 300w',
            sizes: '(min-width: 300px) 300px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/678faad11ce4c3eb3b45c6d5334cacf9/4646d/B000444.avif 75w,\n/static/678faad11ce4c3eb3b45c6d5334cacf9/85cc0/B000444.avif 150w,\n/static/678faad11ce4c3eb3b45c6d5334cacf9/0de1a/B000444.avif 300w',
              type: 'image/avif',
              sizes: '(min-width: 300px) 300px, 100vw',
            },
            {
              srcSet:
                '/static/678faad11ce4c3eb3b45c6d5334cacf9/01c13/B000444.webp 75w,\n/static/678faad11ce4c3eb3b45c6d5334cacf9/fc263/B000444.webp 150w,\n/static/678faad11ce4c3eb3b45c6d5334cacf9/7acfc/B000444.webp 300w',
              type: 'image/webp',
              sizes: '(min-width: 300px) 300px, 100vw',
            },
          ],
        },
        width: 300,
        height: 367,
      },
      parent: {
        id: '75dc9e06-29df-5ddd-ba9d-360581aacfe8',
      },
      children: [],
      id: 'cf080863-5630-5b43-94ab-8e1e09cbda2a',
      internal: {
        type: 'ImageSharp',
      },
    },
  },
};
