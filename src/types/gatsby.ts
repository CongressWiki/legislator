import type { IGatsbyImageData } from 'gatsby-plugin-image';

export type ImageNode = {
  nodes: Array<{
    extension: string;
    name: string;
    modifiedTime: string;
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  }>;
};
