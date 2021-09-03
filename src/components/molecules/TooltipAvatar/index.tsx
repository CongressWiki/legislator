import React from 'react';
import styled from 'styled-components';
import { ImageProps } from '@components/atoms/Image';
import CircleAvatar from '@components/molecules/CircleAvatar';
import type { OfficialWithImage } from '@type/hasura';

export type TooltipAvatarProps = {
  state?: string;
  size?: string;
  className?: string;
} & Pick<OfficialWithImage, 'preferred_name' | 'political_party' | 'image'> &
  Pick<ImageProps, 'loading' | 'backgroundColor'>;

const TooltipAvatar = ({
  preferred_name,
  political_party,
  image,
  state,
  size,
  loading,
  backgroundColor,
  className,
}: TooltipAvatarProps) => {
  return (
    <Wrapper className={className} size={size}>
      <Tooltip>
        {state ? <StateText className="state">{state}</StateText> : null}
        <CircleAvatar
          preferred_name={preferred_name}
          political_party={political_party}
          size={size}
          image={image}
          loading={loading}
          backgroundColor={backgroundColor}
          whileHover={{
            scale: 1.5,
          }}
          className="avatar"
        />
        <span className="tooltiptext">{preferred_name}</span>
      </Tooltip>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ size: string }>`
  position: relative;

  height: ${(properties) => properties.size};

  padding: 0;
  margin: 0;

  background: transparent;
  .avatar {
    -webkit-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.75);
  }
`;

const Tooltip = styled.div`
  position: relative;

  display: inline-block;
  justify-self: center;
  flex: 1;

  width: fit-content;
  margin: 0;
  padding: 0;

  .tooltiptext {
    z-index: 3;
    position: absolute;
    top: 100%;
    left: 50%;

    visibility: hidden;
    opacity: 0;

    width: 120px;
    padding: 5px 0;
    margin-left: -60px;

    border-radius: 6px;
    border-width: 5px;
    border-style: solid;
    border-color: var(--color-text) transparent transparent transparent;

    background-color: var(--color-text);

    font-style: italic;
    text-align: center;
    color: var(--color-background);

    @media (max-width: 450px) {
      width: 100px;
    }
  }

  .tooltiptext::after {
    content: '';

    position: absolute;
    bottom: 110%;
    left: 50%;

    margin-left: -5px;

    border-width: 5px;
    border-style: solid;
    border-color: var(--color-text) transparent transparent transparent;

    transform: rotate(180deg);
  }

  :hover {
    .avatar {
      z-index: 3;

      -webkit-box-shadow: -1px 0px 7px 5px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: -1px 0px 7px 5px rgba(0, 0, 0, 0.75);
      box-shadow: -1px 0px 7px 5px rgba(0, 0, 0, 0.75);
    }

    .state {
      z-index: 4;
      visibility: visible;
      opacity: 1;
    }

    .tooltiptext {
      z-index: 3;
      visibility: visible;
      opacity: 1;
      top: 140%;
    }
  }
`;

const StateText = styled.span`
  position: absolute;
  top: -28px;
  right: -28px;

  visibility: hidden;
  opacity: 0;

  margin: 0;
  padding: 0;

  font-size: 2rem;
  font-family: advocate_c43_mid;
  color: var(--color-text);
`;

export default TooltipAvatar;
