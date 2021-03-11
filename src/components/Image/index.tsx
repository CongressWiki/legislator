import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Candidate from '@components/icons/Candidate';

/*
 * This component is built using the new `gatsby-plugin-image` (beta) to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded by passing the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-plugin-image`: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/
 * - how to: https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-plugin-image/
 */

export type ImageProps = {
  imageData: any;
  alt: string;
  className?: string;
};

const Image = ({ imageData, alt, className }: ImageProps) => {
  const image = imageData ? getImage(imageData) : false;
  if (!image) {
    return <Candidate className={className} />;
  }
  return <GatsbyImage image={image} alt={alt} className={className} />;
};

export default Image;
