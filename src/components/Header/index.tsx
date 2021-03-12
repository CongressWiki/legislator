import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import ThemeToggle from '@components/ThemeToggle';
import LoginButton from '@components/LoginButton';
import SiteTitle from '@components/SiteTitle';

export type HeaderProps = {
  siteTitle?: string;
};

const Header = ({ siteTitle }: HeaderProps) => {
  return (
    <Wrapper>
      <ToolBar>
        <Link to="/">
          <SiteTitle title={siteTitle} />
        </Link>
        <ButtonsBar>
          <ThemeToggle />
          <LoginButton />
        </ButtonsBar>
      </ToolBar>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;

  margin: 0;
  width: 100%;
  height: 115px;
  border-bottom: 1px solid var(--color-gray300);
  background-color: hsl(215, 51%, 10%);
`;

const ButtonsBar = styled.div`
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ToolBar = styled.div`
  height: 100%;
  width: min(140ch, calc(100% - 64px));
  /* width: 80%; */
  /* max-width: 1400px; */
  margin: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
  }
`;

export const HeaderSpacer = styled.div`
  top: 0;
  margin: 0;
  padding: 0;
  height: 0;
  height: 115px;
`;

export default Header;
