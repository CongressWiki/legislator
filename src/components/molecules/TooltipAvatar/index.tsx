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
    // @ts-expect-error styled-components type requires className for an unknown reason
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
          className="avatar"
        />
        <span className="tooltiptext">{preferred_name}</span>
      </Tooltip>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ size: string }>`
  height: ${(properties) => properties.size};
  position: relative;

  background: transparent;

  padding: 0;
  margin: 0;

  transition: all 0.3s ease-in-out;

  .avatar {
    transition: all 0.3s ease-in-out;

    -webkit-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.75);
  }
`;

const Tooltip = styled.div`
  position: relative;
  min-width: fit-content;
  max-width: fit-content;

  margin: 0;
  padding: 0;

  display: inline-block;
  transition: all 0.3s ease-in-out;
  justify-self: center;
  flex: 1;

  .tooltiptext {
    z-index: 3000;

    visibility: hidden;

    width: 120px;

    background-color: var(--color-bill);

    position: absolute;
    top: 100%;
    left: 50%;

    margin-left: -60px;

    border-radius: 6px;
    border-width: 5px;
    border-style: solid;
    border-color: var(--color-bill) transparent transparent transparent;

    padding: 5px 0;

    text-align: center;

    opacity: 0;

    transition: opacity 0.3s;
    transition: top 0.3s;

    font-style: italic;

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
    border-color: var(--color-bill) transparent transparent transparent;

    transform: rotate(180deg);
  }

  :hover {
    .avatar {
      z-index: 3000;
      transform: scale(1.5);

      -webkit-box-shadow: -1px 0px 7px 5px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: -1px 0px 7px 5px rgba(0, 0, 0, 0.75);
      box-shadow: -1px 0px 7px 5px rgba(0, 0, 0, 0.75);
    }

    .state {
      z-index: 3100;
      visibility: visible;
      opacity: 1;
    }

    .tooltiptext {
      z-index: 3000;
      visibility: visible;
      opacity: 1;
      top: 140%;
    }
  }
`;

const StateText = styled.span`
  position: absolute;
  top: -1.75rem;
  right: -1.75rem;

  margin: 0;
  padding: 0;

  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease-in-out;

  font-size: 2rem;
  font-family: advocate_c43_mid;
  color: var(--color-gray700);
`;

export default TooltipAvatar;
