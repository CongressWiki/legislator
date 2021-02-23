import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import ThemeToggle from '@components/ThemeToggle';

export type HeaderProps = {
  siteTitle: string;
};

const Header = ({ siteTitle }: HeaderProps) => {
  return (
    <Wrapper>
      <ToolBar>
        <Link to="/">
          <SiteTitle>{siteTitle}</SiteTitle>
        </Link>
        <ThemeToggle />
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
  background-color: var(--color-background);
`;

const ToolBar = styled.div`
  margin: 0;
  padding-left: 32px;
  padding-right: 32px;
  display: flex;
  align-items: center;

  justify-content: space-between;
  width: 80%;

  a {
    text-decoration: none;
  }
`;

const SiteTitle = styled.h3`
  margin: 0;
  font-size: 51px;
  line-height: 44px;
  letter-spacing: -2px;
  display: inline-block;
  font-family: advocate_c45_mid;

  color: var(--color-secondary);
`;

export const HeaderSpacer = styled.div`
  top: 0;
  margin: 0;
  padding: 0;
  height: 0;
  height: 107px;
`;

export default Header;
