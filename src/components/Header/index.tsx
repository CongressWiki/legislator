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
        {/* Re-enable when light theme and auth are ready   */}
        <ButtonsBar>
          <ThemeToggle />
          {/* <LoginButton /> */}
        </ButtonsBar>
      </ToolBar>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;

  margin: 0;
  padding: 0;

  display: flex;
  justify-content: center;
  width: 100%;
  height: 115px;

  @media (max-width: 600px) {
    min-height: 130px;
  }

  border-bottom: 1px solid var(--color-gray300);
  background-color: var(--color-background);
`;

const ButtonsBar = styled.div`
  position: relative;
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ToolBar = styled.div`
  z-index: 100;
  position: relative;
  width: min(140ch, calc(100% - 64px));
  height: 100%;
  min-height: 64px;
  margin: 0;
  padding: 0;

  display: flex;
  flex-wrap: true;
  justify-content: space-between;
  align-items: center;
  gap: 0;

  a {
    text-decoration: none;
  }

  @media (max-width: 600px) {
    width: 100%;
    min-height: 130px;
    flex-direction: column;
  }
`;

export const HeaderSpacer = styled.div`
  position: relative;
  top: 0;
  margin: 0;
  padding: 0;
  height: 115px;
  width: 100%;
  /* min-height: 130px; */
  @media (max-width: 600px) {
    width: 100%;
    min-height: 130px;
    flex-direction: column;
  }
`;

export default Header;
