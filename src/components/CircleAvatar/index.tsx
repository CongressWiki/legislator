import React from 'react';
import styled from 'styled-components';
import Image, { ImageProps } from '@components/Image';
import Avatar from '@components/Avatar';

export type CircleAvatarProps = {
  name: string;
  party: string;
  state: string;
  imageData?: any;
  size?: string;
  className?: string;
} & Pick<ImageProps, 'loading' | 'backgroundColor'>;

const CircleAvatar = ({
  name,
  party,
  state,
  imageData,
  size,
  loading,
  backgroundColor,
  className,
}: CircleAvatarProps) => {
  return (
    <Wrapper className={className}>
      <StateText>{state}</StateText>
      <Container party={party} size={size}>
        <Image
          imageData={imageData}
          alt={name}
          loading={loading}
          backgroundColor={backgroundColor}
        />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  background: transparent;
  padding: 0;
  margin: 0;
  padding-top: 2rem;

  width: auto;
  height: auto;
`;

const StateText = styled.span`
  position: absolute;
  top: -18px;
  right: -14px;
  font-family: advocate_c43_mid;
  font-size: 2rem;
  z-index: -400;
  color: var(--color-text);
`;

const Container = styled(Avatar)`
  position: relative;

  -webkit-box-shadow: 0px 6px 7px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 6px 7px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 6px 7px 1px rgba(0, 0, 0, 0.75);
  background-color: var(--color-gray300);
`;

export default CircleAvatar;
