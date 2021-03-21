import React from 'react';
import styled from 'styled-components';
import Image, { ImageProps } from '@components/Image';
import Avatar from '@components/Avatar';

export type CircleAvatarProps = {
  name: string;
  party: string;
  state?: string;
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
      {state ? <StateText>{state}</StateText> : null}
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

  width: 100%;
  height: 100%;
`;

const StateText = styled.span`
  z-index: 510;
  position: absolute;
  top: -10px;
  right: 0;

  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  font-family: advocate_c43_mid;
  color: var(--color-text);
`;

const Container = styled(Avatar)`
  z-index: 500;
  position: relative;

  -webkit-box-shadow: 0px 6px 7px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 6px 7px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 6px 7px 1px rgba(0, 0, 0, 0.75);
  background-color: var(--color-gray300);
`;

export default CircleAvatar;
