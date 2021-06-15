import React from 'react';
import styled from 'styled-components';
import MenuButton, { OptionsType } from '@components/atoms/MenuButton';
import SvgLibertyTorch from '@icons/buttons/LibertyTorch';
import { ThemeContext } from '@components/App/ThemeContext';

const FixedSiteMenu = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  const options: OptionsType[] = [
    {
      label: 'Theme',
      svg: SvgLibertyTorch,
      onClick: () => setColorMode(colorMode === 'light' ? 'dark' : 'light'),
    },
  ];

  return (
    <FixedBox>
      <SiteTitle>USACounts</SiteTitle>
      <MenuButton options={options} />
    </FixedBox>
  );
};

export default FixedSiteMenu;

const FixedBox = styled.div`
  z-index: 100;
  position: fixed;
  bottom: 5vh;
  right: 2vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const SiteTitle = styled.span`
  display: inline;
  font-family: advocate_c43_mid;
  font-size: 4rem;
  color: var(--color-primary);
  align-self: flex-end;
`;
