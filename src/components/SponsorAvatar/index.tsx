import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

export type SponsorAvatarProps = {
  id: string;
};

const SponsorAvatar = ({id}: SponsorAvatarProps) => {
  return <Wrapper>{/* <Img /> */}</Wrapper>;
};

export default SponsorAvatar;

const Wrapper = styled.div`
  border: thin solid red;
  border-radius: 100%;
  width: 50px;
  overflow: hidden;
  transform: all 1;

  :hover {
    transform: all 1s;
    -webkit-transform: scale(1.4);
    -moz-transform: scale(1.4);
    -o-transform: scale(1.4);
    -ms-transform: scale(1.4);
  }
`;
